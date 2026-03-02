import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = ["Features", "Jobs", "Community", "Organizations", "Events", "Resources"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Brand */}
        <a href="#" className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
          MedConnect
        </a>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
          <Button
            variant="ghost"
            size="sm"
            className={`hidden sm:inline-flex ${
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            Login
          </Button>
          <Button variant="cta" size="sm" className="hidden sm:inline-flex">
            Sign up
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-card border-b border-border shadow-card"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-foreground/70 hover:text-accent py-2">
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-3 border-t border-border">
              <Button variant="ghost" size="sm">Login</Button>
              <Button variant="cta" size="sm">Sign up</Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
