import React from "react";
import Coinbase from "../assets/coinbase.png";
import Dropbox from "../assets/dropbox.png";
import Spotify from "../assets/Spotify-Logo.png";
import Slack from "../assets/Slack.png";
import Webflow from "../assets/webflow.png";
import Zoom from "../assets/zoom.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Page10 = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12">
      <section className="container mx-auto px-4 text-center bg-gradient-to-r from-[#FFA229] to-[#1C4670] py-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          1% OF THE INDUSTRY
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Welcome to your new digital reality. Now.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-[#FFA229] text-white px-6 py-3 rounded-r-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 bg-gradient-to-r from-[#FFA229] to-[#1C4670] py-12">
        <div className="flex justify-evenly items-center">
          <div className="flex items-center">
            <CheckCircleIcon className="text-white mr-2" />
            <span className="text-xl font-bold text-white">
              Instant results
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="text-white mr-2" />
            <span className="text-xl font-bold text-white">
              User-friendly interface
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="text-white mr-2" />
            <span className="text-xl font-bold text-white">
              Personalized customization
            </span>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="bg-white h-24 rounded-lg flex items-center justify-center">
            <img
              src={Coinbase}
              alt="Coinbase"
              className="mix-blend-mode-multiply"
            />
          </div>
          <div className="bg-white h-24 rounded-lg flex items-center justify-center">
            <img
              src={Spotify}
              alt="Spotify"
              className="mix-blend-mode-multiply"
            />
          </div>
          <div className="bg-white h-24 rounded-lg flex items-center justify-center">
            <img src={Slack} alt="Slack" className="mix-blend-mode-multiply" />
          </div>
          <div className="bg-white h-24 rounded-lg flex items-center justify-center">
            <img
              src={Dropbox}
              alt="Dropbox"
              className="mix-blend-mode-multiply"
            />
          </div>
          <div className="bg-white h-24 rounded-lg flex items-center justify-center">
            <img
              src={Webflow}
              alt="Webflow"
              className="mix-blend-mode-multiply"
            />
          </div>
          <div className="bg-white h-24 rounded-lg flex items-center justify-center">
            <img src={Zoom} alt="Zoom" className="mix-blend-mode-multiply" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page10;
