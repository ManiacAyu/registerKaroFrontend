import React from "react";

const Page9 = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12">
      <section className="container px-4 mb-12">
        <div className="bg-[#1C4670] text-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-lg mb-6">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-100">
                Get it on App Store
              </button>
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-100">
                Get it on Google Play
              </button>
            </div>
          </div>
          <div className="bg-gray-300 h-64 w-64 rounded-lg flex items-center justify-center mt-8 md:mt-0">
            <span className="text-gray-600">App Image</span>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-3xl font-bold text-[#FFA229] text-center mb-8">
          WHY REGISTER KARO
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Some Numbers are important
        </p>
        <div className="ml-40 flex justify-evenly">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                  12
                  <sup className="text-lg bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                    +
                  </sup>
                </span>
              </h3>
              <p className="text-gray-600">YEARS OF EXCELLENCE</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                  41
                  <sup className="text-lg bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                    +
                  </sup>
                </span>
              </h3>
              <p className="text-gray-600">R&D ENGINEERS</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                  78
                  <sup className="text-lg bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                    +
                  </sup>
                </span>
              </h3>
              <p className="text-gray-600">COUNTRIES</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                  3287
                  <sup className="text-lg bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                    +
                  </sup>
                </span>
              </h3>
              <p className="text-gray-600">PARTNERS</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                  41
                  <sup className="text-lg bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                    +
                  </sup>
                </span>
              </h3>
              <p className="text-gray-600">AWARDS RECEIVED</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page9;
