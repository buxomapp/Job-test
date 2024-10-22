import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, togglePurchased } from '../redux/actions/shoppingListActions';

const ProductList = ({ list }) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({ name: '', quantity: 1 });

  const handleAddProduct = () => {
    if (newProduct.name.trim()) {
      dispatch(addProduct(list.id, newProduct));
      setNewProduct({ name: '', quantity: 1 });
    }
  };

  const handleTogglePurchased = (product) => {
    dispatch(togglePurchased(product.id, !product.is_purchased));
  };

  return (
    <div>
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
        min="1"
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {list.products.map((product) => (
          <li key={product.id}>
            <input
              type="checkbox"
              checked={product.is_purchased}
              onChange={() => handleTogglePurchased(product)}
            />
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
