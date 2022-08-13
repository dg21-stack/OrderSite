import Card from "../../components/Card/Card";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../components/store/use-context";
import ModalCart from "../../components/Cart/ModalCart";
import styles from './checkout.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";
import Head from "next/head";
const cardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
const dateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

const checkout = () => {
    const authCtx = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (!authCtx.isLoggedIn){
            router.push('/')
        }
        if (authCtx.isBusiness){
            router.push('/business');
        }
    },[authCtx.isLoggedIn])
   
    const [checkoutInfo, setCheckoutInfo] = useState({
        address: '',
        zipCode: '',
        city: '',
        state: '',
        phoneNumber:'',
        card: '',
        cvv: '',
        expirationDate:''
    });
    const [trueAdd, setTrueAdd] = useState(null);
    const [trueZip, setTrueZip] = useState(null);
    const [trueCity, setTrueCity] = useState(null);
    const [trueState, setTrueState] = useState(null);
    const [truePhone, setTruePhone] = useState(null);
    const [trueCard, setTrueCard] = useState(null);
    const [trueCvv, setTrueCvv] = useState(null);
    const [trueExpir, setTrueExpir] = useState(null);
    const [invalidSubmission ,setInvalidSubmission] = useState(null);
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    
    const checkoutSetter = (e) =>{
   
        setCheckoutInfo(prev => {
            if (e.target.name === 'address'){
                if (e.target.value.length > 1){
                    prev.address = e.target.value;
                 
                    setTrueAdd(true);
                    return prev;
                }
                setInvalidSubmission(true);
                setTrueAdd(false);
               
              
                return prev;
            }
            if (e.target.name === 'zip code'){
                if (e.target.value.length === 5){
                    prev.zipCode = e.target.value;
                  
                    setTrueZip(true);
                    return prev;
                }
                setInvalidSubmission(true);
              setTrueZip(false);
                return prev;
            }
            if (e.target.name === 'city'){
                if (e.target.value.length > 1) {
                    prev.city = e.target.value;
                    setTrueCity(true);
                    setInvalidSubmission(false);
                    return prev;
                }
                setInvalidSubmission(true);
                setTrueCity(false);
                return prev;
            }
            if (e.target.name === 'state'){
                if (e.target.value.length > 1) {
                    prev.state = e.target.value;
                    setTrueState(true);
                    return prev;
                }
                setInvalidSubmission(true);
                setTrueState(false);
                return prev;
            }
            if (e.target.name === 'phone'){
              
                if (e.target.value.length === 10) {
                    prev.phoneNumber = e.target.value;
                    setTruePhone(true)
                    return prev;
                }
                setInvalidSubmission(true);
                setTruePhone(false);
                return prev;
            }
            if (e.target.name === 'card'){
              
                if (cardRegex.test(e.target.value)){
                   
                    prev.card = e.target.value;
                    setTrueCard(true);
                  
                    return prev;
                }
                setInvalidSubmission(true);
                setTrueCard(false);
                return prev;
            }
            if (e.target.name === 'cvv'){
                if (e.target.value.length === 3 && !isNaN(e.target.value)) {
                    prev.cvv = e.target.value;
                    setTrueCvv(true);
                    return prev;
                }
                setInvalidSubmission(true);
                setTrueCvv(false);
                return prev;
            }
            if (e.target.name === 'expiration date'){
                if (dateRegex.test(e.target.value)){
                    prev.expirationDate= e.target.value;
                    setTrueExpir(true);
                    return prev;
                }
                setInvalidSubmission(true);
                setTrueExpir(false);
                return prev;
            }
        })
        
    }
    async function addItemHandler(e) {
        e.preventDefault();
        let errStr = '';
        if (!trueAdd){
            errStr += ' invalid Address,';
         
        }
        if (!trueZip){
            errStr += ' invalid Zip Code,';
          
        }
        if (!truePhone){
            errStr += ' invalid Phone Number,';
        }
        if (!trueCity){
            errStr += ' invalid City,';
          
        }
        if (!trueState){
            errStr += ' invalid State,';
          
        }
        if (!trueCvv){
            errStr += ' invalid CVV,'
          
        }
        if (!trueExpir){
            errStr += ' invalid Expiration Date,';
    
        }
        errStr = errStr.slice(0,-1);
        if (invalidSubmission) {
            alert(errStr);
            return;
        }
        else if (!invalidSubmission) {
        let checkoutCart = [];
        for (let values in authCtx.currCart)  {
            if (authCtx.currCart[values].total > 0){
                checkoutCart.push(authCtx.currCart[values]);
            }
        }
        let checkoutInfoList = {...checkoutInfo, 
            cart : checkoutCart,
            price : '$' + authCtx.totalprice + '.00',
            items : authCtx.items}

        const response = await fetch('../api/checkoutHandler', {
          method: 'POST',
          body: JSON.stringify({
            item: checkoutInfoList,
            email: authCtx.token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
        setIsCheckedOut(true);
        authCtx.checkout();
       
    }
    }
    const  buttonSetter = () => {
        setInvalidSubmission(null);
    }
    if (isCheckedOut){
        return  <Card> <Link href = "/AllRestaurants">
        <div  className = {styles.signup}>
       <b> Continue Shopping!
        </b>
                </div>
        </Link> 
        </Card>
    }
    return <Card>
        <Head><title>Checkout</title></Head>
        <div className={styles.title}>Hello, {authCtx.user}. Checkout here!</div>
       <form className={styles.label} onSubmit = {addItemHandler}>
        <hr/>
        <ul>
            <li className={styles.left}>
                <div>
        <label>Address</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "address" placeholder = "ex: 7 Classy Blvd" className={trueAdd != false ?  styles.input : styles.flagged}/>

        </div>
        <div>
        <label>Zip Code</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "zip code" placeholder = "xxxxx" className={trueZip != false ?  styles.input : styles.flagged}/>
        </div>
        <div>
        <label>City</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "city" placeholder="ex: New York City" className={trueCity != false ?  styles.input : styles.flagged}/>
        </div>
        <div>
        <label>State</label>
        <input onInput = {buttonSetter} onBlur={checkoutSetter} name = "state" placeholder="ex: NY" className={trueState != false ?  styles.input : styles.flagged}/>
        </div>
       
        </li>
        <li>
        <div>
        <label>Phone Number</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "phone" placeholder="ex: xxx-xxx-xxxx" className={truePhone != false ?  styles.input : styles.flagged}/>
        </div>
        <div>
        <label>Card</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "card" placeholder="xxxx-xxxx-xxxx-xxxx" className={trueCard != false ?  styles.input : styles.flagged}/>
        </div>
        <div>
        <label>CVV</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "cvv" placeholder="xxx" className={trueCvv != false ?  styles.input : styles.flagged}/>
        </div>
        <div>
        <label>Expiration Date</label>
        <input onInput = {buttonSetter} onBlur = {checkoutSetter} name = "expiration date" placeholder="xx/xx" className={trueExpir != false ? styles.input : styles.flagged} />
        </div>
        </li>
        </ul>
        <hr/>
        <div className={styles.total}>Your Total is ${authCtx.totalprice}.00 for {authCtx.items} {authCtx.items > 1 ? 'items' : 'item'}</div>
        <div>
            <button className = {invalidSubmission == true  ?  styles.errBtn : styles.normBtn}>place order</button>
        </div>
        </form>
        {authCtx.isOpen && <ModalCart/>}
    </Card>;
}  

export default checkout; 