import { useRouter } from "next/router"
import styles from './SearchInfo.module.css'
const SearchInfo = (props) => {
    const router = useRouter();
    const redirectHandler = () => {
        router.push(`/AllRestaurants/${props.id}`);
    }

    return <div className={styles.container}>
         <img src = {props.image} className ={styles.image}/> 
      
        <div className={styles.name}>
        {props.name}
        </div>
        <div className={styles.description}>
        {props.description}
        </div>
     
       <div className = {styles.address}>
       {props.address}</div> 
       <div class = {styles.centered}>
       <button className = {styles.redirectBtn} onClick = {redirectHandler}>Business Page</button>
       </div>
       <hr/>
    </div>
}
export default SearchInfo;