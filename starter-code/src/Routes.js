import React from "react";
import { Route } from "react-router-dom";
import ProductGrid from "./components/ProductGrid";

const Routes = () => (
    <Route exact path="/products" component={ProductGrid} />
);

export default Routes;