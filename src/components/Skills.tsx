
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { skillCategories } from "./skills/skillData";
import SkillCard from "./skills/SkillCard";
import Certifications from "./skills/Certifications";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#121212]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <div className="w-20 h-1 bg-[#AF52DE] mx-auto rounded-full my-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
            I specialize in data science, machine learning, and web development with expertise in various tools and technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>

        <Certifications />
      </div>
    </section>
  );
};

export default Skills;
