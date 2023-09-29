import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Topbar from "../UI/Topbar";
import Product from "./Product";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]); // Renamed SubCategory to subCategories
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch subcategories when component mounts
    const BASE_URL = "http://localhost:8336";
    const url = BASE_URL + "/subcategory/list";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          setSubCategories(response.data); // Update state with fetched subcategories
        } else {
          alert("Failed to fetch subcategories");
        }
      })
      .catch((error) => {
        alert("Request Failed");
      });
  }, []);

  const add = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || image === "" || price === "") {
      alert("All fields are mandatory!");
      return;
    }

    const url = "http://localhost:8336/products/create";

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

    const newProduct = {
      subcategory_id: selectedSubCategory,
      product_name: name,
      description: description,
      image: image,
      price: price,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setSelectedSubCategory("");
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="product">
      <div className="navbar-container">
        <Navbar />
      </div>
      {/* <div className="topbar-container">
        <Topbar />
      </div> */}

      <form onSubmit={add}>
        <h3 style={{ textAlign: "center" }}>Add Product:</h3>
        <div>
          <label>Sub-Category:</label>
          <select
            className="form-control"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option value="">Select a subcategory</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Product Name:</label>
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
        <div>
          <label>Image Url:</label>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            className="form-control"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark" onClick={add}>
          Add
        </button>
      </form>

      <Product products={products} setProducts={setProducts} />
    </div>
  );
};

export default AddProduct;
