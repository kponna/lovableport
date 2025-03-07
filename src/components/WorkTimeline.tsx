
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const WorkTimeline = () => {
  const timelineData = [
    {
      company: "Antern",
      position: "Machine Learning Engineer",
      period: "February 2024 - Present",
      duration: "1 year 2 months",
      responsibilities: [
        "Building end-to-end ML pipelines with ZenML and MLflow",
        "Achieved 92% recall using Random Forest, XGBoost, and LightGBM",
        "Focusing on MLOps, hyperparameter optimization, and scalable deployments"
      ]
    },
    {
      company: "Cognizant",
      position: "Senior Process Executive",
      period: "January 2023 - Present",
      duration: "2 years 3 months",
      responsibilities: [
        "Leading a team to streamline business processes",
        "Implementing data-driven strategies to improve efficiency"
      ]
    },
    {
      company: "Cognizant",
      position: "Process Executive",
      period: "September 2021 - January 2023",
      duration: "1 year 5 months",
      responsibilities: [
        "Provided end-to-end process support and quality checks",
        "Collaborated with cross-functional teams to optimize workflows"
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-3 top-2 bottom-0 w-0.5 bg-gradient-to-b from-[#AF52DE] to-[#5856D6]"
      />

      {/* Timeline items */}
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex gap-4"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-[#AF52DE] to-[#5856D6] flex items-center justify-center"
            >
              <Briefcase className="w-3.5 h-3.5 text-white" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="pb-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h4 className="text-base font-semibold text-[#AF52DE] dark:text-[#AF52DE]">
                  {item.position} at {item.company}
                </h4>
                <span className="text-xs text-gray-500 dark:text-gray-400 sm:ml-2">
                  {item.period}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {item.duration}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {item.responsibilities.map((responsibility, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + i * 0.1 }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
