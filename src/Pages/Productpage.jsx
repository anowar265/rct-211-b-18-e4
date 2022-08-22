import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  getProductFailure,
  getProductRequest,
  getProductSuccess,
} from "../Redux/action";
import axios from "axios";
const Productpage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    dispatch(getProductRequest());
    axios
      .get("http://localhost:8080/products")
      .then(({ data }) => {
        dispatch(getProductSuccess(data));
      })
      .catch((err) => dispatch(getProductFailure()));
  };
  return (
    <div style={{ width: "100%" }}>
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
      </div>
    </div>
  );
};

export default Productpage;
