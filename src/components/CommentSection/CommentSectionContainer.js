// You will add code to this file
import React, { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log("props: " + props);
  const [comments] = useState(props.comments)
  console.log("props.comments: ", props.comments);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
        {comments.map(c => {
          return <Comment comment={c}/> 
        })}
        
        <CommentInput/>
    </div>
  );
};

export default CommentSection;
