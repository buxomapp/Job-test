import React from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList'; // Assuming ShoppingList is created in this directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <main>
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
