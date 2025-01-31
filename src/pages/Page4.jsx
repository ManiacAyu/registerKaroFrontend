import React from 'react';

const Page4 =() =>{
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          WHY REGISTERKARO.IN
        </h1>
        <p className="text-lg text-gray-600">
          Why Choose Register Karo
        </p>
      </section>

      <div className="container mx-auto px-4 max-w-2xl text-center mb-12">
        <p className="text-gray-700">
          It is with consistent services and results that build trust with the people and that in
          turn help us to serve the business better.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Confidential & Safe</h2>
            <p className="text-gray-600">
              All your private information is safe with us.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">No Hidden Fee</h2>
            <p className="text-gray-600">
              Everything is put before you with no hidden charges or conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Guaranteed Satisfaction</h2>
            <p className="text-gray-600">
              We ensure that you stay 100% satisfied with our offered services.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Expert CA/CS Assistance</h2>
            <p className="text-gray-600">
              Prompt support from our in-house expert professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;