import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, MessageSquare, BadgeCheck } from "lucide-react";

const FeatureCommunity = () => {
  return (
    <section id="community" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Community mockup card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card rounded-2xl shadow-card-hover border border-border/50 p-6 md:p-8">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Community discussions</p>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">Get real advice from other physicians</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Doctors ask questions about career moves, clinical decisions, and practice management and get replies from verified medical professionals.
              </p>

              {/* Sample post */}
              <div className="bg-secondary rounded-xl p-5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent text-sm">JP</div>
                  <div>
                    <p className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                      Joseph Park <BadgeCheck className="w-4 h-4 text-accent" />
                    </p>
                    <p className="text-xs text-muted-foreground">Internal Medicine</p>
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">Keeping my solo practice open?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  After running my own practice for 5 years, I am considering moving to a salaried hospital position. What would you do?
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> 24 likes</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 16 comments</span>
                </div>
              </div>

              {/* Sample replies */}
              <div className="space-y-3 pl-4 border-l-2 border-accent/20">
                <div className="bg-background rounded-lg p-4">
                  <p className="font-semibold text-sm text-foreground flex items-center gap-1.5 mb-1">
                    Sarah Mitchell <BadgeCheck className="w-3.5 h-3.5 text-accent" />
                    <span className="font-normal text-xs text-muted-foreground ml-1">Family Medicine</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    I made that transition two years ago. The financial stability is worth it, but I miss the autonomy. Consider a hybrid model if your hospital allows it.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <p className="font-semibold text-sm text-foreground flex items-center gap-1.5 mb-1">
                    David Chen <BadgeCheck className="w-3.5 h-3.5 text-accent" />
                    <span className="font-normal text-xs text-muted-foreground ml-1">Cardiology</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Before deciding, negotiate your terms carefully. Many hospitals offer part-time arrangements that let you keep a small independent panel.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="cta" size="sm">Browse Discussions</Button>
                <Button variant="cta-outline" size="sm">Join as Doctor</Button>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Community</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Real conversations with real physicians
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every member is a verified medical professional. Discussions span career strategy, clinical best practices, work-life balance, and practice management. No noise, no anonymous opinions. Just trusted insights from colleagues who understand the profession.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCommunity;
