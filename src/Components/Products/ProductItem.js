import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, deleteItem }) => {
  return (
    <div className="col s12 l6">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={product.img} />
          <p className="card-title">
            <strong> {product.title} </strong>
          </p>
        </div>
        <div className="card-content">
          <p className="activator grey-text text-darken-4">
            <i className="material-icons right">more_vert</i>
          </p>
          <p>
            <strong>Price:</strong> {product.price}&#36;
          </p>
        </div>
        <div className="card-reveal">
          <h3 className="card-title grey-text ">
            Your product: {product.title}
            <i className="material-icons right">close</i>
          </h3>
          <h6> Description: {product.description}</h6>
        </div>
        <div>
          <div className="card-action">
            <Link to={"/edit/" + product.id} role="button">
              Edit
            </Link>
            <button
              className="btn red darken-1"
              onClick={() => {
                deleteItem(product.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
