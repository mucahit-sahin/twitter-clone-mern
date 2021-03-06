import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import {
  HomeIcon,
  MessagesIcon,
  ListIcon,
  UserIcon,
  ExploreIcon,
  SetTweetIcon,
  NotificationsIcon,
  BookmarkIcon,
  MoreIcon,
} from "../icons/index";
import TwitterIcon from "@material-ui/icons/Twitter";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import MoreMenu from "../MoreMenu/MoreMenu";
import ProfileCard from "./ProfileCard/ProfileCard";
import { useSelector } from "react-redux";

function Sidebar() {
  const [location] = React.useState(useLocation().pathname);
  const [moreActive, setMoreActive] = React.useState(false);
  const [profileCardActive, setProfileCardActive] = React.useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon" />
      <Link to="/home" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Home"
          Icon={HomeIcon}
          active={location === "/home" && true}
        />
      </Link>
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Explore"
          Icon={ExploreIcon}
          active={location === "/explore" && true}
        />
      </Link>
      <Link to="/Notifications" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Notifications"
          Icon={NotificationsIcon}
          active={location === "/Notifications" && true}
        />
      </Link>
      <Link to="/Messages" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Messages"
          Icon={MessagesIcon}
          active={location === "/Messages" && true}
        />
      </Link>
      <Link to="/Bookmarks" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Bookmarks"
          Icon={BookmarkIcon}
          active={location === "/Bookmarks" && true}
        />
      </Link>
      <Link to="/Lists" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Lists"
          Icon={ListIcon}
          active={location === "/Lists" && true}
        />
      </Link>
      <Link to="/Profile" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Profile"
          Icon={UserIcon}
          active={location === "/Profile" && true}
        />
      </Link>
      <div
        onClick={() => setMoreActive(!moreActive)}
        className="moreMenuButton"
      >
        <SidebarItem text="More" Icon={MoreIcon} />
        <MoreMenu active={moreActive} />
        {moreActive && <div className="closeMoreMenuPanel" />}
      </div>
      <div className="tweetButton">
        <SetTweetIcon className="setTweetIcon" />
        <span>Tweet</span>
      </div>
      <div
        className="profileCard"
        onClick={() => setProfileCardActive(!profileCardActive)}
      >
        <ProfileCard active={profileCardActive} />
        {profileCardActive && <div className="closeMoreMenuPanel" />}
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
    </div>
  );
}

export default Sidebar;
