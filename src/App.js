import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import ProductsList from "./Components/Products/ProductsList";
import CreateProduct from "./Components/Products/CreateProduct";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import EditProduct from "./Components/Products/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/create" component={CreateProduct} />
          {/* <Route path="/edit" component={EditProduct} /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
