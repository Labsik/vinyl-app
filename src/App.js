import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import ProductsList from "./Components/Products/ProductsList";
import CreateProduct from "./Components/Products/CreateProduct";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import EditProduct from "./Components/Products/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/create" component={CreateProduct} />
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route render={() => <h1>Sorry, page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
