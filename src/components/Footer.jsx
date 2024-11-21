import React from "react";
import pic from "../assets/images/pic 19.png"

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-white py-8" id="contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
        {/* Logo and description */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={pic} 
              alt="CoordiMeet Logo"
              className="w-24 h-24"
            />
          </div>
          <p className="text-sm">
            Seamlessly connect and coordinate with friends, family, and teams.
            Your go-to platform for smart and safe meetups.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {/* Replace # with actual social media links */}
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Features */}
        <div>
          <h6 className="font-semibold mb-4">FEATURES</h6>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Real-time location sharing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                ETA & traffic updates
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Proximity alerts
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Panic button
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h6 className="font-semibold mb-4">RESOURCES</h6>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-semibold mb-4">CONTACT</h6>
          <ul>
            <li className="mb-2">123 Dansoman Street, Accra, Ghana</li>
            <li className="mb-2">+233 540502328</li>
            <li>
              <a
                href="mailto:support@trackmeet.com"
                className="hover:underline"
              >
                support@trackmeet.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-t border-blue-400 pt-4">
        &copy; 2024 TrackMeet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
