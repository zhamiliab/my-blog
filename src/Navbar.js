import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Zhamilia's blog</h1>
      <div className="links">
        <Link to="/">Home</Link>

        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#05cec8",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
