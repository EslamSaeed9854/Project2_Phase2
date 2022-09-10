import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css'
function Navbar() {
    let route = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg border  bg-white justify-content-between">
      <a class="navbar-brand" href="#">
        <img
          src="./images/logo-udemy.svg"
          alt="Logo"
          width="100"
          height="24"
          class="d-inline-block align-text-top"
          onClick={ ()=>{ route("/Home");}}
        />
      </a>
      <span>Categories</span>

      <div class="search-text form-outline">
        <input
          type="search"
          id="form1"
          style={{ width: "500px",textIndent: "5%"}}
          class="form-control rounded-4"
          placeholder="Search for any thing"
          aria-label="Search"
        />
        <img
          class="search-icon"
          id="search_photo"
          src="images/icon-search.png"
          alt=""
        />
      </div>
      <span>Udemy Business</span>
      <span>Teach on Udemy</span>
      <span>My learning</span>
      <img
        style={{marginRight: "20px" , height: "30px"}}
        class="ptr"
        src="images/icon-cart.jpg"
        alt=""
      />
      <div class="login-icon ptr">
        <pa>Log in</pa>
      </div>
      <div class="signup-icon ptr">
        <pa>Sign up</pa>
      </div>
      <img
        class="ptr"
        style={{height: "30px" , marginRight: "10px"}}
        src="images/icon-language.jpg"
        alt=""
      />
    </nav>
  );
}

export default Navbar;
