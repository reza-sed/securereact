import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="nav__link" to="/user">
            User
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
