// You will add code in this file
import React, { useState } from "react";
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import CommentSection from "../CommentSection/CommentSectionContainer";
import "./Posts.css";


// pass props in this file to
const Post = props => {
  // set up state for the likes
  console.log("props.propsPassedFromParent.username: ", props.propsPassedFromParent.username);
  const [likes, setLikes] = useState(props.propsPassedFromParent.likes);
  const[comments] = useState(props.propsPassedFromParent.comments);
  //console.log("comments: ", comments);
  const addLikes = likes => {
    setLikes(likes => likes + 1);
    console.log("setLikes: ", setLikes)
  };
  return (
    <div className="post-border">
      <PostHeader
        username={props.propsPassedFromParent.username}
        thumbnailUrl={
          props.propsPassedFromParent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsPassedFromParent.imageUrl}
        />
      </div>
      <LikeSection
        likes={likes}
        addLikes={addLikes}
      />
      <CommentSection
        comments={props.propsPassedFromParent.comments}
      />
    </div>
  );
};

export default Post;


