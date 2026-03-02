import { motion } from "framer-motion";
import { BadgeCheck, Send, Paperclip, Smile } from "lucide-react";

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
          {/* Built messaging UI mockup */}
          <div className="bg-card rounded-2xl shadow-card-hover border border-border/50 overflow-hidden text-left">
            {/* Header */}
            <div className="bg-surface-inverted px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent text-sm">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-sm text-surface-inverted-foreground flex items-center gap-1.5">
                    Sarah Mitchell <BadgeCheck className="w-4 h-4 text-accent" />
                  </p>
                  <p className="text-xs text-surface-inverted-foreground/50">Family Medicine · Mayo Clinic</p>
                </div>
              </div>
              <span className="text-xs text-surface-inverted-foreground/40 font-medium">Encrypted</span>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 bg-secondary/30 min-h-[280px]">
              {/* Received */}
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center font-display font-bold text-accent text-xs flex-shrink-0 mt-1">SM</div>
                <div>
                  <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-border/30">
                    <p className="text-sm text-foreground">Hi Dr. Park, I saw your post about transitioning from solo practice. I went through the same decision last year. Would love to share my experience.</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-1">2:34 PM</p>
                </div>
              </div>

              {/* Sent */}
              <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-display font-bold text-foreground text-xs flex-shrink-0 mt-1">JP</div>
                <div>
                  <div className="bg-accent rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                    <p className="text-sm text-accent-foreground">That would be incredibly helpful, Dr. Mitchell. I have been weighing the pros and cons for months. When would be a good time to connect?</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right mr-1">2:36 PM</p>
                </div>
              </div>

              {/* Received */}
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center font-display font-bold text-accent text-xs flex-shrink-0 mt-1">SM</div>
                <div>
                  <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-border/30">
                    <p className="text-sm text-foreground">How about Thursday at 4 PM? I can walk you through the negotiation process and what to expect in the first 6 months.</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-1">2:38 PM</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-border/50 flex items-center gap-3">
              <Paperclip className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 bg-secondary rounded-full px-4 py-2.5 text-sm text-muted-foreground">
                Type a message...
              </div>
              <Smile className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Send className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessagingSection;
