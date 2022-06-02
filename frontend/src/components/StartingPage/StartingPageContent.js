import React, { useCallback, useEffect, useState } from "react";
import EventsContainer from "../Events/EventsContainer";
import Maps from "../Map/Maps";
import classes from "./StartingPageContent.module.css";

const axios = require("axios");
const StartingPageContent = (props) => {
  const [allEvents, setEvents] = useState(null);

  const getEvents = useCallback(async function () {
    axios
      .get("http://localhost:3001/allevents", {})
      .then(function (response) {
        setEvents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <React.Fragment>
      <section className={classes.starting}>
        <Maps eventsForMap={allEvents} />
        <EventsContainer allEventsForCards={allEvents} />
      </section>
    </React.Fragment>
  );
};

export default StartingPageContent;
