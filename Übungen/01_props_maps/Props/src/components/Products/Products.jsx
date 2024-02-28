import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <section className="grid">
      <Product
        img="https://i5.walmartimages.com/seo/WWE-Action-Figure-Ultimate-Edition-Ruthless-Aggression-Brock-Lesnar_3f982310-a360-4dd6-8bc4-9846754c2e18.758a03dcc4c15603dd4a2c8341f04506.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        heading="Brock Lesnar"
        price="39,99$"
      />
      <Product
        img="https://i.ebayimg.com/images/g/rFQAAOSwVT5jRqx4/s-l1200.jpg"
        heading="Ultimate Warrior"
        price="39,99$"
      />
      <Product
        img="https://shopping.mattel.com/cdn/shop/products/g58brtmpm3fr8blvvjqe_26a8e294-eb28-4691-8b71-28125437ec4f.jpg?v=1674497793"
        heading="Dwayne 'The Rock' Johnson"
        price="39,99$"
      />
    </section>
  );
};

export default Products;
