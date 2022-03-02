import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

export const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { name, model, price, description } = product;
  const dispatch = useDispatch();

  const { id } = useParams();

  const getOneProduct = async () => {
    const response = await axios
      .get(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (id && id !== "") getOneProduct();
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column rp">
                <h1>{name}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{model}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
