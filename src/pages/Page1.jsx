import React from "react";
import Oracle from "../assets/Oracle.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Page1 = () => {
  return (
    <>
      <div className="bg-[#1C4670]">
        <div className="flex justify-end mr-5 text-white p-2">
          <div className="flex justify-between mr-5">
            <EmailIcon />
            <p>www.registerkaro.in</p>
          </div>
          <div className="flex justify-between mr-5">
            <LocalPhoneIcon />
            <p>+918447746183</p>
          </div>
          <div className="flex justify-evenly">
            <InstagramIcon className="mr-2" />
            <FacebookIcon className="mr-2" />
            <TwitterIcon className="mr-2" />
            <PinterestIcon className="mr-2" />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-50 p-5 flex mr-auto items-center">
          
        </header>
        <header className="bg-gray-50 p-5 flex ml-auto items-center">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-black hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-black hover:text-blue-500">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-black hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#about" className="text-black hover:text-blue-500">
                  About us
                </a>
              </li>
            </ul>
          </nav>
          <button className="bg-blue-500 text-white ml-4 px-6 py-2 rounded-md hover:bg-blue-600">
            Talk An Expert
          </button>
        </header>

        <section className="bg-gray-100 flex-grow flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various registrations, tax filings, and other
            legal needs.
          </p>
          <div className="flex space-x-8 mb-8">
            <span className="text-gray-700">4.5+ Customer Rating</span>
            <span className="text-gray-700">20,000+ Clients</span>
            <span className="text-gray-700">99.8% Financial Stability</span>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Talk An Expert
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
              See how it works
            </button>
          </div>
        </section>

        <footer className="bg-gray-50 p-5 text-center shadow-sm">
          <p className="text-gray-700">Google Rating</p>
        </footer>
      </div>
      <div className="min-h-screen flex flex-col">
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Trusted By Over 100+ Startups and Freelance Businesses
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
              <img src={Oracle} alt="Oracle" className="w-full h-auto" />
              <img
                src="https://via.placeholder.com/150x50?text=MORPHEUS"
                alt="Morpheus"
                className="w-full h-auto"
              />
              <img
                src="https://via.placeholder.com/150x50?text=MORPHEUS"
                alt="Morpheus"
                className="w-full h-auto"
              />
              <img
                src="https://via.placeholder.com/150x50?text=SAMSUNG"
                alt="Samsung"
                className="w-full h-auto"
              />
              <img
                src="https://via.placeholder.com/150x50?text=monday.com"
                alt="monday.com"
                className="w-full h-auto"
              />
              <img
                src="https://via.placeholder.com/150x50?text=segment"
                alt="segment"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page1;
