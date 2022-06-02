import React from "react";
import EventCardsContainer from "./EventCardsContainer";
import classes from "./EventsContainer.module.css";

const EventsContainer = (props) => {
  return (
    <React.Fragment>
      <div className={classes.optionsbar}>
        {" "}
        aici o sa fie optiuni de filtrare / sortare si alte minuni
      </div>
      <EventCardsContainer allCards={props.allEventsForCards} />
    </React.Fragment>
  );
};

export default EventsContainer;
