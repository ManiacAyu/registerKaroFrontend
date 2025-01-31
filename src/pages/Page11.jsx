import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
const Page11 = () => {
  return (
    <div className="min-h-[70%] bg-[#011B5B]">
      <div className="flex">
        <section className="max-w-[25%] text-white p-8 text-center">
          <p className="text-[#8A98B8] hover:text-blue-500">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex justify-center items-center">
            <FacebookIcon className="m-2" />
            <GoogleIcon className="m-2" />
            <AppleIcon className="m-2" />
            <InstagramIcon className="m-2" />
          </div>
        </section>

        <nav className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#FFA229] mb-4">
                  START A BUSINESS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Solutions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#FFA229] mb-4">
                  GOVERNMENT REGISTRATION
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#FFA229] mb-4">
                  COMPLIANCE & TAX
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Channels
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Scale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Watch the Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Our Competition
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#FFA229] mb-4">
                  BIS & CDSCO
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#8A98B8] hover:text-blue-500">
                      Media Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <footer className="text-white py-6 text-center">
        <p className="text-sm">© 2024 Registerkaro. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Page11;
