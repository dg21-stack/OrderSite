import styles from './ResCard.module.css';
import { useRouter } from 'next/router';
const ResItem = (props) => {
    const router = useRouter();
    
    const redirectHandler = () => {
        console.log(props.id);
        router.push(`/AllRestaurants/${props.id}`)
        props.clear();
    }
    return <div style = {{cursor: 'pointer'}} onClick = {redirectHandler} className = {styles.display}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
        <div className = {styles.address}>{props.address}</div>
         
    </div>
}

export default ResItem;