import classes from "./CreationForm.module.css";
import masks from "../../resources/masks.png";
import clapperboard from "../../resources/clapperboard.png";
import concert from "../../resources/concert.png";
import family from "../../resources/family.png";
import lecture from "../../resources/lecture.png";
import open from "../../resources/open.png";
import sports from "../../resources/sports.png";
import museum from "../../resources/museum.png";
import graduationCap from "../../resources/graduation-cap.png";
import AuthContext from "../../store/auth-context";
import { useState, useRef, useContext } from "react";
const axios = require("axios");

const CreationForm = (props) => {
  const [cat, setCat] = useState("");
  const inputEventTitle = useRef();
  const inputEventDate = useRef();
  const inputEventOrganiser = useRef();
  const inputEventDescription = useRef();
  const ctx = useContext(AuthContext);

  const onSubmitNewEvent = async function (e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/event",
        {
          name: inputEventTitle.current.value,
          category: cat,
          organiser: inputEventOrganiser.current.value,
          description: inputEventDescription.current.value,
          date: inputEventDate.current.value,
          "location.coordinates": [47.66312340649758, 23.571381662071975],
        },
        {
          headers: {
            Authorization: "Bearer " + ctx.token,
          },
        }
      )
      .then(function (response) {
        console.log("Post succes");
        inputEventDate.current.value = "";
        inputEventTitle.current.value = "";
        inputEventOrganiser.current.value = "";
        inputEventDescription.current.value = "";
        setCat("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const cultureHandler = () => {
    if (cat !== "culture") setCat("culture");
    else setCat("");
  };

  const eduHandler = () => {
    if (cat !== "edu") setCat("edu");
    else setCat("");
  };

  const musicHandler = () => {
    if (cat !== "music") setCat("music");
    else setCat("");
  };

  const sportHandler = () => {
    if (cat !== "sport") setCat("sport");
    else setCat("");
  };

  const familyHandler = () => {
    if (cat !== "family") setCat("family");
    else setCat("");
  };

  const expoHandler = () => {
    if (cat !== "expo") setCat("expo");
    else setCat("");
  };

  const conHandler = () => {
    if (cat !== "conference") setCat("conference");
    else setCat("");
  };

  const cineHandler = () => {
    if (cat !== "cinema") setCat("cinema");
    else setCat("");
  };

  const openHandler = () => {
    if (cat !== "opening") setCat("opening");
    else setCat("");
  };

  return (
    <div>
      <form className={classes.form} onSubmit={onSubmitNewEvent}>
        <div className={classes.control}>
          <label htmlFor="event-name">Name</label>
          <input type="text" id="event-name" ref={inputEventTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="event-date">Date</label>
          <input type="date" id="event-date" ref={inputEventDate} />
        </div>
        <div className={classes.control}>
          <label htmlFor="oraniser">Organiser</label>
          <input type="text" id="oraniser" ref={inputEventOrganiser} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows={10}
            cols={45}
            className={classes.resizableInput}
            type="text"
            id="description"
            ref={inputEventDescription}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <div className={classes.categorybox}>
            <div
              className={` ${classes.iconbox} ${
                cat === "culture" ? classes.selected : ""
              }`}
              onClick={cultureHandler}
            >
              <img alt="culture" src={masks} className={classes.formImg} />
              <h5>culture</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "edu" ? classes.selected : ""
              }`}
              onClick={eduHandler}
            >
              <img alt="edu" src={graduationCap} className={classes.formImg} />
              <h5>education</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "sport" ? classes.selected : ""
              }`}
              onClick={sportHandler}
            >
              <img src={sports} alt="sport" className={classes.formImg} />
              <h5>sport</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "music" ? classes.selected : ""
              }`}
              onClick={musicHandler}
            >
              <img src={concert} alt="music" className={classes.formImg} />
              <h5>music</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "cinema" ? classes.selected : ""
              }`}
              onClick={cineHandler}
            >
              <img
                src={clapperboard}
                alt="cinema"
                className={classes.formImg}
              />
              <h5>cinema</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "family" ? classes.selected : ""
              }`}
              onClick={familyHandler}
            >
              <img src={family} alt="family" className={classes.formImg} />
              <h5>family</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "opening" ? classes.selected : ""
              }`}
              onClick={openHandler}
            >
              <img src={open} alt="opening" className={classes.formImg} />
              <h5>opening</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "conference" ? classes.selected : ""
              }`}
              onClick={conHandler}
            >
              <img src={lecture} alt="conference" className={classes.formImg} />
              <h5>conference</h5>
            </div>
            <div
              className={` ${classes.iconbox} ${
                cat === "expo" ? classes.selected : ""
              }`}
              onClick={expoHandler}
            >
              <img src={museum} alt="expo" className={classes.formImg} />
              <h5>expo</h5>
            </div>
          </div>
        </div>
        <div className={classes.action}>
          <button>Create new event!</button>
        </div>
      </form>
    </div>
  );
};

export default CreationForm;
