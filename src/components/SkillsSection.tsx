import { motion } from "framer-motion";

const skills = [
  // Programming Languages
  { name: "C++", level: 75, color: "bg-blue-600", category: "Programming Languages" },
  { name: "Java", level: 80, color: "bg-red-500", category: "Programming Languages" },
  { name: "Python", level: 85, color: "bg-yellow-500", category: "Programming Languages" },
  { name: "JavaScript", level: 90, color: "bg-yellow-400", category: "Programming Languages" },

  // Web Development
  { name: "React", level: 85, color: "bg-blue-500", category: "Web Development" },
  { name: "CSS", level: 80, color: "bg-blue-700", category: "Web Development" },

  // Database and Data Tools
  { name: "SQL", level: 75, color: "bg-green-600", category: "Database & Data Tools" },
  { name: "Microsoft Excel", level: 85, color: "bg-green-500", category: "Database & Data Tools" },

  // Tools and Development Environment
  { name: "Git", level: 90, color: "bg-orange-500", category: "Tools & Development" },
  { name: "GitHub", level: 85, color: "bg-gray-700", category: "Tools & Development" },
  { name: "Visual Studio Code", level: 95, color: "bg-blue-400", category: "Tools & Development" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-lg font-bold text-gray-300">{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
