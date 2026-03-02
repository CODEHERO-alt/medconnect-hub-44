import { motion } from "framer-motion";
import ecosystemDashboard from "@/assets/ecosystem-dashboard.jpg";

const EcosystemOverview = () => {
  return (
    <section className="py-24 bg-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Ecosystem</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 max-w-2xl mx-auto">
            Everything you need, connected
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
            Jobs, messaging, community, news, events, and marketplace all integrated in one seamless platform experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={ecosystemDashboard}
              alt="MedConnect unified dashboard showing all platform modules connected"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemOverview;
