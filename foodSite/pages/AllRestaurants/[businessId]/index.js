
import DetailCard from "../../../components/Card/DetailCard";
import { useContext, useSearchParams, useState, useEffect } from "react";
import AuthContext from "../../../components/store/use-context";
import Image from "../../../components/Details/image";
import Details from '../../../components/Details/Details';
import Menu from "../../../components/Details/Menu";
import ItemCard from "../../../components/Card/ItemCard";
import ModalCart from "../../../components/Cart/ModalCart";
import ReviewPage from "../../../components/Details/ReviewPage";
import { MongoClient, ObjectId, } from "mongodb";
import Head from "next/head";

const businessDetails = (props) => {
    const [pageNum, setPageNum] = useState(1);
    const [totalNum, setTotalNum] = useState(null);
    const [reviewList, setReviewList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function getter(enteredItemData = 1) {
        setIsLoading(true);
        const response = await fetch(`../api/getHandler?pageIndex=${enteredItemData}&pageSize=2&restaurantURL=${window.location.pathname}`,
        {
            method: 'GET',
        } );
        const data = await response.json();
        setIsLoading(false);
        if (!totalNum){
            setTotalNum(data[0].totalRecords[0] ? parseInt(data[0].totalRecords[0]?.body) : 1);
        }
        setReviewList(data[0].data);
    }
    useEffect(() => {
        getter()
    },[])
    const plus = () => {
        setPageNum(prevVal => {
           
            if (totalNum/2 > prevVal){
            prevVal++;
            getter(prevVal);
            }
            
            return prevVal;
        })
    }
    const minus = () => {
        setPageNum(prevVal => {
            if (prevVal > 1){
            prevVal--;
            getter(prevVal);
            }
            return prevVal;
        })
    }
    async function addReviewHandler(enteredItemData) {
        const response = await fetch('../api/ReviewHandler', {
          method: 'POST',
          body: JSON.stringify({
            subject: enteredItemData.subject,
            body: enteredItemData.body,
            date: enteredItemData.date,
            stars: enteredItemData.stars,
            restaurant: props.restaurant.id,
            user: authCtx.user
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
        
    }
    const authCtx = useContext(AuthContext);
   
    
    return <div style = {{marginLeft: '8vw', marginRight: '8vw', marginBottom: '10vw'}}>
      <Head><title>{props.restaurant?.name}</title></Head>
        <DetailCard><Image image = {props.restaurant?.image} details = {props.restaurant?.name} subtitle = {props.restaurant?.description}/></DetailCard>
        <DetailCard><Details description = {props.restaurant?.paragraph}/></DetailCard>
        <ItemCard><Menu menu = {props.restaurant?.menu}/></ItemCard>
        <ItemCard><ReviewPage addReviewHandler = {addReviewHandler} total = {totalNum} isLoading = {isLoading} getter = {getter} pageNum = {pageNum} reviewList = {reviewList} plus = {plus} minus = {minus}/></ItemCard>
        {authCtx.isOpen && <ModalCart/>}
    </div>
    
}
export async function getStaticPaths() {
    const client = await MongoClient.connect(
      'mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority'  );
      const db = client.db();

      const meetupsCollection = db.collection('reviewList');
      const meetups = await meetupsCollection.find({}, { restaurant: 1 }).toArray();
   
      client.close();
    
      return {
        fallback: "blocking",
        paths: meetups.map((meetup) => ({
          params: { businessId: meetup._id.toString() },
        })),
      };
  }
  
  export async function getStaticProps(context) {
    // fetch data for a single meetup
  
    const meetupId = context.params.businessId;
    const client = await MongoClient.connect(
      'mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority'  );
    const db = client.db();
  
    const resCollection = db.collection('ResList');
    const res = await resCollection.findOne({
        _id: ObjectId(meetupId)
    })
    client.close();
    
    return {
      props: {
        restaurant: res ? {
            name: res.name,
            address: res?.address,
            image: res?.image,
            id: res?._id.toString(),
            description: res?.description,
            menu: res?.menu,
            paragraph: res?.paragraph
        } : null
      },
      revalidate: 10
    };
  }


export default businessDetails;