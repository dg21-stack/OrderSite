import styles from './Details.module.css';
import { useContext, useEffect } from 'react';
import AuthContext from '../store/use-context';
import { useState } from 'react';
const MenuItem = (props) => {
    const cartCtx = useContext(AuthContext);
    let a = 0;
    const [currIndex, setCurrIndex] = useState(null);
    useEffect(()=> {
        setCurrIndex(cartCtx.findIndex(props.name));
    })
   
    const addHandler = () => {
        cartCtx.append(props.name, parseInt(props.price));
        setCurrIndex(cartCtx.findIndex(props.name));
    }
    const minusHandler = () => {
        cartCtx.remove(props.name);
        setCurrIndex(cartCtx.findIndex(props.name));
    }
    
    return <div className={styles.itemContainer}>
       
        <div className={styles.left}>
        <div className={styles.productName}>{props.name}</div>
        <div className = {styles.descrip}>{props.description}</div>
        <div className={styles.price}>${props.price}.00</div>
   
        </div>
        <div className={styles.right}>
            <div className={styles.amount}> Amount in Cart: {props.cart?.[currIndex] ? props.cart?.[currIndex].amount : 0}</div>
            <button onClick = {addHandler}>+</button>
            <button onClick = {minusHandler}>-</button>
        </div>
        <hr/>
    
    </div>
}

export default MenuItem;