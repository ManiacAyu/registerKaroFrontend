import React from "react";

const Page2 = () =>  {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          WELCOME TO REGISTER&ROLIN
        </h1>
        <p className="text-lg text-gray-600">Explore Our Services</p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Company Formation
            </h2>
            <p className="text-gray-600 mb-4">
              Build web-based solutions that enhance customer experience.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Learn more
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Company Secretarial Services
            </h2>
            <p className="text-gray-600 mb-4">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Learn more
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Virtual Office Address
            </h2>
            <p className="text-gray-600 mb-4">
              Foster customer relationships by effectively serving your market.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Learn more
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Annual Compliance Services
            </h2>
            <p className="text-gray-600 mb-4">
              Turn your ideas into modern products with our design experts.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Learn more
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Payroll Services
            </h2>
            <p className="text-gray-600 mb-4">
              Expand your business across the globe with minimal effort.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Learn more
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Bookkeeping Services
            </h2>
            <p className="text-gray-600 mb-4">
              Steering user behaviors with creative design, data insights &
              technology.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Learn more
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
