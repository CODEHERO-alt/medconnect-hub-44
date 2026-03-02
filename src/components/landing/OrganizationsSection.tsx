import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import recruiterDashboard from "@/assets/recruiter-dashboard.jpg";

const OrganizationsSection = () => {
  return (
    <section id="organizations" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">For Organizations</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Built for healthcare organizations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Post jobs, search verified professionals, manage applicants, and message candidates securely. MedConnect gives your hiring team the tools to find and connect with the right physicians, faster than traditional recruiting channels.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg">Register Organization</Button>
              <Button variant="cta-outline" size="lg">View recruiting tools</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
              <img
                src={recruiterDashboard}
                alt="Recruiter dashboard showing job posts, applicant pipeline, and outreach messaging"
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

export default OrganizationsSection;
