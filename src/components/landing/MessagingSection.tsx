import { motion } from "framer-motion";
import messagingMockup from "@/assets/messaging-mockup.jpg";

const MessagingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Messaging</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 max-w-2xl mx-auto">
            Communicate securely and efficiently
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
            Send and receive messages with verified physicians and organizations. Built with privacy and professional collaboration in mind, every conversation stays confidential and compliant.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
            <img
              src={messagingMockup}
              alt="Secure messaging interface with verified physician badges"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessagingSection;
