import { motion } from "framer-motion";

const VisionGoalsSection = () => {
  return (
    <section id="vision" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-sm text-accent mb-3 tracking-wide uppercase">Vision & Goals</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            My <span className="italic font-normal">Vision</span> for the Future
          </h2>
          <div className="editorial-divider mb-8" />
          <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
            My vision is to create impactful digital solutions that solve real-world problems and empower users.
            I aim to build applications that are not only functional but also accessible, scalable, and user-friendly.
          </p>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            In the short term, I want to land a job as a full-stack developer where I can contribute to meaningful projects.
            Long-term, I aspire to lead development teams, mentor aspiring developers, and continue learning through building and sharing knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionGoalsSection;