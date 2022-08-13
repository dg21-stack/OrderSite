import styles from '../../pages/business/business.module.css';
import { useRef } from 'react';
const ChangeParagraph = (props) => {
    const descripRef = useRef();
    const clicker = () => {
        props.changeDescriptionHandler(descripRef.current.value, true);
        descripRef.current.value = '';
    }

    return  <form onSubmit= {(e) => e.preventDefault()}>
    <div>
    <label htmlFor="description" className = {styles.subtitle}>Description:</label>
    <textarea ref = {descripRef} placeholder="description" className = {styles.input} style = {{height: '200px', width: '250px'}} name = "description"></textarea>
    </div>
   <button className = {styles.button} onClick = {props.clicker}>Cancel</button>
    <button className={styles.button} onClick = {clicker}>Change Description</button>

</form>


};



export default ChangeParagraph; 