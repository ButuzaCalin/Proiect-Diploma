import React, { useCallback, useContext } from "react";
import classes from "./EventCard.module.css";
import AuthContext from "../../store/auth-context";
const axios = require("axios");

const EventCard = (props) => {
  const ctx = useContext(AuthContext);
  const deleteEventHandler = useCallback(async function () {
    axios
      .delete(
        `http://localhost:3001/event/${props.cardData._id}`,

        {
          headers: {
            Authorization: "Bearer " + ctx.token,
          },
        }
      )
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.cardheader}>
            <img
              src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
              alt="rover"
            />
          </div>
          <div className={classes.cardbody}>
            <span className={`${classes.tag} ${classes.tagteal}`}>
              {props.cardData.category}
            </span>
            <h4>{props.cardData.name}</h4>
            <p>{props.cardData.description}</p>
          </div>
          <div className={classes.userCard}>
            <div className={classes.userInfo}>
              <img
                src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                alt="user"
              />
              {props.cardData.organiser && <h5>{props.cardData.organiser}</h5>}
              <small>{props.cardData.date}</small>
            </div>
          </div>
        </div>
        {props.myEventsFlag && (
          <button onClick={deleteEventHandler}> Delete </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventCard;
