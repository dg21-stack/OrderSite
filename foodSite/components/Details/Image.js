import styles from './Details.module.css';
const Image = (props) => {

    return <div className = {styles.image}>
        <div className= {styles.title}>
            {props.details}
        </div>
        <div>
        <img src = {props.image}/></div> 
        <div className={styles.subtitle}>
        {props.subtitle}
        </div>
    </div>
}  

export default Image;