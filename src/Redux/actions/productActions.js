import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  GET_PRODUCT,
} from "../types";

export const createProduct = (product) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  firestore
    .collection("products")
    .add({
      ...product,
    })
    .then(() => {
      dispatch({
        type: CREATE_PRODUCT,
        payload: product,
      });
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const deleteProduct = (id) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection("products")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: DELETE_PRODUCT, payload: id });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProduct = (updatedProduct, id) => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  firestore
    .collection("products")
    .doc(id)
    .update({
      ...updatedProduct,
    })
    .then(() => {
      dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct, id });
    })
    .catch((err) => {
      console.log(err);
    });
};
