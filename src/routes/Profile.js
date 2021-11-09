import { authService } from "fbase";
import { useNavigate } from "react-router-dom";
import React from "react";

const Profile = () => {
  const history = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    history("/");
  };
  return <button onClick={onLogOutClick}>Log Out</button>;
};
export default Profile;
