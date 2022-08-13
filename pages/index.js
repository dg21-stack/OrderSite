import LoginSignup from "../components/LoginSignup/LoginSignup";
import Card from "../components/Card/Card";
import Head from 'next/head'
const homePage = () => {
  return (<Card>
     <Head><title>Home</title></Head>
    <h1>Welcome to ReactEats</h1>
    <p><i>where All Your Food Delivery Needs are Satisfied.</i></p>
  <LoginSignup/>
  </Card>)
}


export default homePage;