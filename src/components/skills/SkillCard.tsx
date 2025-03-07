
import { motion } from "framer-motion";
import { SkillCategory } from "./types";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-[#1A1A1A] rounded-xl p-6 shadow-lg overflow-hidden border border-[#AF52DE]/20 h-full"
    >
      {/* Card Title */}
      <div className="flex items-center mb-6">
        <span className="text-[#AF52DE] dark:text-[#AF52DE] mr-2">
          {category.icon}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4">
        {category.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center"
            variants={skillVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-white dark:bg-[#262626] flex items-center justify-center mb-2 border border-[#AF52DE]/20">
              <div className="text-[#AF52DE] dark:text-[#AF52DE]">
                {skill.icon}
              </div>
            </div>
            <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
