import styles from '../../pages/business/business.module.css';
import { useRef } from 'react';
const ChangeImage = (props) => {
    const imageRef = useRef();
    const clicker = () => {
        props.changeImageHandler(imageRef.current.value, false);
        imageRef.current.value = '';
    }
    return  <form onSubmit= {(e) => e.preventDefault()}>
    <div>
    <label htmlFor="image" className = {styles.subtitle}>Image URL:</label>
    <input ref = {imageRef} placeholder="image" className = {styles.input} name = "image"></input>
    </div>
   <button className = {styles.button} onClick = {props.clicker}>Cancel</button>
    <button className={styles.button} onClick = {clicker}>Change Image</button>

</form>


};



export default ChangeImage; 