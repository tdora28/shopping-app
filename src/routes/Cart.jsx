import { useSelector } from 'react-redux';
import ProductSingle from './ProductSingle';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div className="products-grid">
      {cart.map((product) => (
        <ProductSingle key={product.id} {...product}></ProductSingle>
      ))}
    </div>
  );
};

export default Cart;
