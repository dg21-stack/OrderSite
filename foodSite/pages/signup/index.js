import Card from "../../components/Card/Card";
import { useState, useRef, useContext, useEffect } from "react";
import styles from './signup.module.css';
import {useRouter } from 'next/router';
import AuthContext from "../../components/store/use-context";
import Head from "next/head";

const checkUpper = (string) => {
    for (let i of string){
        if (isNaN(i)){
        if (i == i.toUpperCase()){
            return true;
        }
    }
    }
    return false;
}

const signup = () => {
    
    
   
    const router = useRouter();
    const fRef = useRef();
    const sRef = useRef();
    const tRef = useRef();
    const foRef = useRef();
    const authCtx = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isBusiness, setIsBusiness] = useState(false);
    const [fName, setFName] = useState(null);
    const [sName, setSName] = useState(null);
    const [tName, setTName] = useState(null);
    const [foName, setFoName] = useState(null);
    const [inValidSignup, setInvalidSignUp] = useState(null);
    useEffect(() => {
        if (authCtx.isBusiness && authCtx.isLoggedIn){
            router.push('/business');
        }
        if (!authCtx.isBusiness & authCtx.isLoggedIn) {
            router.push('/AllRestaurants');
        }
    },[authCtx.isLoggedIn])
   
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('../api/handler', {
          method: 'POST',
          body: JSON.stringify(enteredMeetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
    
    }
 
    const businessHandler = () => {
        setIsBusiness(prevState => !prevState);
        fRef.current.value = '';
        sRef.current.value = '';
        tRef.current.value = '';
        foRef.current.value = '';
        setFName(null);
        setSName(null);
        setTName(null);
        setFoName(null);
    }
    const signup = () => {
        if (fName && sName & tName && foName) {
        const accArr = {
            firstName: fRef.current.value,
            lastName: sRef.current.value,
            email: tRef.current.value,
            password: foRef.current.value
        }
        const enteredMeetupData ={
            name: accArr.firstName,
            address: accArr.lastName,
            image:'',
            description: '',
            paragraph: '',
            menu: [],
            email: accArr.email
        }
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRIvxAwx8KqrhXOQpIzkSave61memF2Uw', {
            method: 'POST',
            body: JSON.stringify({
              email: accArr.email,
              password: accArr.password,
              returnSecureToken: true
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            setIsLoading(false);
            if (res.ok){

    if (!isBusiness){     
    fetch(`https://reactfirst-48147-default-rtdb.firebaseio.com/user/0.json`, {
    method: 'POST',
    body: JSON.stringify({
        email: accArr.email,
        firstName: accArr.firstName,
        lastName: accArr.lastName
    }),
    headers: {
      'Content-Type': 'application/json'
            }}).then().then(r => {
                    router.push('/AllRestaurants');
                    authCtx.login(tRef.current.value,accArr.firstName, accArr.lastName, false);})}
    else {
        addMeetupHandler(enteredMeetupData);
        fetch(`https://reactfirst-48147-default-rtdb.firebaseio.com/user/1.json`, {
            method: 'POST',
            body: JSON.stringify({
                email: accArr.email,
                businessName: accArr.firstName,
                address: accArr.lastName
            }),
            headers: {
            'Content-Type': 'application/json'
                    }}).then().then(r => {
                            router.push('/business');
                            authCtx.login(tRef.current.value,accArr.firstName, accArr.lastName, true);
                            })}
    }
        else {
              return res.json().then(data => {
                let errorMessage = 'Auth failed';
                if (data && data.error && data.error.message){ 
                  errorMessage = data.error.message;
                }
                alert(errorMessage);
              })}})
     } 
     else {
        let errStr = "ERROR:";
        setInvalidSignUp(true);
        if (!fName){
            errStr +=  " Invalid Name,";
        }
        if (!sName){
            if (isBusiness){
                errStr += " Invalid Address,";
            }
            else{
                errStr += " Invalid Last Name,";
            }
        }
        if (!tName){
            errStr += " Invalid Email,";
        }
        if (!foName) {
            errStr += " Invalid Password,";
        }
        errStr = errStr.slice(0,-1);
        alert(errStr);
     }
    };
    const checkValid = (e) => {
        setInvalidSignUp(true);
        if (e.target.name === 'business' || e.target.name  === 'first') {
            if (e.target.value.length > 1){
                
                setFName(true);
                return
            }
            setFName(false);

        }
        if (e.target.name === 'address' || e.target.name === 'last'){
            if (e.target.value.length > 1) {
                setSName(true);
                console.log('a');
                return 
            }
            setSName(false);

        }
        if (e.target.name === 'email') {
            if (e.target.value.length > 0 && (e.target.value.includes('.com') || e.target.value.includes('.net') || e.target.value.includes('.edu')) && e.target.value.includes('@')){
                setTName(true);
                return;
            }
            setTName(false);
        }
        if (e.target.name === 'password') {
            if (e.target.value.length > 6 && /\d/.test(e.target.value) && checkUpper(e.target.value)){
                setFoName(true);
                return;
            }
            setFoName(false);
            
        }
        
    } 
    const setBack = (e) => {
        if (e.target.name === 'business' || e.target.name  === 'first') {
           setFName(null);

        }
        else if ( e.target.name === 'address' || e.target.name === 'last'){
           setSName(null);

        }
        else if (e.target.name === 'email') {
            setTName(null);
        }
        else {
        setFoName(null);
        
    } 
    }      
    if (isBusiness){

        return  <Card> <Head><title>Sign Up</title></Head><h1>Signup Business</h1>
       <div className={styles.buttonBusiness}> <button onClick = {businessHandler}>&#x2190;</button><span>&#9678;</span>&#9673;<span></span><button>&#x2192;</button></div> 
        <div className= {styles.inputContainer}>
        <label htmlFor="business">Business Name</label>
        <input placeHolder = "ex: fancy business" onInput = {setBack} onBlur = {checkValid} ref = {fRef} name = 'business' className={`${fName != false ?  '': styles.flagged}`}/>
        <label htmlFor="address">Address</label>
        <input placeHolder = "ex: 7 business rd" onInput = {setBack} onBlur = {checkValid} ref = {sRef} type = "text" name = 'address' className={`${sName != false ?  '': styles.flagged}`}/>
        <label htmlFor="email">Email</label>
        <input placeHolder = "ex: email@email.com" onInput = {setBack} onBlur = {checkValid}  ref = {tRef} type = "email" name = 'email' className={`${tName != false ?  '': styles.flagged}`}/>
        <label htmlFor="password">Password</label>
        <input placeHolder = "xxxxxx" onInput = {setBack} onBlur = {checkValid} ref = {foRef} type = "password" name = "password" className={`${foName != false ?  '': styles.flagged}`}/>
        </div>
        <button onClick = {signup} className = {inValidSignup ? styles.errBtn : styles.buttonSignUp}>Sign Up</button>
        </Card>
    }
    return <Card><Head><title>Sign Up</title></Head> <h1>Signup Customer</h1>
           <div className={styles.buttonBusiness}> <button>&#x2190;</button><span>&#9673;</span>&#9678;<span></span><button onClick={businessHandler}>&#x2192;</button></div> 
    <div className= {styles.inputContainer}>
    <label htmlFor="first">First Name</label>
    <input placeHolder = "First Name" onInput = {setBack} onBlur = {checkValid} type = "text" ref = {fRef} name = 'first' className={`${fName != false ?  '': styles.flagged}`}/>
    <label htmlFor="last">Last Name</label>
    <input placeHolder = "Last Name" onInput = {setBack} onBlur = {checkValid} ref = {sRef} type = "text" name = 'last' className={`${sName != false ?  '': styles.flagged}`}/>
    <label htmlFor="email">Email</label>
    <input placeHolder = "ex: email@email.com" onInput = {setBack} onBlur = {checkValid} ref = {tRef} type = "email" name = 'email'className={`${tName != false ?  '': styles.flagged}`}/>
    <label htmlFor="password">Password</label>
    <input placeHolder = "xxxxxx" onInput = {setBack} onBlur = {checkValid} ref = {foRef} type = "password" name = "password" className={`${foName != false ?  '': styles.flagged}`}/>
    </div>
    <button onClick = {signup} className = {inValidSignup ? styles.errBtn : styles.buttonSignUp}>Sign Up</button>
    </Card>
}

export default signup;