import styles from './Details.module.css';
const ReviewItem = (props) => {
    return <div className = {styles.container}> 
        <div className = {styles.user}>reviewer: {props.user}</div>
        <div className={styles.detailContainer}>
        <div className={styles.date}>{props.date}</div>
<div className = {styles.subject}>{props.subject}</div>
        </div>
    
    
            <div className = {styles.bodyContainer}>
            <div className = {styles.body}>{props.body}</div> 
            <div> {props.stars == 5 ? <span>
                <span className = {styles.trueStr}> &#9733; </span>
                  <span className = {styles.trueStr}> &#9733; </span>
                    <span className = {styles.trueStr}> &#9733; </span>
                      <span className = {styles.trueStr}> &#9733; </span>
                        <span className = {styles.trueStr}> &#9733; </span>
                        </span>: 
            props.stars == 4 ? <span>
            <span className = {styles.trueStr}> &#9733; </span>
              <span className = {styles.trueStr}> &#9733; </span>
                <span className = {styles.trueStr}> &#9733; </span>
                  <span className = {styles.trueStr}> &#9733; </span>
                    <span className = {styles.str}> &#9733; </span>
                    </span> : props.stars == 3 ? 
                    <span>
                    <span className = {styles.trueStr}> &#9733; </span>
                      <span className = {styles.trueStr}> &#9733; </span>
                        <span className = {styles.trueStr}> &#9733; </span>
                          <span className = {styles.str}> &#9733; </span>
                            <span className = {styles.str}> &#9733; </span>
                            </span> : props.stars == 2 ? 
                            <span>
                            <span className = {styles.trueStr}> &#9733; </span>
                              <span className = {styles.trueStr}> &#9733; </span>
                                <span className = {styles.str}> &#9733; </span>
                                  <span className = {styles.str}> &#9733; </span>
                                    <span className = {styles.str}> &#9733; </span>
                                    </span> : props.stars == 1 ?
                                    <span>
                                    <span className = {styles.trueStr}> &#9733; </span>
                                      <span className = {styles.str}> &#9733; </span>
                                        <span className = {styles.str}> &#9733; </span>
                                          <span className = {styles.str}> &#9733; </span>
                                            <span className = {styles.str}> &#9733; </span>
                                            </span> : 'error'}</div>
            </div>
            <hr/></div>

}
export default ReviewItem;