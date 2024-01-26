import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';
import ProductSingle from './ProductSingle';

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  // The above line can also be written like this:
  // const products = useSelector((state) => state.product.products);

  // the above line can be undesrtood as: store.product.products
  // where store is the state
  // where product is the reducer
  // and where products is inside the initial state of the reducer

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductSingle key={product.id} {...product}></ProductSingle>
      ))}
    </div>
  );
};

export default Products;
