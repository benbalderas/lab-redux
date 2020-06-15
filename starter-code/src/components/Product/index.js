import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div className="m-10 card">
      <div className="max-w-100">
        <img src={image} alt={name} />
      </div>

      <div className="p-4">
        <h3 className="text-3xl">{name}</h3>
        <h4 className="text-lg m-2 text-gray-600">${price}</h4>
      </div>
    </div>
  );
};

export default Product;
