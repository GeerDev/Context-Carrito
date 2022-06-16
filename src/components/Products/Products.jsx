import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!products) {
    return <span>Cargando...</span>;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <span>{product.name} </span>
            <span>{product.price.toFixed(2)}</span>
            <button onClick={() => addCart(product)}>Add Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
