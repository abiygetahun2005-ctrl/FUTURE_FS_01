import { motion } from "framer-motion";
import { Download, Award, FileText } from "lucide-react";
import { Button } from "./ui/button";

const certificates = [
  {
    title: "ALX African Community Graduate",
    issuer: "ALX Africa",
    description: "Completed comprehensive software engineering program with focus on practical development skills.",
    fileName: "ALX_Certificate.pdf",
    icon: Award,
    color: "bg-blue-600"
  },
  {
    title: "Aspire Leadership Program Graduate",
    issuer: "Aspire Leadership",
    description: "Completed leadership development program focusing on personal and professional growth.",
    fileName: "Aspire_Leadership_Certificate.pdf",
    icon: Award,
    color: "bg-green-600"
  },
  {
    title: "HP LIFE Certificate in Networking",
    issuer: "HP LIFE",
    description: "Certified in networking fundamentals and HP technologies.",
    fileName: "HP_LIFE_Networking_Certificate.pdf",
    icon: FileText,
    color: "bg-red-600"
  },
  // Remove this entry if you do not have the certificate file yet.
  // {
  //   title: "5 Million Ethiopian Coders Program",
  //   issuer: "Ministry of Innovation and Technology",
  //   description: "Completed national coding initiative program for software development skills.",
  //   fileName: "Ethiopian_Coders_Certificate.pdf",
  //   icon: Award,
  //   color: "bg-purple-600",
  //   optional: true
  // }
];

const CertificatesSection = () => {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                    <Button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = `/${cert.fileName}`;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.click();
                      }}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      See Certificate
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;