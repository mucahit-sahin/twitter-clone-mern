import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../../store/actions/authActions";
import "./ProfileCard.css";

const ProfileCard = ({ active }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
          dispatch(logout());
          history.push("/");
        }}
      >
        <span>Log out Mücahit</span>
      </div>
    </div>
  );
};

export default ProfileCard;
