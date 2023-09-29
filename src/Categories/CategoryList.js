import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";

const CategoryList = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const deleteCategory = async (index) => {
    const updatedCategory = [...category];
    const deletedCategoryId = updatedCategory[index].id; // Assuming each category has an 'id'

    const url = `http://localhost:8336/category/delete/${deletedCategoryId}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        updatedCategory.splice(index, 1);
        setCategory(updatedCategory);
      } else {
        alert("Failed to delete category");
      }
    } catch (error) {
      alert("An error occurred", error);
    }
  };

  const updatedCategory = async (category) => {
    const url = `http://localhost:8336/category/update/${category.id}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      if (response.ok) {
        navigate(`/category/${category.name}`, { state: category });
      } else {
        console.error("Failed to update category");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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
    <div className="categorylist">
      <h3>Category List:</h3>
      {category.length > 0 ? (
        <table className="table" border="2px">
          <thead>
            <tr>
              <td>Name:</td>
              <td>Image(URL):</td>
              <td>Description:</td>
            </tr>
          </thead>
          <tbody>
            {category.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>{category.image}</td>
                <td>{category.description}</td>
                <td>
                  <button onClick={() => updatedCategory(category)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteCategory(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No category available.</p>
      )}
      <Link to="/dashboard">
        <button className="btn btn-dark">Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default CategoryList;
