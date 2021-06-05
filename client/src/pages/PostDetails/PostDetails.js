import React from "react";
import "./PostDetails.css";
import { useHistory, useParams } from "react-router";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import PostDetailsComponent from "../../components/PostDetailsComponent/PostDetailsComponent";
import HomeBox from "../../components/HomeBox/HomeBox";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/actions/postActions";
import Widgets from "../../components/Widgets/Widgets";

export const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { post } = useSelector((state) => state.posts);
  React.useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, getPost, post]);
  if (!post) {
    return (
      <HomeBox>
        <div className="feed">
          <span>Post Bulunamadı</span>
        </div>
        <Widgets />
      </HomeBox>
    );
  }
  return (
    <HomeBox>
      <div className="feed">
        <div className="post-details-header">
          <div onClick={() => history.goBack()}>
            <BackIcon />
          </div>
          <div>
            <span>Tweet</span>
          </div>
        </div>
        <PostDetailsComponent post={post} />
      </div>
      <Widgets />
    </HomeBox>
  );
};
