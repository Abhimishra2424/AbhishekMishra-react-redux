import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, name, model, price } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{model}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
