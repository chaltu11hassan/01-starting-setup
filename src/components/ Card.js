
import './Card.css';

//card component is just a container

function Card(props){
    //children is reserved to inherit prop in between the card

    const classes = 'card ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    )
}


export default Card;