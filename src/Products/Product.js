import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = ({ products, setProducts }) => {
  const navigate = useNavigate();

  const deleteProduct = async (index) => {
    const updatedProduct = [...products];
    const deletedProductId = updatedProduct[index].id;

    const url = `http://localhost:8336/products/delete/${deletedProductId}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        updatedProduct.splice(index, 1);
        setProducts(updatedProduct);
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const updatedProduct = (product) => {
    navigate(`/products/${product.name}`, { state: product });
    // Logic to update user goes here
  };
  useEffect(() => {
    const url = "http://localhost:8336/products/list";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          setProducts(response.data);
        } else {
          alert("Failed to fetch records");
        }
      })
      .catch((error) => {
        alert("Request Failed");
      });
  }, []);
  return (
    <div className="productlist">
      <h3>Products List:</h3>
      {products.length > 0 ? (
        <table className="table" border="2px">
          <thead>
            <tr>
              <td>Subcategory:</td>
              <td>Product Name:</td>
              <td>Description:</td>
              <td>Image(URL):</td>
              <td>Price:</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.subcategory_id}</td>
                <td>{product.product_name}</td>
                <td>{product.description}</td>
                <td>{product.image}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => updatedProduct(product)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteProduct(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
