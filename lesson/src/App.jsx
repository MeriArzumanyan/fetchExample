import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./Pages/Posts/Posts";
import { Home } from "./Pages/Home/Home";
import Loyout from "./Components/Loyout/Loyout";
import { Comments } from "./Components/Commenst/Comments";
import { Post } from "./Components/Post/Post";

import "./App.css";

function App() {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const [uniquePost, setUniquePost] = useState([]);
  const [open, setOpen] = useState(false);
  const [forInput,setForInput]=useState("")
  const baseURL = `https://jsonplaceholder.typicode.com`;
  const openInput = () => {
    setOpen(!open);
  };
  const managingInput=(e)=>{
    setForInput(e.target.value)
  }
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route
            path={`/posts`}
            element={
              <Posts
                post={post}
                setPost={setPost}
                baseURL={baseURL}
                open={open}
                setOpen={setOpen}
                openInput={openInput}
                forInput={forInput}
                setForInput={setForInput}
                managingInput={managingInput}
              />
            }
          />
          <Route
            path="/comments"
            element={
              <Comments
                comment={comment}
                setComment={setComment}
                baseURL={baseURL}
              />
            }
          />
          <Route
            path="/posts/:id"
            element={
              <Post
                post={post}
                setPost={setPost}
                baseURL={baseURL}
                uniquePost={uniquePost}
                setUniquePost={setUniquePost}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
