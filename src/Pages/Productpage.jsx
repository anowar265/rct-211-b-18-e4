import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/action";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
const Productpage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
        {products.length > 0 &&
          products.map((item) => <ProductCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Productpage;
