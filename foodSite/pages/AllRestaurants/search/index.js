import { useContext, useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import SearchInfo from "../../../components/Details/SearchInfo";
import AuthContext from "../../../components/store/use-context";
import styles from '../../../components/Details/SearchInfo.module.css';
import Head from 'next/Head';
const search = () => {
    const authCtx = useContext(AuthContext);
    const [currSearch, setCurrSearch] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [totalNum, setTotalNum] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currData, setCurrData] = useState([])
    const [circArr, setCircArr] = useState(null);

    useEffect(() => {

       const ressy = setTimeout(() => {if (currSearch == null) {
        setCurrSearch(authCtx.searchStr);
        getter(authCtx.searchStr);
        }
        else if (currSearch  != ''){

            getter(currSearch);
            console.log('hello!',currSearch);
            console.log(currData);
        }
            else {
                setCurrData([]);
            }
        },500);
        
        return () => {
            clearTimeout(ressy);
        }

    }, [currSearch])
 
    async function getter(value,enteredIndex = 1){
        setIsLoading(true);
        const response = await fetch(`../api/getResListHandler?name=${value}&pageIndex=${enteredIndex}&pageSize=3`,
        {
            method: 'GET',
        } );
        const data = await response.json();
        setIsLoading(false);
        setCurrData(data[0].data);
        console.log(data);
        
        setTotalNum(data[0].totalRecords[0] ? parseInt(data[0].totalRecords[0]?.description) : 1);
       
    
        
      
      
    }
    const plus = () => {
        setPageNum(prevVal => {
            
            if (totalNum/2 > prevVal){
                console.log(totalNum);
            prevVal++;
            getter(currSearch, prevVal);
            }
    
            console.log(prevVal);
            return prevVal;
        })
    }
    const minus = () => {
        setPageNum(prevVal => {
            if (prevVal > 1){
            prevVal--;
            getter(currSearch, prevVal);
            }
            return prevVal;
        })
    }
    useEffect(() => {
        if (totalNum) {
            
            setCircArr(prevVal => {
                prevVal = [];
                console.log(totalNum / 2);
                while (prevVal.length < parseInt(totalNum/2)){
                    if (prevVal.length == pageNum - 1) {
                        prevVal.push(<span className = {styles.selectedBtn}>  &#9679;</span>)
                    }
                    else {
                    prevVal.push(<span style = {{color: '#797979'}}> &#9679;</span>)
                    }
                }
                return prevVal;
            })
        }
    }, [totalNum, pageNum])
    const changeHandler = (e) => {
        setPageNum(1);
        setCurrSearch(e.target.value);
    }
    return <Card>
        <Head><title>Search</title></Head>
        <h2 className={styles.name}>Search</h2>
        <input placeHolder = "search for business!" onInput = {changeHandler} className = {styles.input} value = {currSearch}/>

      
        {!isLoading && currData != '' && <div className = {styles.name} style = {{color: 'rgba(0,0,0,0.8)'}}> Search Results: </div>}
        <hr/> 
        {isLoading && <h2 className={styles.name}>Searching for Restaurants...</h2>}
       {!isLoading && <div>
        <div> 
        {currData.map(key => (<SearchInfo 
        name = {key.name} 
        id = {key.id} 
        key = {key.id} 
        image = {key.image}
        address = {key.address}
        description = {key.description} 
        isLoading = {isLoading} />))}
        </div>
        <div>
            {circArr}
        </div>
        {pageNum != 1 && <button className={styles.nextBtn} onClick = {minus}>previous</button>}
        {pageNum < totalNum / 2 && <button className={styles.nextBtn} onClick = {plus}>next</button>}
        </div>}
</Card>
}


export default search; 