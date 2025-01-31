import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Happy Clients
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Client 1</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Client 2</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Client 3</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Client 4</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Client 5</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Client 6</span>
          </div>
        </div>

       
        <div className="text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
