import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import jobBoardMockup from "@/assets/job-board-mockup.jpg";

const FeatureJobDiscovery = () => {
  return (
    <section id="jobs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Job Discovery</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Find the right opportunity faster
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              MedConnect matches physicians with opportunities based on specialty, preferred location, and practice type. Every listing is verified and posted by accredited healthcare organizations. Filter by compensation, schedule flexibility, academic vs. private practice, and more to find positions that truly fit your career goals.
            </p>
            <Button variant="cta" size="lg">Browse Jobs</Button>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
              <img
                src={jobBoardMockup}
                alt="MedConnect job board with specialty and location filters"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureJobDiscovery;
