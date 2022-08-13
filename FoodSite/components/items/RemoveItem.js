import styles from '../../pages/business/business.module.css';
import { useRef } from 'react';
const RemoveItem = (props) => {
    const itemRef = useRef();
    const clicker = () => {
        props.removeItemHandler(itemRef.current.value);
        itemRef.current.value = '';
    }
    return  <form onSubmit= {(e) => e.preventDefault()}>
    <div>
    <label htmlFor="menuItem" className = {styles.subtitle}>Item Name:</label>
    <input ref = {itemRef} placeholder="item" className = {styles.input} name = "menuItem"></input>
    </div>
   <button className = {styles.button} onClick = {props.clicker}>Cancel</button>
    <button className={styles.button} onClick = {clicker}>Remove Item</button>

</form>


};



export default RemoveItem; 