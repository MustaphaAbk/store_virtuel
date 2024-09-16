export default function Card({ selectedCategory, addToCart }) {
    const items = [
        // Camera items
        { title: "Camera 1", description: "High-quality digital camera.", price: "$500", category: "camera", image: "camera1" },
        { title: "Camera 2", description: "Compact camera for travel.", price: "$300", category: "camera", image: "camera2" },
        { title: "Camera 3", description: "Mirrorless camera with 4K.", price: "$900", category: "camera", image: "camera3" },
        { title: "Camera 4", description: "Waterproof action camera.", price: "$250", category: "camera", image: "camera4" },
        { title: "Camera 5", description: "Professional DSLR camera.", price: "$1200", category: "camera", image: "camera5" },
        
        // PC items
        { title: "PC 1", description: "High-end gaming PC with RTX GPU.", price: "$2000", category: "pc", image: "pc1" },
        { title: "PC 2", description: "Office desktop PC with i5 processor.", price: "$800", category: "pc", image: "pc2" },
        { title: "PC 3", description: "All-in-one PC with touchscreen.", price: "$1200", category: "pc", image: "pc3" },
        { title: "PC 4", description: "Mini PC for space-saving setups.", price: "$400", category: "pc", image: "pc4" },
        { title: "PC 5", description: "PC tower for enthusiasts and overclockers.", price: "$1500", category: "pc", image: "pc5" },
        
        // Drone items
        { title: "Drone 1", description: "Quadcopter drone with HD camera.", price: "$1000", category: "drone", image: "drone1" },
        { title: "Drone 2", description: "Foldable drone with GPS navigation.", price: "$700", category: "drone", image: "drone2" },
        { title: "Drone 3", description: "Racing drone for high-speed flights.", price: "$600", category: "drone", image: "drone3" },
        { title: "Drone 4", description: "Drone with thermal imaging for inspections.", price: "$2500", category: "drone", image: "drone4" },
        { title: "Drone 5", description: "Drone with 4K camera for aerial shots.", price: "$1200", category: "drone", image: "drone5" }
      ];
  
    const source = "https://placehold.co/600x400?text=";
  
    const filteredItems = selectedCategory === 'All'
      ? items
      : items.filter(item => item.category === selectedCategory);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredItems.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={source + item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-800">{item.price}</span>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  