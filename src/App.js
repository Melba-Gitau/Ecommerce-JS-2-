import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./UI/Home";
import Shop from "./UI/Shop";
import DashBoard from "./UI/DashBoard";
import AddProduct from "./Products/AddProduct";
import Product from "./Products/Product";
import AddCategory from "./Categories/AddCategory";
import SubCategory from "./SubCategories/SubCategory";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/designs/shop" element={<Shop />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/tp" element={<Product />} />
          <Route path="/products" element={<AddProduct />} />
          <Route path="/categories" element={<AddCategory />} />
          <Route path="/subcategories" element={<SubCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
