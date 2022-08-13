import { Fragment } from "react";
import styles from './Details.module.css';

const Description = (props) => {
    return <div>
        <div className={styles.h2}>About Our Restaurant</div>
        <p className = {styles.description}>
            {props.description}
        </p>
    </div>
}

export default Description;