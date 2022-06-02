import React, { useState, useEffect, useCallback, useContext } from "react";
import AuthContext from "../../store/auth-context";
import EventCardsContainer from "./EventCardsContainer";

const axios = require("axios");

const MyEventsContainer = (props) => {
  const [allEvents, setEvents] = useState(null);
  const ctx = useContext(AuthContext);
  const getEvents = useCallback(async function () {
    axios
      .get(
        "http://localhost:3001/event",

        {
          headers: {
            Authorization: "Bearer " + ctx.token,
          },
        }
      )
      .then(function (response) {
        console.log("primesc date");
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
      <EventCardsContainer allCards={allEvents} myEventsFlag={true} />
    </React.Fragment>
  );
};

export default MyEventsContainer;
