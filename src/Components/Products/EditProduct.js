import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { updateProduct } from "../../Redux/actions/productActions";

class EditProduct extends Component {
  state = {
    title: "",
    price: "",
    description: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      const product = this.props.product;
      this.setState({
        title: product.title,
        price: product.price,
        description: product.description,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSave = (e) => {
    e.preventDefault();

    this.props.updateProduct(this.state, this.props.match.params.id);
    this.props.history.push("/");
  };
  render() {
    const { auth, product } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        {product ? (
          <form className="white" onSubmit={this.handleSave}>
            <h1>Edit {product.title}</h1>

            <div className="input-field">
              <input
                type="text"
                id="title"
                required
                minLength="20"
                maxLength="60"
                onChange={this.handleChange}
                className="validate"
                value={this.state.title}
                placeholder="Title"
              />
            </div>

            <div className="input-field">
              <input
                type="number"
                id="price"
                required
                step="0.1"
                onChange={this.handleChange}
                value={this.state.price}
                placeholder="Price"
              />
            </div>
            <div className="input-field">
              <textarea
                id="description"
                className="materialize-textarea"
                maxLength="200"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="input-field">
              <button className="btn yellow darken-3">Update</button>
            </div>
          </form>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, { updateProduct }),
  firestoreConnect([{ collection: "products" }])
)(EditProduct);
