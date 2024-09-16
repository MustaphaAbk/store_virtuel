export default function NavBar({ onCategoryChange }) {
    const categories = ["All", "pc", "camera", "drone"];
  
    return (
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4">
          {categories.map((category, i) => (
            <li key={i}>
              <button
                className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg"
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  