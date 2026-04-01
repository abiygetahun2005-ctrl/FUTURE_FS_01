import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt: "A deep dive into patterns and practices for building production-ready APIs that scale gracefully.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
  },
  {
    title: "The Art of Component Architecture in React",
    excerpt: "How to design reusable, maintainable component systems that grow with your application.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
  },
  {
    title: "Modern CSS: Beyond Tailwind Utility Classes",
    excerpt: "Exploring advanced CSS techniques and when to complement utility-first approaches.",
    date: "Feb 10, 2026",
    readTime: "5 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-accent mb-3 tracking-wide uppercase">Blog</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Latest <span className="italic font-normal">Articles</span>
          </h2>
          <div className="editorial-divider" />
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group py-8 first:pt-0 last:pb-0 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-accent">{post.date}</span>
                    <span className="text-xs font-mono text-muted-foreground">·</span>
                    <span className="text-xs font-mono text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground">{post.excerpt}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
