import styles from '../../pages/business/business.module.css';
import { useRef } from 'react';
const AddItem = (props) => {
    const itemRef = useRef();
    const descripRef = useRef();
    const priceRef = useRef();

    const clickHandler = () =>{
        
        const itemInfo = {
            name: itemRef.current.value,
            price: priceRef.current.value,
            description: descripRef.current.value,
            id: Math.random(0,100000)
        }
        itemRef.current.value = '';
        priceRef.current.value = '';
        descripRef.current.value = '';
        props.addItemHandler(itemInfo);
    }
    return <form onSubmit= {(e) => e.preventDefault()}>
    <div>
    <label htmlFor="menuItem" className = {styles.subtitle}>Item Name:</label>
    <input ref = {itemRef} placeholder="item" className = {styles.input} name = "menuItem"></input>
    </div>
   <div>
   <label htmlFor="price" className = {styles.subtitle}>Price:</label>
    <input ref = {priceRef} placeholder="price" className = {styles.input} name = "price"></input>
   </div>
   <div>
   <label htmlFor="descrip" className = {styles.subtitle}>Item Description:</label>
    <input ref = {descripRef} placeholder="description" className = {styles.input} name = "descrip"></input>
   </div>
   <button className = {styles.button} onClick = {props.clicker}>Cancel</button>
    <button className={styles.button} onClick = {clickHandler}>Add Item</button>

</form>
}

export default AddItem; 