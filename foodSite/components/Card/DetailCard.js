import classes from './Card.module.css';

const DetailCard = (props) => {
    return <div className = {classes.detailCard}>{props.children}</div>
}

export default DetailCard;