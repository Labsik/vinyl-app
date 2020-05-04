import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { deleteProduct } from "../../Redux/actions/productActions";

class ProductsList extends Component {
  deleteProduct = (id) => {
    this.props.deleteProduct(id);
  };

  render() {
    const { products, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <div className="row">
          {products &&
            products.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  deleteProduct={this.deleteProduct}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, { deleteProduct }),
  firestoreConnect([{ collection: "products" }])
)(ProductsList);
