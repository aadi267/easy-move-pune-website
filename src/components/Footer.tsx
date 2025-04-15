
import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-greenLight py-10 border-t border-greenMedium/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-greenDark font-poppins font-bold text-xl">EASY 2 MOVE</h3>
              <span className="text-greenMedium font-nunito font-medium text-sm">PHYSIO CLINIC</span>
            </div>
            <p className="text-gray-700 mb-4 font-nunito">
              Professional physiotherapy care for sports injuries, chronic pain management, 
              and rehabilitation needs.
            </p>
            <div className="flex items-center gap-2 text-greenDark">
              <Instagram size={20} />
              <a 
                href="https://www.instagram.com/easy2move_physiotherapy_clinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-nunito hover:underline"
              >
                @easy2move_physiotherapy_clinic
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-4">Quick Links</h3>
            <ul className="font-nunito space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-greenDark transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-greenDark transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-greenDark transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-700 hover:text-greenDark transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-greenDark transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-4">Clinic Hours</h3>
            <div className="space-y-2 font-nunito text-gray-700">
              <div className="flex items-start gap-2">
                <Clock size={18} className="mt-1 text-greenDark" />
                <div>
                  <p className="font-medium">Monday - Saturday</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="mt-1 text-greenDark" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p>By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-greenMedium/20 mt-8 pt-6 text-center">
          <p className="text-gray-600 font-nunito text-sm">
            &copy; {new Date().getFullYear()} EASY 2 MOVE PHYSIO CLINIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
