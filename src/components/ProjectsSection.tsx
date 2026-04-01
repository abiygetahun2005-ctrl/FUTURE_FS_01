import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "National Land Registry System (NCRPRS) — Resilient Public Portal",
    description: "An enterprise-grade public portal framework designed to digitize and streamline land administration workflows within the National Cadaster framework. The project specifically targets operational continuity in low-bandwidth, high-disruption environments. Features Edge-Sync architecture for local operations, asynchronous synchronization, and streamlined verification processes.",
    tags: ["GovTech", "Edge Computing", "Asynchronous Sync", "Plus Codes", "Telebirr API"],
    image: null,
    github: "#",
    live: "#",
    color: "hsl(24 70% 50% / 0.1)",
  },
  {
    title: "Ersha Agricultural Ecosystem",
    description: "A multichannel B2B and B2C agricultural commerce system designed to create direct, transparent supply chains between rural smallholder farmers and urban buyers. Features dual-interface ecosystem with web portal for buyers and USSD gateway for farmers, enabling broker-free trading through accessible communication channels.",
    tags: ["AgriTech", "USSD Gateway", "SMS Automation", "Multichannel Database", "Inclusive Commerce"],
    image: null,
    github: "#",
    live: "#",
    color: "hsl(142 70% 50% / 0.1)",
  },
  {
    title: "Aspire x Cayu Global AI Hackathon Project",
    description: "A collaborative, AI-powered application built entirely from concept to deployment during a continuous 24-hour global virtual hackathon. Features asynchronous workflow across distributed teams, API-driven integration with microservices architecture, and Generative AI API integrations for complex user data handling.",
    tags: ["AI Integration", "Rapid Development", "Microservices", "Git Collaboration", "Agile Sprint"],
    image: null,
    github: "#",
    live: "#",
    color: "hsl(217 70% 50% / 0.1)",
  },
];

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div
                className="h-48 flex items-center justify-center overflow-hidden relative"
                style={{ background: project.color }}
              >
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <span className="font-heading text-2xl font-semibold text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-mono rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
