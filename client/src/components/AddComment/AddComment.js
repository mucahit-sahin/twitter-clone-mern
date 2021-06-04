import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./AddComment.css";
import { Avatar } from "@material-ui/core";
import { EmojiIcon, GifIcon, PhotoIcon, PlanIcon, SurveyIcon } from "../icons";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/actions/postActions";

const AddComment = ({ visible, setVisible, post }) => {
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();
  function submitComment() {
    if (comment.trim() != "") {
      dispatch(addComment(post._id, comment));
      setComment("");
      setVisible(false);
    }
  }
  if (visible) {
    return (
      <>
        <div className="modal-panel"></div>
        <div className="add-comment">
          <div className="add-comment-header">
            <div onClick={() => setVisible(false)}>
              <CloseIcon />
            </div>
          </div>
          <div className="add-comment-post">
            <div className="add-comment-post-image-col">
              <div>
                <Avatar src="" />
              </div>
              <div></div>
            </div>
            <div className="add-comment-post-content-col">
              <div className="add-comment-post-content-col-header">
                <span>{post.fullname}</span>
                <span>@{post.username}</span>
                <span>{post.date}</span>
              </div>
              <div className="add-comment-post-content-col-text">
                <span>{post.text}</span>
              </div>
            </div>
          </div>
          <div className="add-comment-text-area-row">
            <div>
              <Avatar src="" />
            </div>
            <div>
              <textarea
                placeholder="Add Another Tweet"
                name="Text1"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className="buttons">
                <div style={{ flex: 0.1 }}></div>
                <div className="tweetboxOptions">
                  <PhotoIcon
                    className="tweetboxOptionIcon"
                    width={22}
                    height={22}
                  />
                  <GifIcon
                    className="tweetboxOptionIcon"
                    width={22}
                    height={22}
                  />
                  <SurveyIcon
                    className="tweetboxOptionIcon"
                    width={22}
                    height={22}
                  />
                  <EmojiIcon
                    className="tweetboxOptionIcon"
                    width={22}
                    height={22}
                  />
                  <PlanIcon
                    className="tweetboxOptionIcon"
                    width={22}
                    height={22}
                  />
                  <button
                    type="submit"
                    className="tweetbox-button"
                    onClick={() => submitComment()}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default AddComment;
