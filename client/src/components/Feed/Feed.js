import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import HomeStars from "../icons/HomeStars";
import BottomSidebar from "../BottomSidebar/BottomSidebar";
import { Avatar } from "@material-ui/core";
import DrawerBar from "../DrawerBar/DrawerBar";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/actions/postActions";

function Feed() {
  const posts = useSelector((state) => state.posts).posts;
  const dispatch = useDispatch();

  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(getAllPosts());
    setLoading(false);
  }, [dispatch, getAllPosts]);
  return (
    <section className="feed">
      {isDrawerBar && (
        <div onClick={() => setIsDrawerBar(false)} className="drawerBarPanel" />
      )}
      <DrawerBar active={isDrawerBar} />
      <div className="feed-header">
        <div onClick={() => setIsDrawerBar(true)}>
          <Avatar src="" />
        </div>
        <div className="feed-headerText">
          <span>Home</span>
        </div>
        <div className="homeStarsCol">
          <HomeStars className="homeStars" width={22} height={22} />
        </div>
      </div>
      <TweetBox />
      {loading ? (
        <Loading />
      ) : (
        <article>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </article>
      )}
      <BottomSidebar />
    </section>
  );
}

export default Feed;
