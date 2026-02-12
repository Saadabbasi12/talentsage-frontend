import { Link } from "react-router-dom";
import { FiLayers, FiBarChart2, FiMail } from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black shadow-sm z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        
        {/* Logo */}
        <h1 className="text-xl font-extrabold text-white tracking-wide">
          TalentSage
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#features"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition"
            >
              <FiLayers className="text-lg" />
              Features
            </a>

            <a
              href="#metrics"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition"
            >
              <FiBarChart2 className="text-lg" />
              Impact
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition"
            >
              <FiMail className="text-lg" />
              Contact
            </a>
          </nav>

          {/* Recruiter Login */}
          <Link
            to="/recruiter/jobs"
            className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Recruiter Login
          </Link>
        </div>
      </div>
    </header>
  );
}