import React from 'react';

const Page7 = () =>{
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fill up Application Form</h3>
            <p className="text-gray-600">Provide necessary details in the application form.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Make Online Payment</h3>
            <p className="text-gray-600">Complete the payment process securely online.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Executive will Process Application</h3>
            <p className="text-gray-600">Our executive will handle your application.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get Confirm Mail</h3>
            <p className="text-gray-600">Receive confirmation mail once processed.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          EXPLORE OUR BLOGS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Accelerate Digital Transformation</h3>
            <p className="text-gray-600 mb-4">Prabhash Mishra 1 Jan 2023</p>
            <p className="text-gray-600">
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Small business & Startup</h3>
            <p className="text-gray-600 mb-4">Mahesh Kumar 1 Jan 2023</p>
            <p className="text-gray-600">
              Mental models are simple expressions of complex processes or relationships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Growing Business Package</h3>
            <p className="text-gray-600 mb-4">Rakhi Verma 1 Jan 2023</p>
            <p className="text-gray-600">
              Introduction to Wireframing and its Principles. Learn how to scale your business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page7;