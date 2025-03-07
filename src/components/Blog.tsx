
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Data Visualization Best Practices for 2023",
      excerpt: "Learn the most effective techniques for visualizing complex datasets and making your data tell compelling stories.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      date: "Oct 15, 2023",
      platform: "Medium",
      link: "#",
    },
    {
      id: 2,
      title: "The Future of Data Analysis: AI and Machine Learning",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing the field of data analysis.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2965&auto=format&fit=crop",
      date: "Sep 18, 2023",
      platform: "DEV Community",
      link: "#",
    },
    {
      id: 3,
      title: "Building Interactive Dashboards with React and D3",
      excerpt: "A step-by-step guide to creating stunning and responsive data dashboards using React.js and D3.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      date: "Aug 22, 2023",
      platform: "Hashnode",
      link: "#",
    },
    {
      id: 4,
      title: "Data Privacy and Ethics in the Digital Age",
      excerpt: "Discussing the importance of data privacy and ethical considerations in modern data analysis practices.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop",
      date: "Jul 10, 2023",
      platform: "Medium",
      link: "#",
    },
  ];

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
    <section id="blog" className="py-20 bg-white dark:bg-[#121212]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Blogs</h2>
          <div className="w-20 h-1 bg-[#AF52DE] mx-auto rounded-full my-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            I share my thoughts and experiences in data science, visualization, and web development through my blog posts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="card-hover glass-card overflow-hidden rounded-xl h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-portfolio-purple dark:text-portfolio-lightPurple">
                    {post.date}
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {post.platform}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-portfolio-purple hover:text-portfolio-lightPurple dark:text-portfolio-lightPurple dark:hover:text-white group mt-2"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
