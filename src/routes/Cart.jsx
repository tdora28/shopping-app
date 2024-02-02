import { useSelector } from 'react-redux';
import CartSingle from './CartSingle';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="products-grid">
      {cart.map((product) => (
        <CartSingle key={product.id} {...product}></CartSingle>
      ))}
    </div>
  );
};

export default Cart;
