import EventCard from "./EventCard";
import classes from "./EventCardsContainer.module.css";

const EventCardsContainer = (props) => {
  const myEventsFlag = props.myEventsFlag && true;
  return (
    <div className={classes.mainEventContainer}>
      {props.allCards &&
        props.allCards.map((el) => (
          <EventCard cardData={el} myEventsFlag={myEventsFlag} key={el._id} />
        ))}
    </div>
  );
};

export default EventCardsContainer;
