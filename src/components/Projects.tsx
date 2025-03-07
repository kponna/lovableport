
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const categories = ["All", "Data Visualization", "Web Development", "Data Analysis"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with multiple filter options and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Data Visualization",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 2,
      title: "E-commerce Analytics Platform",
      description: "A comprehensive platform for analyzing e-commerce data, providing insights into customer behavior and sales trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Data Analysis",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website Generator",
      description: "A tool that allows users to create personalized portfolio websites with customizable templates and themes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Web Development",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 4,
      title: "Healthcare Data Visualization Tool",
      description: "Visualization tool for healthcare data, helping medical professionals analyze patient information and treatment outcomes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Data Visualization",
      demoLink: "#",
      sourceLink: "#",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section id="projects" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">My Work</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Explore my latest projects showcasing my skills in data visualization, 
            web development, and data analysis.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-portfolio-purple text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card-hover glass-card overflow-hidden rounded-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-portfolio-purple/80 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-portfolio-purple hover:text-portfolio-lightPurple dark:text-portfolio-lightPurple dark:hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-portfolio-purple hover:text-portfolio-lightPurple dark:text-portfolio-lightPurple dark:hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
