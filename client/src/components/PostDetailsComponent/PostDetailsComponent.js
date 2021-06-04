import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../store/actions/postActions";
import AddComment from "../AddComment/AddComment";
import Post from "../Feed/Post/Post";
import {
  CommentIcon,
  FavoriteIcon,
  RetweetIcon,
  SharePostIcon,
} from "../icons";
import "./PostDetailsComponent.css";

const PostDetailsComponent = ({ post }) => {
  const {
    _id,
    userimage,
    username,
    fullname,
    text,
    shareImage,
    date,
    likes,
    comments,
  } = post;
  const [visible, setVisible] = React.useState(false);
  const auth = useSelector((state) => state.auth);
  const active =
    likes?.filter((like) => like.user.toString() === auth?.user?._id).length > 0
      ? true
      : false;
  const dispatch = useDispatch();
  function likeOrUnlike() {
    if (
      likes?.filter((like) => like.user.toString() === auth?.user?._id)
        .length === 0
    ) {
      dispatch(likePost(_id));
    } else {
      dispatch(unlikePost(_id));
    }
  }
  return (
    <div className="postDetails">
      <div className="postDetailsHeader">
        <div>
          <Avatar src="" />
        </div>
        <div>
          <span className="post-details-header-displayname">{fullname}</span>
          <span className="post-details-header-username">{"@" + username}</span>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post-details-content">
        <span>{text}</span>
      </div>
      <div className="post-details-info">
        <span>{date}</span>
      </div>
      <div className="post-details-counts">
        <div>
          <span>{likes?.length}</span>
          <span>Likes</span>
        </div>
      </div>
      <div className="post-details-events">
        <div onClick={() => setVisible(true)}>
          <CommentIcon className="postIcon" />
        </div>
        <div>
          <div
            onClick={(e) => {
              likeOrUnlike();
              e.stopPropagation();
            }}
          >
            <FavoriteIcon
              className={`postIcon ${active && "active"}`}
              active={active}
            />
          </div>
        </div>
        <div>
          <RetweetIcon className="postIcon" />
        </div>
        <div>
          <SharePostIcon className="postIcon" />
        </div>
      </div>
      {comments && (
        <div className="post-details-comments">
          {comments.map((comment) => (
            <Post post={comment} />
          ))}
        </div>
      )}
      <AddComment post={post} visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default PostDetailsComponent;
