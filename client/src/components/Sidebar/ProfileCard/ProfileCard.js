import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useHistory } from "react-router";
import "./ProfileCard.css";

const ProfileCard = ({ active }) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className={active ? "profileCardPopup" : "unVisible"}>
      <div className="profileCardPopupHeader">
        <div className="profileCardImage">
          <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
        </div>
        <div className="profileCardNameCol">
          <div className="profileCardNameColName">
            <span>Mücahit Şahin</span>
          </div>
          <div className="profileCardNameColuserName">
            <span>@Mucahitsahin6</span>
          </div>
        </div>
        <div className="profileCardIcon">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="profileCardNewAccount">
        <span>Add an existing account</span>
      </div>
      <div
        className="profileCardLogout"
        onClick={() => {
          localStorage.removeItem("profile");
          history.push("/");
        }}
      >
        <span>Log out {user?.result.username}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
