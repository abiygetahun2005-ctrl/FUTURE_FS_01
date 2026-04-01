import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Abiy delivered an outstanding full-stack application that exceeded our performance expectations. His expertise in React and Node.js was instrumental in our project's success.",
    name: "Michael Johnson",
    role: "Project Manager, DevCorp",
  },
  {
    quote: "Working with Abiy was exceptional. He transformed our complex requirements into a clean, scalable solution. His problem-solving skills and code quality are top-notch.",
    name: "Lisa Wang",
    role: "Lead Developer, StartupXYZ",
  },
  {
    quote: "Abiy's attention to detail and commitment to writing maintainable code made him an invaluable asset to our development team. Highly recommended for any full-stack project.",
    name: "David Brown",
    role: "CTO, TechSolutions",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-accent mb-3 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What People <span className="italic font-normal">Say</span>
          </h2>
          <div className="editorial-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] relative"
            >
              <Quote size={24} className="text-accent/30 mb-4" />
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs font-body text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
