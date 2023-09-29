import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8336/category/list";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          setCategory(response.data);
        } else {
          alert("Failed to fetch records");
        }
      })
      .catch((error) => {
        alert("Request Failed");
      });
  }, []);
  return (
    <div className="shop">
      <i
        style={{
          marginLeft: "2%",
          fontFamily: "Imperial",
          fontWeight: "700",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Ecom-Web
      </i>
      <div className="boxes">
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div>{" "}
      </div>
      <h1>The Shop</h1>
      <div className="shopLinks" style={{ textAlign: "center" }}>
        <ul>
          <li>
            <Link to="/design/women" style={{ color: "black" }}>
              LADIES
            </Link>
          </li>
          <li>
            <Link to="/design/men" style={{ color: "black" }}>
              MEN
            </Link>
          </li>
          <li>
            <Link to="/design/access" style={{ color: "black" }}>
              ACCESSORIES
            </Link>
          </li>
          <li>
            <Link to="/design/elect" style={{ color: "black" }}>
              ELECTRONICS
            </Link>
          </li>
        </ul>
      </div>

      <div className="row">
        {category.map((category, index) => (
          <div className="col-sm-4" key={index}>
            <img
              src={category.image}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <h2>
              <Link
                to="/design/women"
                style={{
                  color: "white",
                  textDecoration: "NONE",
                }}
              >
                <i>{category.name}</i>
              </Link>
            </h2>
          </div>
        ))}
      </div>
      <Link to="/dashboard">
        <button
          className="btn-dark"
          style={{
            padding: "7px 30px",
            fontFamily: "sans-serif",
            fontWeight: "700",
            borderRadius: "10px",
            float: "right",
            marginRight: "10%",
            transition: "background-color 0.3s ease",
          }}
        >
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Shop;
