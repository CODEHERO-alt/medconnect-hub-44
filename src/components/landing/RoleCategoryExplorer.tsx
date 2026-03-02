import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorLaptop from "@/assets/doctor-laptop.jpg";
import hospitalTeam from "@/assets/hospital-team.jpg";
import recruiterLifestyle from "@/assets/recruiter-lifestyle.jpg";

const tiles = [
  {
    title: "For Physicians",
    cta: "Join as Doctor",
    image: doctorLaptop,
  },
  {
    title: "For Healthcare Organizations",
    cta: "Register Organization",
    image: hospitalTeam,
  },
  {
    title: "For Recruiters",
    cta: "Explore recruiting tools",
    image: recruiterLifestyle,
  },
];

const RoleCategoryExplorer = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Who it's for</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Built for every role in healthcare
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[3/4] cursor-pointer"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_45%_8%/0.95)] via-[hsl(215_45%_12%/0.4)] to-[hsl(215_45%_12%/0.1)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-4">{tile.title}</h3>
                <Button variant="hero" size="lg">{tile.cta}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCategoryExplorer;
