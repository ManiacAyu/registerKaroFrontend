import React from "react";
import RegisterKaroLogo from "../assets/RegisterKaroLogo.jpg";

import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const Page9 = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <section className="container mb-12">
        <div className="bg-[#1C4670] text-white pr-8 pl-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-lg mb-6">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.
            </p>
            <div className="mb-2">Get the App</div>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-100">
                <AppleIcon className="-translate-y-0.5 text-green-500" />
                Get it on App Store
              </button>
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-100">
                <AndroidIcon className="-translate-y-0.5 text-green-500" />
                Get it on Google Play
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center min-h-screen mr-5 overflow-hidden">
              <div className="relative bg-black rounded-[40px] p-6 w-96 h-[400px] translate-y-55 shadow-2xl">
                <div className="relative bg-white rounded-[30px] w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl"></div>

                  <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-4">
                    <span className="text-black text-sm">9:41</span>
                    <div className="flex space-x-2">
                      <span className="text-black text-sm">&#x1F4F1;</span>{" "}
                      <span className="text-black text-sm">&#x1F4F6;</span>{" "}
                      <span className="text-black text-sm">&#x1F50B;</span>{" "}
                    </div>
                  </div>

                  <div className="flex justify-center items-center h-full">
                    <img src={RegisterKaroLogo} alt="Logo"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center min-h-screen overflow-hidden">
              <div className="relative bg-black rounded-[40px] p-6 w-96 h-[700px] shadow-2xl translate-y-15">
                <div className="relative bg-white rounded-[30px] w-full h-full overflow-hidden ">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl"></div>

                  <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-4">
                    <span className="text-black text-sm">9:41</span>
                    <div className="flex space-x-2">
                      <span className="text-black text-sm">&#x1F4F1;</span>{" "}
                      <span className="text-black text-sm">&#x1F4F6;</span>{" "}
                      <span className="text-black text-sm">&#x1F50B;</span>{" "}
                    </div>
                  </div>

                  <div className="flex justify-center items-center h-full">
                    <img src={RegisterKaroLogo} alt="Logo"></img>
                  </div>
                </div>
              </div>
            </div>
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
