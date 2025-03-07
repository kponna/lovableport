
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-portfolio-black text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Krishnaveni Ponna</h3>
            <p className="text-gray-400 text-sm">
              Building elegant solutions for complex problems
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/kponna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/krishnaveniponna-28ab93239"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ponnakrishnaveni76@gmail.com"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {currentYear} Krishnaveni Ponna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
