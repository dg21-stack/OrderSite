import { useContext } from "react";
import AuthContext from "../store/use-context";
import styles from './ModalCart.module.css';

const ModalItemDisplay = (props) => {
    const cartCtx = useContext(AuthContext);
    const addHandler = () => {
        cartCtx.append(props.name, parseInt(props.price));
    }
    const minusHandler = () => {
        if (cartCtx.currCart[cartCtx.findIndex(props.name)]?.amount == 0 || cartCtx.currCart[cartCtx.findIndex(props.name)] == undefined) {
            return;
        }
        cartCtx.remove(props.name);
    }
    return (<div style ={{marginBottom: '20px'}}>
        <div className={styles.left} style = {{display: 'inline'}}>
        <div className = {styles.name} style = {{fontSize: '18px'}}>{props.name}</div>
        <div><b>Price:</b><div style = {{fontWeight: 'none', fontStyle: 'italic'}}> ${props.price}.00</div></div>
        </div>
        <div className={styles.right}>
        <button onClick = {addHandler} className = {styles.orderButton}>+</button>
    
        <button onClick = {minusHandler} className = {styles.orderButton}>-</button>
        </div>
        <hr style={{marginTop:'15px'}}/>
    </div>)
};

export default ModalItemDisplay; 
