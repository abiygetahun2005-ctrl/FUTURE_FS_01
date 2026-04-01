import { motion } from "framer-motion";
import { Smartphone, Palette, Code, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.",
    color: "bg-blue-600"
  },
  {
    icon: Code,
    title: "Backend Development",
    description: "Building robust and scalable server-side applications with Node.js, Express, and database integration.",
    color: "bg-green-600"
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    color: "bg-purple-600"
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Designing and implementing RESTful APIs and GraphQL services for seamless data communication.",
    color: "bg-orange-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;