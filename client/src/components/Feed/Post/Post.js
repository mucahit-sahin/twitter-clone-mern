import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import FavoriteIcon from "../../icons/FavoriteIcon";
import CommentIcon from "../../icons/CommentIcon";
import RetweetIcon from "../../icons/RetweetIcon";
import SharePostIcon from "../../icons/SharePostIcon";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { MillToDate } from "../../../utils/MillToDate";
import ProfileCard from "../../ProfileCard/ProfileCard";

function Post({ post }) {
  const {
    userimage,
    username,
    fullname,
    text,
    shareImage,
    date,
    likes,
    comments,
  } = post;
  const [isVisibleProfileCard, setIsVisibleProfileCard] = React.useState(false);
  return (
    <div className="post" onMouseLeave={() => setIsVisibleProfileCard(false)}>
      <ProfileCard active={isVisibleProfileCard && true} />
      <div>
        <Avatar src={userimage} />
      </div>
      <div className="post-content-col">
        <div className="post-header">
          <span
            className="post-header-displayname"
            onMouseEnter={() => setIsVisibleProfileCard(true)}
            onMouseLeave={() => {
              setTimeout(function () {
                setIsVisibleProfileCard(false);
              }, 1000);
            }}
          >
            {fullname}
          </span>
          <span className="post-header-username">{"@" + username}</span>
          <span className="post-header-date">{MillToDate(date)}</span>
          <MoreHorizIcon className="postMoreIcon" />
        </div>
        <div className="post-content">{text}</div>
        {shareImage && (
          <div className="post-image">
            <img src={shareImage} alt="shareimage" />
          </div>
        )}
        <div className="post-event">
          <div>
            <CommentIcon className="postIcon" />
            <span>{comments.length > 0 ? comments.length : ""}</span>
          </div>
          <div>
            <FavoriteIcon className="postIcon" />
            <span>{likes.length > 0 ? likes.length : ""}</span>
          </div>
          <div>
            <RetweetIcon className="postIcon" />
            <span>5</span>
          </div>
          <div>
            <SharePostIcon className="postIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
