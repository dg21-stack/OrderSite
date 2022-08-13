import AuthContext from "../../components/store/use-context";
import { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Restaurant from "../../components/RestaurantList/Restaurant";
import ModalCart from "../../components/Cart/ModalCart";
import Card from "../../components/Card/Card";
import styles from '../../components/RestaurantList/RestaurantItem.module.css';
import Head from "next/head";

const AllRestaurants = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resList, setResList] = useState([]);
    const [currList, setCurrList] = useState(1);
    const [totalNum, setTotalNum] = useState(null);
    async function getter(enteredItemData = 1) {
        setIsLoading(true);
        const response = await fetch(`../api/getResHandler?pageIndex=${enteredItemData}&pageSize=2`,
        {
            method: 'GET',
        } );
        const data = await response.json();
        setIsLoading(false);
        if (!totalNum){
            setTotalNum(data[0].totalRecords[0].description);
        }
        setResList(data[0].data);
    }
    const authCtx = useContext(AuthContext);
    const router = useRouter();
    const setter = () => {
        
        setCurrList(prevVal => {
            if (totalNum / 2 > prevVal) {
            prevVal++; 
            }
            getter(prevVal);
            return prevVal;
        })
    }
    const plus = () => {
        console.log('hrllo');
        setCurrList(prevVal => {
            if (totalNum / 2 > prevVal) {
            prevVal++; 
            getter(prevVal);
            }
           
            return prevVal;
        })
    }
    const minus = () => {
        setCurrList(prevVal => {
            if (prevVal > 1) {
            prevVal--; 
            getter(prevVal);
            }
            return prevVal;
        })
    }
    useEffect(() => {
        getter();
        if (!authCtx.isLoggedIn){
            router.push('/')
        }
        if (authCtx.isBusiness){
            router.push('/business');
        }
    }, [])
    return <Fragment>
        <Head><title>Restaurants</title></Head>
        <Card><div className = {styles.userContainer}>Welcome, {authCtx.user}!</div>
        <div className = {styles.subtitle}>Be sure to Grab Something Tasty Here at ReactEats!</div></Card>
        {authCtx.isOpen && <ModalCart/>}
        <Restaurant 
        res = {resList}
        plus = {plus}
        minus = {minus}
        isLoading = {isLoading}
        total = {totalNum}
        pageNum = {currList}
        key = {1}
        />
        </Fragment>
}



export default AllRestaurants;

