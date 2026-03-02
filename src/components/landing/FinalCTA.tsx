import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-5 leading-tight">
            Join the future of medical collaboration
          </h2>
          <p className="text-primary-foreground/65 text-lg mb-10 leading-relaxed">
            Whether you are a physician looking for your next opportunity or an organization building a world-class team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">Create Account</Button>
            <Button variant="hero-outline" size="xl">Register Organization</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
