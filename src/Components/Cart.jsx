export default function Cart({ cartItems }) {
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price;
      }, 0);
    };
  
    return (
      <div 
        className="fixed top-20 right-4 w-80 p-4 bg-white border border-gray-300 shadow-lg rounded-lg"
        style={{ zIndex: 1000 }}
      >
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                  {item.title} - {item.price}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">${calculateTotalPrice().toFixed(2)}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >BUY NOW</button>
          </>
        )}
      </div>
    );
  }
  