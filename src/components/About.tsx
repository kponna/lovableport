
import { motion } from "framer-motion";
import WorkTimeline from "./WorkTimeline";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#121212]/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-[#AF52DE] mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Professional Journey</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                My journey into the world of data science and machine learning began with a deep fascination for patterns and problem-solving. As a Machine Learning Engineer and Data Scientist, I've dedicated myself to unraveling complex data patterns and crafting intelligent solutions that bridge the gap between raw information and actionable insights.
              </p>
              <p>
                With expertise in data visualization, analysis, and predictive modeling, I specialize in transforming complex datasets into meaningful narratives that drive business decisions. My approach combines technical prowess with creative thinking, ensuring that every project not only meets but exceeds expectations.
              </p>
              <p>
                I'm passionate about continuous learning and staying at the forefront of technological advancements in AI and machine learning. This drive for excellence has allowed me to develop solutions that are not just technically sound but also intuitive and user-friendly.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl bg-white/10 backdrop-blur-lg dark:bg-black/20 border border-white/20 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <WorkTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
