import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);
  
  if (!products) {
    return <span>Cargando...</span>;
  }
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <span>{product.name} </span>
            <span>{product.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
