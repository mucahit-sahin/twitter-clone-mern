import { Avatar } from "@material-ui/core";
import React from "react";
import { VerifiedIcon } from "../icons";
import "./ProfileCard.css";

const ProfileCard = ({ active, user }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div
      className={
        active || isVisible ? "profileDetailCard" : "profileDetailCardActive"
      }
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <Avatar src="" />
        <div>
          <span>Follow</span>
        </div>
      </div>
      <div>
        <span>{user.fullname}</span>
        <VerifiedIcon />
      </div>
      <div>
        <span>@{user.username}</span>
      </div>
      <div>
        <span>Junior Software Developer</span>
      </div>
      <div>
        <span>
          <span>167</span>
          <span>Following</span>
        </span>
        <span>
          <span>167</span>
          <span>Followers</span>
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
