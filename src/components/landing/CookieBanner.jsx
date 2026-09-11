import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    statistics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, statistics: true, marketing: true };
    localStorage.setItem('cookie_consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, statistics: false, marketing: false };
    localStorage.setItem('cookie_consent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Datenschutz-Einstellungen
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
                  Sie können Ihre Einstellungen jederzeit anpassen.
                </p>
              </div>
            </div>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-6 space-y-4 overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium text-gray-900">Technisch notwendig</Label>
                        <p className="text-xs text-gray-500 mt-1">
                          Erforderlich für die Grundfunktionen der Website
                        </p>
                      </div>
                      <Switch checked={true} disabled className="opacity-50" />
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium text-gray-900">Statistik</Label>
                        <p className="text-xs text-gray-500 mt-1">
                          Helfen uns, die Nutzung der Website zu verstehen
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.statistics}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, statistics: checked }))
                        }
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium text-gray-900">Marketing</Label>
                        <p className="text-xs text-gray-500 mt-1">
                          Ermöglichen personalisierte Inhalte und Werbung
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, marketing: checked }))
                        }
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={() => setShowDetails(!showDetails)}
                className="sm:order-1"
              >
                {showDetails ? 'Weniger anzeigen' : 'Einstellungen anpassen'}
              </Button>
              
              {showDetails ? (
                <>
                  <Button
                    variant="outline"
                    onClick={handleRejectAll}
                    className="sm:order-2"
                  >
                    Nur notwendige
                  </Button>
                  <Button
                    onClick={handleAcceptSelected}
                    className="bg-blue-600 hover:bg-blue-700 sm:order-4"
                  >
                    Auswahl speichern
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="sm:order-2"
                >
                  Ablehnen
                </Button>
              )}
              
              <Button
                onClick={handleAcceptAll}
                className="bg-emerald-600 hover:bg-emerald-700 sm:order-3 sm:ml-auto"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}