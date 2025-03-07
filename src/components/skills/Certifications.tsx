
import { motion } from "framer-motion";

const Certifications = () => {
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          {
            title: "Data Science Professional Certificate",
            organization: "IBM",
            date: "Dec 2022",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
          },
          {
            title: "Machine Learning Specialization",
            organization: "Stanford University (Coursera)",
            date: "Aug 2022",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png",
          },
          {
            title: "Data Analyst Nanodegree",
            organization: "Udacity",
            date: "May 2021",
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png",
          },
          {
            title: "Frontend Web Developer",
            organization: "freeCodeCamp",
            date: "Jan 2021",
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
          },
        ].map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-4 rounded-lg flex items-start space-x-3 hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(123, 82, 171, 0.2)"
            }}
          >
            <div className="h-10 w-10 flex-shrink-0 rounded-full overflow-hidden bg-white">
              <img
                src={cert.logo}
                alt={cert.organization}
                className="h-full w-full object-contain p-1"
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="font-medium text-sm">{cert.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {cert.organization}
              </p>
              <p className="text-xs text-[#AF52DE] dark:text-[#5A29F8] mt-1">
                {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
