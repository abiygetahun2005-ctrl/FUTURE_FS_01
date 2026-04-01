import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Users } from "lucide-react";

const experiences = [
  {
    title: "Private Tutor",
    duration: "3 Years",
    description: "Provided academic tutoring support to students in various subjects. Developed strong communication skills and the ability to explain complex concepts clearly. Helped students improve academic performance through structured learning support.",
    icon: Users,
    color: "bg-blue-600"
  },
  {
    title: "Class President",
    duration: "High School",
    description: "Served as a student leader responsible for representing students, organizing activities, and supporting communication between students and school administration.",
    icon: Briefcase,
    color: "bg-green-600"
  },
  {
    title: "Founder — Art Club",
    duration: "High School",
    description: "Founded and led an art club that encouraged creativity and participation in student activities. Organized art sessions and supported student engagement.",
    icon: Award,
    color: "bg-purple-600"
  },
  {
    title: "Volunteer Trainer — Local Hospital",
    duration: "Community Service",
    description: "Provided training support to individuals and assisted in delivering structured learning sessions in a community-focused environment.",
    icon: Users,
    color: "bg-orange-600"
  },
  {
    title: "Full Stack Developer Intern",
    duration: "Upcoming — Future Interns",
    description: "Preparing to participate in full stack development internship to strengthen professional development skills.",
    icon: Briefcase,
    color: "bg-red-600"
  }
];

const education = [
  {
    degree: "Bachelor of Science in Information Science",
    institution: "Addis Ababa University",
    status: "Second-Year Student",
    icon: GraduationCap,
    color: "bg-indigo-600"
  }
];

const certifications = [
  "ALX African Community Graduate",
  "Aspire Leadership Program Graduate",
  "HP LIFE Certificate in Networking",
  "5 Million Ethiopian Coders Program"
];

const achievements = [
  "Scored 543/600 in Ethiopian National Examination",
  "Winner of YeBen Endowment Fund Scholarship"
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black rounded-lg p-6 border border-gray-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                        <span className="text-sm text-gray-400 mt-1 sm:mt-0">{exp.duration}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black rounded-lg p-6 border border-gray-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${edu.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <edu.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.status}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black rounded-lg p-4 border border-gray-800"
                  >
                    <p className="text-gray-300">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black rounded-lg p-4 border border-gray-800"
                  >
                    <p className="text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;