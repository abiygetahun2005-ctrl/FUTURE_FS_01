import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";
import myPhoto2 from "@/assets/my photo2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={myPhoto2}
                  alt="Abiy Getahun Aragaw - Profile"
                  className="w-full h-auto object-cover filter grayscale-[0.2] contrast-[1.2] brightness-[0.9] saturate-[0.8] opacity-90"
                  style={{
                    filter: 'grayscale(20%) contrast(120%) brightness(90%) saturate(80%) opacity(90%)',
                    mixBlendMode: 'multiply'
                  }}
                />
                {/* Overlay for seamless background transition */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900 opacity-60" />
              </div>
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-200">
                Information Science Student & Technology Enthusiast
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a second-year Information Science student at Addis Ababa University with a deep interest in solving real-world problems using technology. My journey into technology started from curiosity — I have always been interested in understanding how systems work, how processes can be improved, and how technology can be used to make tasks faster, more accurate, and more efficient.
                </p>
                <p>
                  I chose to study Information Science because I enjoy designing systems, organizing information, and building tools that solve practical problems. I am especially interested in system development, database management, and full stack development, where both logic and creativity are required to build complete working solutions.
                </p>
                <p>
                  I enjoy building structured systems such as management systems, record tracking platforms, and database-driven applications. I am passionate about learning new technologies and continuously improving my problem-solving abilities. I believe that technology is not just about writing code, but about creating solutions that make people's work easier and improve productivity.
                </p>
                <p>
                  My long-term vision is to establish my own technology company that develops reliable, scalable, and impactful digital systems that solve real-world challenges. I am particularly motivated to build systems that improve efficiency in areas such as land management, taxation systems, data management, and organizational operations.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Key principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-400">Writing maintainable, scalable, and efficient code that stands the test of time.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Creative Design</h4>
              <p className="text-gray-400">Designing beautiful, intuitive interfaces that provide exceptional user experiences.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Performance</h4>
              <p className="text-gray-400">Optimizing applications for speed, reliability, and seamless user interactions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
