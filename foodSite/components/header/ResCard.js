import Card from "../Card/Card";
import ResItem from "./ResItem";
import styles from './ResCard.module.css';
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../store/use-context";
const ResCard = (props) => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    const redirectHandler = () => {
        console.log(authCtx);
        authCtx.pushStr(props.search);
        props.clear()
        router.push('/AllRestaurants/search');
    }
    console.log(props.restaurants[0].id);
    return <div className={styles.displayContainer} >
        {props.isLoading && <div className = {styles.centered}>Loading search results...</div>}
        {!props.isLoading && props.restaurants.map((key) => (<ResItem 
        name = {key.name}
        description = {key.description}
        address = {key.address}
        image = {key.image}
        key = {key.id}
        id = {key.id}
        clear = {props.clear}/>))}
        <div className = {styles.centered}>
        <button onClick = {redirectHandler} className = {styles.redirectBtn}>More Options Here!</button>
        </div>
    </div>
}

export default ResCard;