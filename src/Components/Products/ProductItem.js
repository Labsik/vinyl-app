import React from "react";
import Img from "../../sample-1.png";
import { Link } from "react-router-dom";

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <div className="col s12 l6">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Img} />
          <p class="card-title">
            <strong> {product.title} </strong>
          </p>
        </div>
        <div class="card-content">
          <p class="activator grey-text text-darken-4">
            <i class="material-icons right">more_vert</i>
          </p>
          <span> Price: {product.price}&#36;</span>
        </div>
        <div class="card-reveal">
          <h3 class="card-title grey-text ">
            Your product: {product.title}
            <i class="material-icons right">close</i>
          </h3>
          <h6> Description: {product.description}</h6>
        </div>
        <div>
          <div className="card-action">
            <Link to="/">Edit</Link>
            <button
              className="btn red darken-1"
              onClick={() => {
                deleteProduct(product.id);
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
