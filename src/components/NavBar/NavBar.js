import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header style={headerStyle}>
      <h1 style={{ textTransform: "uppercase" }}>Beans Love Beers</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/Favorite">
        Favourite
      </Link>
    </header>
  );
}

//todo header
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default NavBar;
