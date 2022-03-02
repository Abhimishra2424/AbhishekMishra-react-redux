import React, { useEffect } from "react";

import axios from "axios";
import { Product } from "../components/Product";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  const dispatch = useDispatch();

  const url = "https://aveosoft-react-assignment.herokuapp.com/products";
  const getProducts = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log(err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      className="ui grid container"
      style={{
        marginTop: "40px",
        height: "100vh",
      }}
    >
      <Product />
    </div>
  );
};
