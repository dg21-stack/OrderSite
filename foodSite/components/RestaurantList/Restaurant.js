import { Fragment, useEffect } from "react";
import Card from "../Card/Card";
import RestaurantItem from "./RestaurantItem";
import styles from './RestaurantItem.module.css';
import { useState } from "react";  
const Restaurant = (props) => {
    const [circArr, setCircArr] = useState([]);

    useEffect(() => {
        setCircArr(prevVal => {
            prevVal = [];
        while (prevVal.length < props.total / 2 ) {
           
            if (prevVal.length == props.pageNum - 1) {
                prevVal.push(<span className = {styles.selectedBtn}> &#9679;</span>);
                
            }
            else {
            prevVal.push(<span style = {{color: 'rgba(147, 25, 7,0.9)'}}> &#9679; </span>);
            }
        }
        return prevVal;
    })
    }, [props.plus, props.minus])
    return <Fragment>
        <Card>
            {props.isLoading && <div 
            className = {styles.userContainer}
            style = {{
                marginBottom: '250px', marginTop:'250px'
            }}>Loading Restaurants...</div>}
            {!props.isLoading && props.res.map((r) => (
            <RestaurantItem
            id = {r.id}
            image = {r.image}
            name = {r.name}
            description = {r.description}
            address = {r.address}
            menu = {r.menu}
            key = {r.id}
             />
    ))
    }
    <div>{circArr}</div>
  
    {!(props.pageNum == 1) && <button className = {styles.nextBtn} onClick = {props.minus}>Previous</button>}    
    {props.total % 2 == 0 ? props.pageNum != parseInt(props.total / 2)  
        && <button className = {styles.nextBtn}  onClick = {props.plus}>Next</button> 
        :  props.pageNum < parseInt(props.total / 2) + 1 
        && <button className = {styles.nextBtn} onClick = {props.plus}>Next</button>} 
    </Card>
    
    </Fragment>
}   

export default Restaurant;