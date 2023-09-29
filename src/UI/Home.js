import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>
        <i> Ecom-Web</i>
      </h1>
      <Link to="/designs/shop">
        <button>Begin your Journey...</button>
      </Link>
    </div>
  );
};

export default Home;
