import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import jobBoardMockup from "@/assets/job-board-mockup.jpg";
import communityFeedMockup from "@/assets/community-feed-mockup.jpg";
import messagingMockup from "@/assets/messaging-mockup.jpg";
import medicalNewsMockup from "@/assets/medical-news-mockup.jpg";
import eventsMockup from "@/assets/events-mockup.jpg";
import marketplaceMockup from "@/assets/marketplace-mockup.jpg";

const modules = [
  {
    title: "Job Board",
    description: "Browse and post medical positions across specialties, locations, and practice types.",
    image: jobBoardMockup,
  },
  {
    title: "Professional Community",
    description: "Connect with peers, join specialty groups, and participate in clinical discussions.",
    image: communityFeedMockup,
  },
  {
    title: "Private Messaging",
    description: "Secure, HIPAA-aware messaging between physicians and organizations.",
    image: messagingMockup,
  },
  {
    title: "Medical News",
    description: "Curated feed of the latest research, guidelines, and industry updates.",
    image: medicalNewsMockup,
  },
  {
    title: "Events",
    description: "Discover CME conferences, webinars, and networking events in your field.",
    image: eventsMockup,
  },
  {
    title: "Marketplace",
    description: "Buy and sell medical equipment, practice assets, and professional services.",
    image: marketplaceMockup,
  },
];

const ModulesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Platform</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Everything physicians need
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("left")} className="p-3 rounded-full border border-border hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="p-3 rounded-full border border-border hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {modules.map((mod, i) => (
          <motion.div
            key={mod.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex-none w-[340px] md:w-[380px] snap-start"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={mod.image}
                  alt={`${mod.title} module preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{mod.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{mod.description}</p>
                <Button variant="link" className="px-0 text-accent hover:text-accent/80">
                  Learn more →
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ModulesCarousel;
