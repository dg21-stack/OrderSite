import Card from "../Card/Card";
import { useContext, useState } from "react";
import styles from "./RestaurantItem.module.css";
import AuthContext from "../store/use-context";
import ModalDisplay from "../Cart/ModalDisplay";
import { useRouter } from "next/router";
const RestaurantItem = (props) => {
    const cartCtx = useContext(AuthContext);
    const [display, setDisplay] = useState(0);
    const router = useRouter();

    const businessDetails = () => {
        router.push(`/AllRestaurants/${props.id.toString()}`)
    }
    const displayHandler = () => {
        if (display == 0){
            setDisplay((props.menu.length + 1) * 150);
        }
        else {
            setDisplay(0);
        }
    }
    return <div className = {styles.restaurantContainer}>
          <h3>{props.name}</h3>
          <img src = {props.image} className = {styles.imageContainer}/>
        <div className={styles.subtitles}>{props.description}</div>
        <div className={styles.description}>{props.address}</div>
        <button className = {styles.btn} onClick = {businessDetails}>Business Details</button>
        <button onClick = {displayHandler} 
        className = {
            display == 0 ? styles.orderButton : `${styles.orderButton} ${styles.on}`}> Click Here to Display Menu </button>
        <div className = {styles.visibility} style = {{maxHeight: display}}> 
        <ModalDisplay list = {props.menu} displayHandler = {displayHandler} />
        </div>
        <hr/>
    </div>
};

export default RestaurantItem;