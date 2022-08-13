import styles from './Details.module.css';
import { useEffect, useRef, useState } from 'react';
import ReviewItem from './ReviewItem';
const BusinessReviews = (props) => {
    const subjectRef = useRef();
    const bodyRef = useRef();
    console.log(props);
    const [star1, setStar1] = useState(false);
    const [star2,setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);
    const [err, setErr] = useState(false);
    const [display, setDisplay] = useState(0);
    const [circArr, setCircArr] = useState([]);
    useEffect(() => {
       setCircArr(prevVal => {
        prevVal = [];
        
        while (prevVal.length < props.total/2) {
            if (prevVal.length == props.pageNum - 1) {
                prevVal.push(<span className = {styles.selectedBtn}>  &#9679;</span>)
            }
            else {
            prevVal.push(<span style = {{color: '#797979'}}> &#9679;</span>)
            }
        }
        return prevVal;
       })
    }, [props.plus, props.minus])
    
    const starSetter = (e) => {
        e.preventDefault();
        if (e.target.name == 'star 1')
        {
            setStar1(prevState => {
                if (star2 || star3 || star4 || star5){
                    if (star2){
                        setStar2(false);
                    }
                    if (star3){
                    setStar3(false);
                    }
                    if (star4) {
                        setStar4(false);
                    }
                    if (star5) {
                        setStar5(false);
                    }
                    return prevState;
                }
                return !prevState});
            
           
        }
        if (e.target.name == 'star 2')
        {
            setStar2(prevState => {
            if (star3 || star4 || star5){
                if (star3){
                setStar3(false);
                }
                if (star4) {
                    setStar4(false);
                }
                if (star5) {
                    setStar5(false);
                }
                return prevState;
            }
            prevState = !prevState;
            setStar1(prevState === true);
            return prevState;
            })
            
        }
        if (e.target.name == 'star 3')
        {
            setStar3(prevState => {
                if ( star4 || star5){
                    if (star4) {
                        setStar4(false);
                    }
                    if (star5) {
                        setStar5(false);
                    }
                    return prevState;
                }
                prevState = !prevState;
                setStar2(prevState === true);
                setStar1(prevState === true);
                return prevState;
                })
        }
        if (e.target.name == 'star 4')
        {
            setStar4(prevState => {
                if ( star5){
                    setStar5(false);
                    return prevState;
                }
                prevState = !prevState;
                setStar3(prevState === true);
                setStar2(prevState === true);
                setStar1(prevState === true);
                return prevState;
                })
        }
        if (e.target.name == 'star 5')
        {
            console.log('h');
            setStar5(prevState => {
                prevState = !prevState;
                setStar4(prevState === true);
                setStar3(prevState === true);
                setStar2(prevState === true);
                setStar1(prevState === true);
                return prevState;
                })
        }
       
    }
    const clicker = (e) => {
       
        let stars = 5;
        if (!star5) {
            stars = 4;
        }
        if (!star4) {
            stars = 3;
        }
        if (!star3) {
            stars = 2;
        }
        if (!star2){
            stars = 1;
        }
        if (!star1) {
            e.preventDefault();
            setErr(true);
           
            return;
        }
        if (subjectRef.current.value == ''){
            e.preventDefault();
            setErr(true);
           
            return;
        }
        if (bodyRef.current.value == ''){
            e.preventDefault();
            setErr(true);
            return;
        }
        setStar1(false);
        setStar2(false);
        setStar3(false);
        setStar4(false);
        setStar5(false);
        const enteredReviewData = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            stars: stars,
            date: new Date().toISOString().split('T')[0]
        }
        subjectRef.current.value = '';
        bodyRef.current.value = '';
        props.addReviewHandler(enteredReviewData);
    }
    const displayHandler = () => {
        if (display == 0){
            setDisplay(275);
            return;
        }
        setDisplay(0);
    }
    const plusHandler = (e) => {
        e.preventDefault();
         props.plus();
    }
    const minusHandler = (e) => {
        e.preventDefault();
         props.minus();
    }
    console.log(props.reviewList);
    if (props.reviewList) {
    return <div>
        <div className = {styles.reviewTitle}>
            Reviews
        </div>
       <hr/>
        <button onClick = {displayHandler} className = {display == 0  ? styles.displayButton : `${styles.displayButton} ${styles.on}`}>Click Here to Display Reviews</button>
        <div className = {display == 0 ? styles.visibility : `${styles.visibility} ${styles.visiOn}`} style = {{height: display}}>
        {props.isLoading && <div  className = {styles.loading}> Reviews Loading...</div>}
        <div style = {{height: 213}}>
        {!props.isLoading && props.reviewList.map(review => <ReviewItem 
        key = {review.id} 
        user = {review.user} 
        date = {review.date}
        body = {review.body}
        stars = {review.stars}
        subject = {review.subject}/>)}
        </div>
        <div>
        {circArr}
        </div>
      
        {!(props.pageNum == 1) && <button className = {styles.nextBtn} onClick = {minusHandler}>Previous</button>}
        {props.total % 2 == 0 ? props.pageNum != parseInt(props.total / 2)  
        && <button className = {styles.nextBtn}  onClick = {plusHandler}>Next</button> 
        :  props.pageNum < parseInt(props.total / 2) + 1 
        && <button className = {styles.nextBtn} onClick = {plusHandler}>Next</button>} 
        
        
        </div>
    </div>
    }
    return <div></div>
}

export default BusinessReviews;