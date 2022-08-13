import styles from "./Loginsignup.module.css";
import { Fragment, useContext, useState } from "react";
import Link from 'next/link';
import { useRef } from "react";
import AuthContext from "../store/use-context";
import { useRouter } from "next/router";

const LoginSignup = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [properEmail, setProperEmail] = useState(true);
    const [properPass, setProperPassword] = useState(true);
    if (authCtx.isLoggedIn){
        return ( <Link href = "/AllRestaurants">
        <div  className = {styles.signup}>
        <b>Already Logged in! Start Browsing Here. </b></div>
        </Link>)
    }
    const loginHandler = (event) =>{
        setIsLoading(true);
        const currEmail = emailRef.current?.value;
        const currPass = passRef.current?.value;
        event.preventDefault();
      
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRIvxAwx8KqrhXOQpIzkSave61memF2Uw', { method: 'POST',
            body: JSON.stringify({
              email: currEmail,
              password: currPass,
              returnSecureToken: true
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then().then(res => {
              setIsLoading(false);
              if (res.ok){
                return res.json();
              }else {
                return res.json().then(data => {
                  let errorMessage = 'Auth failed';
                  if (data && data.error && data.error.message){ 
                    errorMessage = data.error.message;
                    if (data.error.message === 'INVALID_EMAIL') {
                        setProperEmail(false);
                    }
                    else {
                        setProperPassword(false);
                    }
                  }
                  throw new Error(errorMessage);
                })
              }
            }).then(data => {
                 fetch('https://reactfirst-48147-default-rtdb.firebaseio.com/user.json')
                 .then().then(r => {
                    if (r.ok){
                        return r.json();
                    }else {
                        return r.json().then(d => {
                            let errorMessage = 'Auth failed';
                            if (d && d.error && d.error.message){ 
                              errorMessage = data.error.message;
                            }
                            throw new Error(errorMessage);
                        }) 
                    }
                 }).then(da => {
                    let currfirstName = ''
                    let isBusiness = false;
                    let number = 0;
                    console.log(JSON.stringify(da));
                    for (let value of da){
                        console.log(value);
                        for (let values in value) {
                        console.log(value[values]);
                        if (value[values]?.['email'].toLowerCase() === currEmail.toLowerCase()){
                            if (number == 1) {
                                isBusiness = true;
                                authCtx.login(currEmail,value[values]['businessName'], value[values]['address'],true);
                                break;
                            }
                            else {
                            authCtx.login(currEmail,value[values]['firstName'], value[values]['lastName'],false);
                            break;
                            }
                        
                        }
                       
                    
                    }
                    number += 1
                }
                if (isBusiness){
        
                    router.push('/business');
                }
                else {
                router.push('/AllRestaurants');
                }
                 })
                
      
            }).catch(err => {
              alert(err.message);
            });
          
    
}
    return(<Fragment>
        <div className = {styles.loginContainer}>
            <label htmlFor ="Email"> Email</label>
            <input placeholder="email@email.com" onInput = {() => {if (!properEmail){setProperEmail(true)}}} ref = {emailRef} type="email" name = "Email" className = {`${styles.login} ${properEmail ? '' : styles.flagged}`} />
            <label htmlFor = "Password">Password</label>
            <input placeholder = "xxxxxx" onInput = {() => {if (!properPass){setProperPassword(true)}}} ref ={passRef}  name = "Password" type = "password" className = {`${styles.login} ${properPass && properEmail ? '' : styles.flagged}`}/>
        </div>
        <div className = {styles.buttonContainer}>
        <button onClick = {loginHandler} className = {` ${properEmail && properPass ?  styles.btnClass : styles.errBtn}`} > Login</button> 
        </div>
        
   

        <Link href = "/signup">
        <div  className = {styles.signup}>
        Don't Have an Account? Sign Up Here!
        </div>
        </Link>
    </Fragment>)
    
   
};

export default LoginSignup;