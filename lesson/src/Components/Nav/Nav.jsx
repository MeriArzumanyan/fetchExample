import React from 'react'
import { NavLink } from 'react-router-dom'
import st from "./Nav.module.css"
const Nav = () => {
  return (
   <nav>
  <div className={st.nav}>
    <NavLink to={"/"}>
        <h2>Home</h2>
    </NavLink>
    <NavLink to={"/posts"}>
        <h2>Posts</h2>
    </NavLink>
    <NavLink to={"/comments"}>
        <h2>Comments</h2>
    </NavLink>
   
  </div>
   </nav>
  )
}

export default Nav
