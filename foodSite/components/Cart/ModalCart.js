import { useContext } from "react";
import AuthContext from "../store/use-context";
import ModalCartItem from './ModalCartItem';
import styles from "./ModalCart.module.css";
import {useRouter} from "next/router";

const ModalCart = () => {
    const cartCtx = useContext(AuthContext);
    const router = useRouter();
    const clickHandler = () => {
        cartCtx.toggle();
    }
    if (cartCtx.currCart === undefined || cartCtx.items === 0){
        return <div className={styles.backdrop}>
        <container className = {styles.container} style = {{height: '40%'}} >
        <h2 className={styles.title}>Your Cart
        <hr/></h2>
     <div className={styles.span}>Cart Empty </div>  
   <button onClick = {clickHandler}> Close </button>
   </container>
   </div>
    }
    return  <div className={styles.backdrop}>
        <container className = {styles.container} >
        <h2 className={styles.title}>Your Cart
        <hr/></h2>
    
        {cartCtx.currCart.map((item, index) => <ModalCartItem total = {item.amount} price = {item.price} totalPrice = {item.total} name = {item.item} index = {item} key = {index}/> )}
    <div><b> Total: </b> <i> ${cartCtx.totalprice}.00</i> </div>
    <button onClick = {clickHandler}>Close</button>
    <button onClick ={() => {cartCtx.toggle();
        router.push('/checkout')}}>Checkout</button>
    </container>

    </div> 
}

export default ModalCart;