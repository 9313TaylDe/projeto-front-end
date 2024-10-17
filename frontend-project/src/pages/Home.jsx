import { useState } from "react";
import CollectionProducts from "../components/CollectionProducts";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import "../Home.css";
const Home = () => {
  const [isSmall, seIsSmall] = useState();

  const Small = () => seIsSmall(!isSmall);
  return (
    <div className="div-home">
      <CollectionProducts />
      <div className="container-produtosemalta">
        <h3>Produtos em alta</h3>
        <Link className="link-vermais-global" font="10px" color="red">
          Ver Todos &rarr;
        </Link>
      </div>
      <Products />
    </div>
  );
};

export default Home;
