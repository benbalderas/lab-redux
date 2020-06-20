import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="p-2 mb-6">
      <ul className="flex list-none">
        <li>
          <NavLink to="/products" className="text-base font-semibold">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-base font-semibold">
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-base font-semibold">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
