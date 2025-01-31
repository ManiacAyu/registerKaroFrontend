import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Video Introductions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Explore ideas together
            </h2>
            <p className="text-gray-600 mb-4">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Bring those ideas to life
            </h2>
            <p className="text-gray-600 mb-4">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
            <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Video Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
