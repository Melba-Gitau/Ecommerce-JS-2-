import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import Navbar from "../UI/Navbar";

const AddCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || image === "" || description === "") {
      alert("All fields are mandatory!");
      return;
    }

    const newCategory = {
      name: name,
      image: image,
      description: description,
    };

    const url = "http://localhost:8336/category/create";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          alert("Added successfully");
        } else {
          alert("Failed to add Category!!!!");
        }
      })
      .catch((error) => {
        alert("error occured");
      });

    setCategory((prevCategory) => [...prevCategory, newCategory]);
    setName("");
    setImage("");
    setDescription("");
  };
  return (
    <div className="category">
      <Navbar />
      <form onSubmit={add}>
        <h3 style={{ textAlign: "center" }}>Categories:</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark" onClick={add}>
          Add
        </button>
      </form>
      <CategoryList category={category} setCategory={setCategory} />
    </div>
  );
};
export default AddCategory;
