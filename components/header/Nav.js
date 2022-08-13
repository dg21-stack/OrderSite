import classes from './Nav.module.css';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../store/use-context';
import router, { useRouter } from 'next/router';
import ResCard from './ResCard';

const Nav = () => {
    const authCtx = useContext(AuthContext);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [currText, setCurrText] = useState('');
    const [currSearch, setCurrSearch] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    async function getter(value){
        setIsLoading(true);
        const response = await fetch(`../api/getResListHandler?name=${value}`,
        {
            method: 'GET',
        } );
        const data = await response.json();
        setCurrSearch(data[0].data);
        setIsLoading(false);
    }
    const clearSearch = () => {
        setCurrText('');
        setCurrSearch([]);
        setShowSearch(false);
    }
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('this is on a timer', currText);
            if (currText.length > 0) {
            getter(currText);
            console.log(currSearch);
            if (!showSearch) {
            setShowSearch(true);
            }
        }

    }, 500);
    return () => {
        clearTimeout(identifier);
    }
       
    }, [currText])
    const logoutHandler = () => {
        authCtx.logout();
        router.push('/');
    }
    const cartHandler = () => {
        authCtx.toggle();
    }
    const textHandler = (e) => {
        setCurrText(e.target.value);
        if (e.target.value == '' && showSearch) {
            setShowSearch(false);
        }
    }
    return (
        <header className = {classes.header}>
      
            <div className = {classes.logo}> 
            <Link href = "/">ReactEats</Link>
            </div>
            {authCtx.isLoggedIn && !authCtx.isBusiness && window.location.pathname != '/AllRestaurants/search' && <button onClick = {cartHandler} className = {classes.navButton}>
            &#x1f6d2; Your Cart  <div className = {classes.cart}> {authCtx.items}</div></button>} 
            <div>
            {authCtx.isLoggedIn && !authCtx.isBusiness && window.location.pathname != '/AllRestaurants/search' &&  <div className={classes.inputContainer}>
            <input className={
                showSearch ? `${classes.input} ${classes.on}` : classes.input
            } 
            onInput = {textHandler} value = {currText} placeholder='Find Restaurant'/>
            {showSearch && currSearch.length != 0 && <ResCard isLoading = {isLoading} clear = {clearSearch} search = {currText} restaurants = {currSearch}/>}
            </div>}
            </div>
          
            <nav>
                <ul>
               
                    <li>
                       <span>
                       {authCtx.isLoggedIn && !authCtx.isBusiness && <Link href = '/AllRestaurants'>
                       All restaurants
                       </Link>}
                       {authCtx.isLoggedIn && authCtx.isBusiness && <Link href = "/business">
                        Customize Menu</Link>}
                       </span> 
                    </li>
                    
                    <li>
                        {authCtx.isLoggedIn && <span onClick = {logoutHandler}>Logout</span>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;