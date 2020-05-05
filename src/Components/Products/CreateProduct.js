import React, { useState } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../Redux/actions/productActions";
import { Redirect } from "react-router-dom";

// Unfortunately, there was not enough time
// and I could not add photos at the same time through the <input type="file"/> at form and Redux,
// therefore, I decided to add photos via URL

const CreateProduct = ({ createProduct, history, auth }) => {
  const [addProduct, setAddProduct] = useState({
    title: "",
    price: "",
    description: "",
    img: "",
  });

  const { title, price, description, img } = addProduct;
  const handleChange = (e) =>
    setAddProduct({ ...addProduct, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      description,
      img,
    };
    if (price < 0.1 || price > 99999999.99) {
      alert("Price cannot be less than 1$ and more than 99999999.99$");
    } else {
      createProduct(newProduct);
      history.push("/");
    }
  };

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <h5 className="grey-text text-darken-3">Create a New Product</h5>
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input
            type="text"
            id="title"
            required
            minLength="20"
            maxLength="60"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="title">Product Title</label>
        </div>
        <div className="input-field">
          <input
            type="number"
            id="price"
            required
            step="0.1"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="price">Price</label>
        </div>
        <div className="input-field">
          <textarea
            id="description"
            className="materialize-textarea"
            maxLength="200"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <label htmlFor="description">Product description</label>
        </div>
        <div className="input-field">
          <input
            type="url"
            id="img"
            required
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="img">Image URL</label>
        </div>
        <div className="input-field">
          <button className="btn green lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, { createProduct })(CreateProduct);
