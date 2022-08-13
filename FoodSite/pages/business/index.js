import  { useRouter } from "next/router";
import { useState, useContext, useEffect, Fragment } from "react";
import Card from "../../components/Card/Card";
import AddItem from "../../components/items/addItem";
import ChangeDescription from "../../components/items/ChangeDescription";
import ChangeImage from "../../components/items/ChangeImage";
import ChangeName from "../../components/items/ChangeName";
import ChangeParagraph from "../../components/items/ChangeParagraph";
import RemoveItem from "../../components/items/removeItem";
import AuthContext from "../../components/store/use-context";
import styles from './business.module.css';
import BusinessReviews from "../../components/Details/BusinessReviews";
import Head from 'next/head';

const BusinessPage = () => {
    const [currHeight, setCurrHeight] = useState(0);
    const [currHeight1, setCurrHeight1] = useState(0);
    const [currHeight2, setCurrHeight2] = useState(0);
    const [currHeight3, setCurrHeight3] = useState(0);
    const [currHeight4, setCurrHeight4] = useState(0);
    const [currHeight5, setCurrHeight5] = useState(0);

    const [totalNum, setTotalNum] = useState(null);
    const [reviewList, setReviewList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);

    async function getter(enteredItemData = 1) {
        setIsLoading(true);
        let a = await getID();
        console.log(a);
        const response = await fetch(`../api/getHandler1?pageIndex=${enteredItemData}&pageSize=2&restaurantURL=${a}`,
        {
            method: 'GET',
        } );
        const data = await response.json();
        setIsLoading(false);
        if (!totalNum){
            setTotalNum(data[0].totalRecords[0] ? data[0].totalRecords[0].body : 1);
        }
        console.log(data, totalNum);
        setReviewList(data[0].data);
    }
    useEffect(() => {
        getter()
    },[])
    const plus = () => {
        setPageNum(prevVal => {
           
            if (totalNum/2 > prevVal){
            prevVal++;
            getter(prevVal);
            }
            
            return prevVal;
        })
    }
    const minus = () => {
        setPageNum(prevVal => {
            if (prevVal > 1){
            prevVal--;
            getter(prevVal);
            }
            return prevVal;
        })
    }
    const router = useRouter();
    const authCtx = useContext(AuthContext);
  
    useEffect(() => {
        if (!authCtx.isLoggedIn){
            router.push('/')
        }
        if (!authCtx.isBusiness){
            router.push('/AllRestaurants');
        }
    },[authCtx.isLoggedIn]);
    async function getID() {
        const response = await fetch(`../api/getIDhandler?email=${authCtx.token}`, {
            method: 'GET'
        })
        const data = await response.json();
        console.log(data)
        return data.id;
    }
    async function addItemHandler(enteredItemData) {
        const response = await fetch('../api/handler1', {
          method: 'POST',
          body: JSON.stringify({
            item: enteredItemData,
            email: authCtx.token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
        
    }
    async function addParagraphHandler(enteredItemData) {
        const response = await fetch('../api/paragraphHandler', {
          method: 'POST',
          body: JSON.stringify({
            item: enteredItemData,
            email: authCtx.token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
        
    }

    async function nameChangeHandler(enteredItemData) {
        const response = await fetch('../api/handler5', {
            method: 'POST',
            body: JSON.stringify({
              item: enteredItemData,
              email: authCtx.token
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        await response.json();
    }

    async function removeItemHandler(enteredItemData) {
        const response = await fetch('../api/handler2', {
          method: 'POST',
          body: JSON.stringify({
            item: enteredItemData,
            email: authCtx.token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
        
        
    }
    async function changeHandler(enteredItemData ,isDescrip){
        const response = await fetch(`../api/handler${isDescrip ? 4 : 3}`, {
            method: 'POST',
            body: JSON.stringify({
              item: enteredItemData,
              email: authCtx.token
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.json();
          
    }

    const heightHandler = () => {
        if (currHeight == 0){
        setCurrHeight(600);
        return
        }
        setCurrHeight(0);
    }
    const heightHandler1 = () => {
        if (currHeight1 == 0){
            setCurrHeight1(300);
            return
            }
            setCurrHeight1(0);
        }

        const heightHandler2 = () => {
            if (currHeight2 == 0){
                setCurrHeight2(300);
                return
                }
                setCurrHeight2(0);
            }

      const heightHandler3 = () => {
        if (currHeight3 == 0){
            setCurrHeight3(300);
            return
            }
            setCurrHeight3(0);
        }
        const heightHandler4 = () => {
            if (currHeight4 == 0){
                setCurrHeight4(500);
                return
            }
            setCurrHeight4(0);

        }
        const heightHandler5 = () => {
            if (currHeight5 == 0){
                setCurrHeight5(300);
                return
            }
            setCurrHeight5(0);

        }
    
    return <Fragment>
    <Head><title>Business</title></Head>
    <Card>
        <div className ={styles.title}>Welcome to Your Business Page!</div>
        <div className= {styles.subtitles}>Customize Your Entries Here:</div>
        <button className={styles.addItem} onClick = {heightHandler} style = {{borderRadius: '20px 20px 0px 0px'}}>Add Item Here</button>
        <div className={styles.visibility} style = {{maxHeight : currHeight}}>
      
        <AddItem clicker = {heightHandler} addItemHandler = {addItemHandler}/>
        </div>
        <button className = {styles.addItem} onClick = {heightHandler1}> Remove Item Here </button>
        <div className={styles.visibility} style = {{maxHeight : currHeight1}}>
        <RemoveItem clicker = {heightHandler1} removeItemHandler = {removeItemHandler}/>
        </div>

        <button className = {styles.addItem} onClick = {heightHandler2}> Change Subtitle Here </button>
        <div className={styles.visibility} style = {{maxHeight : currHeight2}}>
        <ChangeDescription clicker = {heightHandler2} changeDescriptionHandler = {changeHandler}/>
        </div>
        <button className = {styles.addItem} onClick = {heightHandler3}> Change Name Here </button>
        <div className={styles.visibility} style = {{maxHeight : currHeight3}}>
        <ChangeName clicker = {heightHandler3} changeDescriptionHandler = {nameChangeHandler}/>
        </div>
        <button className = {styles.addItem} onClick = {heightHandler4}> Change Description Here </button>
        <div className={styles.visibility} style = {{maxHeight : currHeight4}}>
        <ChangeParagraph clicker = {heightHandler4} changeDescriptionHandler = {addParagraphHandler}/>
        </div>
        <button className = {styles.addItem} style = {{borderRadius: currHeight5 == 0 ? '0px 0px 20px 20px' : '0px 0px 0px 0px'}} onClick = {heightHandler5}> Change Image Here </button>
        <div className={styles.visibility} style = {{maxHeight : currHeight5, borderRadius: '0px 0px 20px 20px', border: currHeight5 == 0 ? 'none' : '1px solid grey' }}>
        <ChangeImage clicker = {heightHandler5} changeImageHandler = {changeHandler}/>
        </div>
        
    </Card>
    
    <Card><BusinessReviews  total = {totalNum} isLoading = {isLoading} getter = {getter} pageNum = {pageNum} reviewList = {reviewList} plus = {plus} minus = {minus}/></Card>
    </Fragment>
}


export default BusinessPage;