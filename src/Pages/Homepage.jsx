import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Productpage from "./Productpage";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/action";
import { store } from "../Redux/store";

const Homepage = () => {
  //Do not modify anything in this file
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  console.log(products);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Productpage />
    </div>
  );
};

export default Homepage;
