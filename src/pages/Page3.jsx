import React from 'react';
import Staff from '../assets/Staff.jpeg'
const Page3 = () => {
  return (
    <div className="min-h-screen flex  bg-gray-100 flex flex-col  py-12">
      
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          WELCOME TO REGISTERKARO.IN
        </h1>
        <p className="text-lg text-gray-600">
          About Register Karo
        </p>
      </section>

     
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            We have been using intelegencia as our DevOps vendor for our field service
            applications over the last couple of years and I'm extremely pleased with
            their performance, ability to execute, and willingness to adapt in our ever-changing
            environment.
          </p>
          <p className="text-gray-700 mb-4">
            Perry is an outstanding leader who is fanatical about
            customer satisfaction. He has built a solid team which has consistently delivered
            on projects thereby exceeding everyone's expectations.
          </p>
          <p className="text-gray-700">
            I would strongly recommend their services to any organization that is looking for
            solid, reliable, and predictable outcomes.
          </p>
        </div>
          </div>
          <div>
              <img src={Staff} alt = "Staff"></img>
          </div>
    </div>
  );
}

export default Page3;