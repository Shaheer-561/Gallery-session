import React from "react";
import Slider from './components/slider';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-8 mb-8"> {/* Flex container for h1 and h2 */}
        <h1 className="heading">Gallery</h1> {/* Heading with gradient */}
        <h2 className="slider-heading">BUDS</h2> {/* Slider heading with gradient border */}
      </div>
      <Slider />
      <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
        View Gallery
      </button>
    </div>
  );
}

export default App;
