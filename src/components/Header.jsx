import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link id="btn-theme" to="/blog">
              IAli-Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
