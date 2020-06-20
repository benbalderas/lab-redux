import React, { useEffect } from "react";
import Product from "../Product";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/ShopDuck";

export default function ProductGrid() {
  const products = useSelector((state) => state.products.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section>
      <h1 className="text-6xl">Products</h1>
      <div className="flex">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
