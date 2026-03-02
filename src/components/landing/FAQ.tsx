import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can join MedConnect?",
    a: "Licensed physicians, medical professionals, healthcare organizations, and hospitals. Every account is verified.",
  },
  {
    q: "Is the platform free to use?",
    a: "Free for physicians. Organizations have flexible plans.",
  },
  {
    q: "How is MedConnect different from LinkedIn or other job boards?",
    a: "Purpose-built for medicine with specialty-based job matching and verified physician discussions.",
  },
  {
    q: "Is my data secure and private?",
    a: "Enterprise-grade encryption, strict privacy standards, no third-party sharing without consent.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about MedConnect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
