import st from "./Comments.module.css";
import React, { useEffect } from "react";

export const Comments = ({ comment, setComment, baseURL }) => {
  useEffect(() => {
    fetch(`${baseURL}/comments`)
      .then((res) => res.json())
      .then((res) => setComment(res));
  }, []);

  return (
    <div className={st.comments}>
      {comment.map((el) => {
        return (
          <div key={el.id} className={st.comment}>
            <p>Name: {el.name}</p>
          </div>
        );
      })}
    </div>
  );
};
