import React from "react";
import "./Profile.css";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import Topics from "../../components/Widgets/Topics/Topics";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import Post from "../../components/Feed/Post/Post";

import BackIcon from "@material-ui/icons/KeyboardBackspace";
import ScheduleIcon from "@material-ui/icons/CalendarToday";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Links from "../../components/Widgets/Links/Links";
import HomeBox from "../../components/HomeBox/HomeBox";
import Loading from "../../components/Loading/Loading";
import { getUserPosts } from "../../store/actions/postActions";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const user = useSelector((state) => state.auth).user;
  const userPosts = useSelector((state) => state.posts).userPosts;

  React.useEffect(() => {
    if (!user) return;
    dispatch(getUserPosts(user._id));
    setLoading(false);
  }, [dispatch, getUserPosts]);
  return (
    <HomeBox>
      <section className="feed">
        <div className="profileHeader">
          <div onClick={() => history.goBack()}>
            <BackIcon />
          </div>
          <div>
            <span>{user.fullname}</span>
            <span>12 Tweets</span>
          </div>
        </div>
        <div className="profile">
          <div className="backgroundImage"></div>
          <div className="profileTitle">
            <div className="profileImage">
              <Avatar src="" />
            </div>
            <div className="editProfile">
              <span>Edit Profile</span>
            </div>
          </div>
          <div className="profileBiography">
            <span>{user.fullname}</span>
            <span>@{user.username}</span>
            <span>Junior Software Developer</span>
            <span>
              <ScheduleIcon />
              Joined December 2011
            </span>
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
          <div className="profileCategory">
            <div
              className={category === 1 && "profileCategoryActive"}
              onClick={() => setCategory(1)}
            >
              <span>Tweets</span>
            </div>
            <div
              className={category === 2 && "profileCategoryActive"}
              onClick={() => setCategory(2)}
            >
              <span>Tweets & replies</span>
            </div>
            <div
              className={category === 3 && "profileCategoryActive"}
              onClick={() => setCategory(3)}
            >
              <span>Media</span>
            </div>
            <div
              className={category === 4 && "profileCategoryActive"}
              onClick={() => setCategory(4)}
            >
              <span>Likes</span>
            </div>
          </div>
        </div>
        <article className="profilePosts">
          {!loading ? (
            userPosts?.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <Loading />
          )}
        </article>
        <BottomSidebar />
      </section>
      <div className="widgets">
        <SearchInput placeholder="Search Twitter" />
        <FriendSuggestions />
        <Topics />
        <Links />
      </div>
    </HomeBox>
  );
};

export default Profile;
