//Complete the necessary code in this file
// import useState
import React, { useState } from "react";//imported useState
import Post from "./Post";
import "./Posts.css";
//import dummy data
import dummyData from "../../dummy-data";
const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  //console.log("dummyData: " + dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(p => (
        <Post key={p.id} propsPassedFromParent={p}/>
      ))

      }
    </div>
  );
};

export default PostsPage;

