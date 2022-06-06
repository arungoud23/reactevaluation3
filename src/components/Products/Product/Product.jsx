import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
// import {axios} from 'react';

const Product = () => {
  // Note: this id should come from api
  const [Product,setProduct] = useState();
  useEffect(()=>{
    axios({
      url:"http:/localhost/products 1234",
      methods:"GET"
    })
    .then((res)=>{
      setProduct(res.data.data)
    })
  })
  // const product = { id: 1 };
  return (
    {Product.map((product)=>{
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>
    </div>
        }}
  );
};

export default Product;
