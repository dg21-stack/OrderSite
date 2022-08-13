import Nav from "./Nav";
import classes from './MainHeader.module.css';
const MainHeader = (props) => {
    return <div> 
        <Nav style = {{    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
        <main className = {classes.main}>{props.children}</main>
    </div>
}


export default MainHeader;