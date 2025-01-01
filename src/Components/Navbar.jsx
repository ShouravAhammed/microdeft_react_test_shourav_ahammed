import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16 p-4">
        {/* Logo Section (Optional) */}
        <div className="text-2xl font-semibold text-[#D3373C]">
          <NavLink to="/">Microdeft React Test</NavLink>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-base font-medium">
          <li>
            <NavLink
              to="/"
              className="px-4 py-2 text-[#444444] hover:text-[#D3373C] transition-all duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCourses"
              className="px-4 py-2 text-[#444444] hover:text-[#D3373C] transition-all duration-300"
            >
              Add Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allCourses"
              className="px-4 py-2 text-[#444444] hover:text-[#D3373C] transition-all duration-300"
            >
              All Courses
            </NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavLink to="/login">
            <button className="px-6 py-2 rounded-md bg-[#D3373C] text-white font-semibold hover:bg-[#B92A2A] transition-all duration-300">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="px-6 py-2 rounded-md bg-transparent border-2 border-[#D3373C] text-[#D3373C] font-semibold hover:bg-[#D3373C] hover:text-white transition-all duration-300">
              Register
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-4 text-[#D3373C]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
