
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", target: "#home" },
    { name: "About Me", target: "#about" },
    { name: "My Work", target: "#projects" },
    { name: "Skills", target: "#skills" },
    { name: "My Blogs", target: "#blog" },
    { name: "Contact Me", target: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/10 backdrop-blur-lg shadow-md dark:bg-black/50"
          : "py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-heading font-bold">
          Krishnaveni Ponna
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.target}
                className="text-sm font-medium hover:text-portfolio-purple dark:hover:text-portfolio-lightPurple transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 rounded-md hover:bg-portfolio-purple/10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/10 backdrop-blur-xl dark:bg-black/50 shadow-lg py-4 md:hidden animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.target}
                  className="py-2 px-4 hover:bg-portfolio-purple/10 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
