import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const { name, image } = product;

  return (
    <section className="section product">
      <h3>{productId}</h3>
      <h2>single product</h2>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
