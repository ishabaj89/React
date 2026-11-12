
import "./Profile.css";
import profilePic from "../assets/hero.png";

function Profile(props) {
  
  return (
    <div className="profile">
      <img
        src={profilePic}
        alt="profile picture" className="img"
        width="200"
        height="200"
      />

      <h2 className="profileTitle">{props.title}</h2>

      <p className="profileTxt">Hello!I am {props.age} years old and I am {props.isEmployed ? "employed" : "not employed"}.</p>
    </div>
  );
}

export default Profile;
