import styles from '../../pages/business/business.module.css';
import { useRef } from 'react';
const ChangeDescription = (props) => {
    const descripRef = useRef();
    const clicker = () => {
        props.changeDescriptionHandler(descripRef.current.value, true);
        descripRef.current.value = '';
    }

    return  <form onSubmit= {(e) => e.preventDefault()}>
    <div>
    <label htmlFor="description" className = {styles.subtitle}>Subtitle:</label>
    <input ref = {descripRef} placeholder="subtitle" className = {styles.input} name = "description"
    ></input>
    </div>
   <button className = {styles.button} onClick = {props.clicker}>Cancel</button>
    <button className={styles.button} onClick = {clicker}>Change Subtitle</button>

</form>


};



export default ChangeDescription; 