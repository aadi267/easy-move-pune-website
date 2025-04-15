
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-greenDark font-poppins font-bold text-xl md:text-2xl">
            EASY 2 MOVE
          </span>
          <span className="text-greenMedium font-nunito font-medium text-sm md:text-base">
            PHYSIO CLINIC
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-greenDark" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-800 font-nunito font-medium hover:text-greenDark transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 font-nunito font-medium hover:text-greenDark transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-gray-800 font-nunito font-medium hover:text-greenDark transition-colors">
            Services
          </Link>
          <Link to="/reviews" className="text-gray-800 font-nunito font-medium hover:text-greenDark transition-colors">
            Reviews
          </Link>
          <Link to="/contact" className="text-gray-800 font-nunito font-medium hover:text-greenDark transition-colors">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 flex flex-col">
            <Link 
              to="/" 
              className="py-3 text-gray-800 font-nunito font-medium hover:text-greenDark border-b border-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-3 text-gray-800 font-nunito font-medium hover:text-greenDark border-b border-gray-100"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="py-3 text-gray-800 font-nunito font-medium hover:text-greenDark border-b border-gray-100"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/reviews" 
              className="py-3 text-gray-800 font-nunito font-medium hover:text-greenDark border-b border-gray-100"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className="py-3 text-gray-800 font-nunito font-medium hover:text-greenDark"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
