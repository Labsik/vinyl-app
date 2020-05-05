import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { deleteProduct } from "../../Redux/actions/productActions";

const ProductsList = ({ deleteProduct, products, auth }) => {
  const deleteItem = (id) => {
    deleteProduct(id);
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <div className="row">
        {products ? (
          products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                deleteItem={(id) => deleteItem(id)}
              />
            );
          })
        ) : (
          <p>You haven&#39;t products yet</p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, { deleteProduct }),
  firestoreConnect([{ collection: "products", orderBy: ["createdAt", "asc"] }])
)(ProductsList);
