import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rebecca Torres",
    specialty: "Emergency Medicine",
    quote: "I found my current position through MedConnect in less than two weeks. The specialty-based matching is incredibly accurate, and every listing I saw was from a verified organization.",
    initials: "RT",
  },
  {
    name: "Dr. Michael Brennan",
    specialty: "Orthopedic Surgery",
    quote: "The community discussions are the best part. I get real, thoughtful advice from other physicians who understand the challenges of our profession. It is like having a trusted peer network on demand.",
    initials: "MB",
  },
  {
    name: "Dr. Priya Patel",
    specialty: "Pediatrics, Hospital Administration",
    quote: "As a department head, MedConnect has transformed how we recruit. The applicant pipeline is clean, communication is seamless, and we have filled three positions this quarter alone.",
    initials: "PP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Trusted by physicians nationwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-display font-bold text-accent text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
