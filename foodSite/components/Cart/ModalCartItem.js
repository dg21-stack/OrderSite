import { useContext } from "react"
import AuthContext from "../store/use-context"
import styles from './ModalCart.module.css';
const ModalCartItem = (props) => {
    const cartCtx = useContext(AuthContext);
    const addHandler = () => {
        cartCtx.append(props.name, props.price);
    }
    const removeHandler = () => {
        cartCtx.remove(props.name);
    }
    if (props.total === 0) {
        return <div></div>
    }
    return <div>
        <div className = {styles.left}>
     
        <div className = {styles.name}>{props.name}</div>
        <div><b>Price:</b><i> ${props.price}.00</i></div>
   
        </div>
        <div className= {styles.right}>
        <div><i>${props.totalPrice}.00</i> / <span>{props.total} items </span></div>
       
 

        <button onClick  = {addHandler}> + </button>
        <button onClick={removeHandler}> - </button>
       
        </div>
        <hr styles ={{ border:'solid 0.4px rgba(0, 0, 0,0.5)'}}/>
    </div>
}

export default ModalCartItem;