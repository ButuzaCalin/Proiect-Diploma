import MyEventsContainer from "../Events/MyEventsContainer";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h2>Your User Profile</h2>
      <ProfileForm />
      <h2>Your User Events</h2>
      <MyEventsContainer />
    </section>
  );
};

export default UserProfile;
