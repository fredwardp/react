import "./Product.css";

const Product = (props) => {
  return (
    <article className="product_box">
      <img src={props.img} alt="" />
      <h2>{props.heading}</h2>
      <p>{props.price}</p>
      <a href="#">Buy Now</a>
    </article>
  );
};

export default Product;
