import MenuItem from "./MenuItem";
import AuthContext from '../store/use-context';
import { useContext } from 'react';
import styles from './Details.module.css';
const Menu = (props) => {
    const authCtx = useContext(AuthContext);
    if (props.menu){
    
    return <div> 
        <div className={styles.title} style = {{marginBottom: '20px'}}>Menu</div>
        <hr style = {{width: "95%", marginBottom: '20px'}}/>
        {props.menu.map((x,index) => <MenuItem name = {x.name} price = {x.price} description = {x.description} key = {x.id} index = {index} cart = {authCtx.currCart}/>)}
    <button className={styles.cartBtn} onClick = {authCtx.toggle}>Open Cart</button>
    </div>
    }

    return <div/>
}  

export default Menu; 