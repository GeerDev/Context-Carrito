import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Cart = () => {
    const { cart,clearCart } = useContext(ProductsContext);

if(!cart){
    return <span>No tienes ningún producto añadido</span>
}

const cartItem = cart.map((cartItem,i) => {
    console.log(cartItem)
    return(
        <div className="cart" key={i}>
            <span>{cartItem.name}</span>
            <span>{cartItem.price.toFixed(2)}</span>
        </div>
    )
})
  return (
    <div>
        {cartItem}
        <button onClick={()=> clearCart()}>Clear cart</button>
    </div>
  )
}

export default Cart