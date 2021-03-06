import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../../store/actions/authActions";
import "./ProfileCard.css";

const ProfileCard = ({ active }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={active ? "profileCardPopup" : "unVisible"}>
      <div className="profileCardPopupHeader">
        <div className="profileCardImage">
          <Avatar src="" />
        </div>
        <div className="profileCardNameCol">
          <div className="profileCardNameColName">
            <span>{user?.fullname}</span>
          </div>
          <div className="profileCardNameColuserName">
            <span>@{user?.username}</span>
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
        <span>Log out {user?.fullname}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
