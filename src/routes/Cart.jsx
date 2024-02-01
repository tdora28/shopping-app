import { useSelector } from 'react-redux';
import ProductSingleCart from './ProductSingleCart';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="products-grid">
      {cart.map((product) => (
        <ProductSingleCart key={product.id} {...product}></ProductSingleCart>
      ))}
    </div>
  );
};

export default Cart;
