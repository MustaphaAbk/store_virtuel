import { useState } from 'react';
import './App.css';
import NavBar from './Components/navBar';
import Card from './Components/Card';
import Cart from './Components/Cart';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <NavBar onCategoryChange={handleCategoryChange} />
      <button 
        className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600"
        onClick={toggleCartVisibility}
      >
        {isCartVisible ? 'Hide Cart' : 'Show Cart'}
      </button>
      
      {isCartVisible && <Cart cartItems={cart} />}
      <Card selectedCategory={selectedCategory} addToCart={addToCart} />
    </>
  );
}

export default App;
