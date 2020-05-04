import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../Redux/actions/productActions";
import { Redirect } from "react-router-dom";

class CreateProduct extends Component {
  state = {
    title: "",
    price: "",
    description: "",
    img: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: this.state.title,
      price: +this.state.price,
      description: this.state.description,
      img: this.state.img,
    };
    if (this.state.price < 0.1) {
      alert("Price cannot be less than 1");
    } else if (this.state.price > 99999999.99) {
      alert("Price cannot be less than  99999999.99");
    } else {
      this.props.createProduct(newProduct);
      this.props.history.push("/");
    }
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <h5 className="grey-text text-darken-3">Create a New Product</h5>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              id="title"
              required
              minLength="20"
              maxLength="60"
              onChange={this.handleChange}
            />
            <label htmlFor="title">Product Title</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="price"
              required
              step="0.1"
              onChange={this.handleChange}
            />
            <label htmlFor="price">Price</label>
          </div>
          <div className="input-field">
            <textarea
              id="description"
              className="materialize-textarea"
              maxLength="200"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="description">Product description</label>
          </div>
          <div className="input-field">
            <button className="btn green lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, { createProduct })(CreateProduct);
