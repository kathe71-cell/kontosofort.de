import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const C24_AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <div className="flex flex-col">
              <span className="text-amber-400 text-xs font-black flex items-center gap-1">
                <Zap className="w-3 h-3 fill-amber-400" /> C24 Smart 0 €
              </span>
              <span className="text-slate-300 text-[11px] font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 0,75 % Zinsen • eID
              </span>
            </div>

            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl shadow-lg border border-amber-400 text-xs focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <a 
                href={C24_AFFILIATE_LINK} 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="C24 Smart Girokonto jetzt eröffnen (Mobile)"
              >
                C24 Konto eröffnen
                <ArrowRight className="ml-1 w-3.5 h-3.5 stroke-[3]" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
