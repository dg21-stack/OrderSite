import styles from '../../pages/business/business.module.css';
import { useRef } from 'react';
const ChangeName = (props) => {
    const nameRef = useRef();
    const clicker = () => {
        props.changeDescriptionHandler(nameRef.current.value, true);
        nameRef.current.value = '';
    }

    return  <form onSubmit= {(e) => e.preventDefault()}>
    <div>
    <label htmlFor="name" className = {styles.subtitle}>Name:</label>
    <input ref = {nameRef} placeholder="name" className = {styles.input} name = "name"></input>
    </div>
   <button className = {styles.button} onClick = {props.clicker}>Cancel</button>
    <button className={styles.button} onClick = {clicker}>Change Name</button>

</form>


};



export default ChangeName; 