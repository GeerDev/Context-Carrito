import { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);
  if (!cart) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const cartItem = cart.map((cartItem, i) => {
    console.log(cartItem);
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)}</span>
      </div>
    );
  });
  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createOrder(cart)}>Create Order</button>
    </div>
  );
};

export default Cart;
