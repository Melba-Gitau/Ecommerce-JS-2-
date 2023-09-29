import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubCategoryList from "./SubCategoryList";
import Navbar from "../UI/Navbar";

const SubCategory = () => {
  const [SubCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

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
  const add = (e) => {
    e.preventDefault();
    if (selectedCategory === "" || name === "" || description === "") {
      alert("All fields are mandatory!");
      return;
    }

    const newSubCategory = {
      category_id: selectedCategory,
      name: name,
      description: description,
    };

    const url = "http://localhost:8336/subcategory/create";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubCategory),
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

    setSubCategory((prevSubCategory) => [...prevSubCategory, newSubCategory]);
    setSelectedCategory("");
    setName("");
    setDescription("");
  };
  return (
    <div className="category">
      <Navbar />
      <form onSubmit={add}>
        <h3 style={{ textAlign: "center" }}>Sub-Categories:</h3>
        <div>
          <label>Category:</label>
          <select
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {category.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
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
      <SubCategoryList
        SubCategory={SubCategory}
        setSubCategory={setSubCategory}
      />
    </div>
  );
};
export default SubCategory;
