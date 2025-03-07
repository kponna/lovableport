
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-portfolio-black text-gray-900 dark:text-white p-4">
      <div className="glass-card p-10 rounded-xl max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-portfolio-purple/20 mb-6">
            <span className="text-4xl font-bold text-portfolio-purple dark:text-portfolio-lightPurple">404</span>
          </div>
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
