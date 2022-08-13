import { useContext } from "react";
import CartContext from "../store/use-context";
import styles from './ModalCart.module.css';
import ModalItemDisplay from "./ModalItemDisplay";

const ModalDisplay = (props) => {
    const cartCtx = useContext(CartContext);
    return <div className={styles.itemContainer}>
        {props.list.map((items)=> (<ModalItemDisplay name = {items.name} price = {items.price} key = {items.id}/>))}
        <div style ={{fontWeight:'600'}}>Total items in Cart: {cartCtx.items}</div>
        <button className = {styles.orderButton} onClick = {props.displayHandler}>Close Store</button>
        </div>
};

export default ModalDisplay;