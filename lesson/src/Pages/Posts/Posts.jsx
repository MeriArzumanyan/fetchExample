import React, { useEffect } from "react";
import st from "./Posts.module.css";
import { NavLink, json } from "react-router-dom";

export const Posts = ({
  post,
  setPost,
  baseURL,
  openInput,
  open,
  managingInput,
  forInput,
}) => {
  useEffect(() => {
    fetch(`${baseURL}/posts`)
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
      });
  }, []);

  function add() {
    fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: forInput }),
    })
      .then((res) => res.json())
      .then((res) =>
        setPost((prev) => {
          return [res, ...prev];
        })
      );
  }
  function remove(id) {
    fetch(`${baseURL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setPost(
      post.filter((el) => {
        return el.id !== id;
      })
    );
  }

  return (
    <div className={st.posts}>
      <button onClick={openInput}>Admin</button>

      {open && <input type="text" value={forInput} onChange={managingInput} />}
      <button onClick={add}>add</button>
      {post.map((el) => {
        return (
          <div key={el.id} className={st.post}>
            <NavLink to={`/posts/${el.id}`}>
              <p>Title: {el.title}</p>
            </NavLink>
            <button onClick={() => remove(el.id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};
