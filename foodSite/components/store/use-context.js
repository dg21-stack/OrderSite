import React, {useEffect, useState} from "react";
import Card from "../Card/Card";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token, firstName, lastName, business) => {},
    logout: () => {},
    user: '',
    isBusiness: false,
    items: 0,
    totalPrice: 0,
    isOpen: false,
    currCart: [],
    searchStr: '',
    toggle: () => {},
    append: (item) => {},
    remove: (item) => {},
    checkout: () => {},
    findIndex: (name) => {},
    pushStr: () => {}
});



export const AuthContextProvider = (props) => {
    let token0 = [];
    let token1 = 0;
    let token2 = 0;
    let token3 = '';
    let token4 = false;
    let token5 = '';
    let token6 = [];

if (typeof window !== 'undefined'){
    const cartData = localStorage.getItem('cart');
    const itemData = parseInt(localStorage.getItem('item'));
    const priceData = parseInt(localStorage.getItem('total'));
    const userData = localStorage.getItem('user');
    const businessData = localStorage.getItem('business');
    const searchData = localStorage.getItem('search');

    if (cartData) {
        token0 =JSON.parse(cartData);
    }
    if (itemData) {
        token1 = itemData; 
    }
    if (priceData) {
        token2 = priceData; 
    }
    if (userData) {
        token3 = userData;
    }
   
    token4 = (businessData === 'true')
 
    if (searchData) {
       token5 = searchData;
    }
    const [cart, setCart] = useState(token0);
    const [item, setItem] = useState(token1);
    const [isOpen, setIsOpen] = useState(false);
    const [totalAmt, setTotalAmt] = useState(token2);
    const  [name, setName] = useState(token3);
    const [isBusiness, setIsBusiness] = useState(token4);
    const [search, setSearch] = useState(token5)


    const searchHandler = (m) => {
        setSearch(m);
        localStorage.setItem('search',m);
    }
    const findIndex = (name) => {
        for (let values in cart){
            if (cart[values].item === name) {
                return values;
            }
        }
        return false;
    }
    const appendHandler = (val, price) => {
        let a = []
        for (const object in cart) {

            if (cart[object].item === val) {
                setCart((prevState) => {
                    prevState[object].amount += 1;
                    prevState[object].total += prevState[object].price;
                    localStorage.setItem('cart',JSON.stringify(prevState));
                  
                    return prevState;
                })
                setItem((prevState) => {
                    return parseInt(prevState) + 1;
                })
                
                setTotalAmt(prevState => {return prevState + cart[object].price});
                localStorage.setItem('item', parseInt(item) + 1);
                localStorage.setItem('total',parseInt(totalAmt) + cart[object].price);
                return;
            }
        }
        a = [
            {
                amount: 1,
                total: price,
                price: price,
                item: val
            }
        ]
       
        setCart((prevState) => {
            if  (prevState !== undefined){
                prevState = [...prevState , {
                    amount: 1,
                    total: price,
                    price: price,
                    item: val
                }]
                localStorage.setItem('cart',JSON.stringify(prevState));
                return prevState;
        } 
        localStorage.setItem('cart',JSON.stringify([{
            amount: 1,
            total: price,
            price: price,
            item: val
        }]));
        return [
            {
                
                amount: 1,
                total: price,
                price: price,
                item: val
            
            }
        ]
        })
        setItem((prevState) => {
            return parseInt(prevState) + 1; 
        })
        localStorage.setItem('item', parseInt(item) + 1);
        localStorage.setItem('total',parseInt(totalAmt) + price);
        setTotalAmt(prevState => {return prevState + price});

 
    }
    const removeHandler = (val) => {
        let a = 0
        for (const object in cart){
            if (cart[object].item === val) {
                setCart((prevState) => {
                    a = prevState[object].amount;
                    if (prevState[object].amount !== 0) {
                    prevState[object].amount -= 1;
                    prevState[object].total -= prevState[object].price;
                    localStorage.setItem('cart',JSON.stringify(prevState));
                    return prevState;
                    }
                    return prevState;
                })
                setItem((prevState) => {
                    if (cart[object].item != 1){
                    return parseInt(prevState) - 1;
                    }
                    return prevState;
                })
                if (cart[object].item != 1){
                localStorage.setItem('total',parseInt(totalAmt) - cart[object].price);
                setTotalAmt(prevState =>  prevState - cart[object].price);
                localStorage.setItem('item', parseInt(item) - 1);
                }
                return;
            }
        }
    }
    const toggleHandler = () => {
        setIsOpen(prevState => !prevState);
    }

    let initialToken;
    
  
    const tokenData = localStorage.getItem('token');

    if (tokenData){
        initialToken = tokenData;
    }
    const [token ,setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, firstName, lastName, business) => {
        setToken(token);
        setName(firstName + ' ' + lastName);
        localStorage.setItem('token',token);
        setIsBusiness(business);
        localStorage.setItem('business',business.toString());
        localStorage.setItem('user',firstName + ' ' + lastName);
    };
    const logoutHandler = (token) => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.clear();
        setCart([]);
        setTotalAmt(0);
        setIsBusiness(null);
        setItem(0);
        setToken('');
        setName('');
    }
    const checkoutHandler = () => {
       setTotalAmt(0);
        setItem(0);
        setCart(prevValue => 
            {
                for (let value in prevValue){
                    prevValue[value].amount -= prevValue[value].amount;
                    prevValue[value].total -= prevValue[value].total; 
                    
                }
                localStorage.setItem('cart', JSON.stringify(prevValue));
                return prevValue
            })
      localStorage.setItem('total',0);
      localStorage.setItem('item', 0);
     
    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        user: name,
        items: item,
        isOpen: isOpen,
        isBusiness: isBusiness,
        currCart: cart,
        totalprice: totalAmt,
        searchStr: search,
        pushStr: searchHandler,
        toggle: toggleHandler,
        append: appendHandler,
        remove: removeHandler,
        checkout: checkoutHandler,
        findIndex: findIndex
    };
    return <AuthContext.Provider value = {contextValue}>
        {props.children}
    </AuthContext.Provider>
    }
    return <AuthContext.Provider value = {AuthContext}>
       {props.children}
</AuthContext.Provider>
}
export default AuthContext;