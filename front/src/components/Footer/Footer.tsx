import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Links */}
          <div className="flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-wordpress fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>

          {/* Branding */}
          <div className="text-sm font-semibold">Lovella</div>

          {/* Footer Info */}
          <p>© 2025 Lovella. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
