
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Github, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ponnakrishnaveni76@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/krishnaveniponna-28ab93239",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/kponna",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-portfolio-black/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Contact Me</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Feel free to reach out to me for collaboration opportunities or if you have any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-card p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-portfolio-purple/20 mr-4">
                <MessageSquare className="h-6 w-6 text-portfolio-purple dark:text-portfolio-lightPurple" />
              </div>
              <h3 className="text-xl font-bold">Let's talk</h3>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Reach out through the form or connect with me directly on social media.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-black/20 dark:hover:bg-black/30 transition-all duration-300 group"
                >
                  <div className="mr-4 p-2 rounded-full bg-portfolio-purple/10 text-portfolio-purple dark:text-portfolio-lightPurple">
                    {link.icon}
                  </div>
                  <span className="font-medium group-hover:text-portfolio-purple dark:group-hover:text-portfolio-lightPurple transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-purple dark:focus:ring-portfolio-lightPurple"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-purple dark:focus:ring-portfolio-lightPurple"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-purple dark:focus:ring-portfolio-lightPurple"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-purple dark:focus:ring-portfolio-lightPurple resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
