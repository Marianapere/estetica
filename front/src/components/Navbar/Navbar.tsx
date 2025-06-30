const Navbar = () => {
  return (
    // <nav className="w-full bg-white shadow-sm">
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold font-gilda">Lovella</div>

          {/* Navigation para pantallas medianas y grandes */}
          <div className="hidden md:flex gap-8">
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Home
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
              About
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
              News
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Shop
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Demos
            </button>
          </div>

          {/* Botón de menú para móviles */}
          <div className="md:hidden">
            <button className="p-2 text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
