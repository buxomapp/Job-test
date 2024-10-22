import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLists, addList } from '../redux/actions/shoppingListActions';
import ProductList from './ProductList';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingLists = useSelector((state) => state.shoppingList.lists);
  const [newList, setNewList] = useState('');

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  const handleAddList = () => {
    if (newList.trim()) {
      dispatch(addList(newList));
      setNewList('');
    }
  };

  return (
    <div>
      <h1>Shopping Lists</h1>
      <input
        type="text"
        value={newList}
        onChange={(e) => setNewList(e.target.value)}
        placeholder="New List Name"
      />
      <button onClick={handleAddList}>Add List</button>
      <ul>
        {shoppingLists.map((list) => (
          <li key={list.id}>
            <h2>{list.name}</h2>
            <ProductList list={list} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
