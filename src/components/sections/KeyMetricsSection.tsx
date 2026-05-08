import React from "react";
import { Building2, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function KeyMetricsSection() {
  return (
    <section className="py-16 bg-bg-secondary/20 border-y border-border-subtle">
      <div className="max-w-[1120px] mx-auto px-6 md:px-32">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8 backdrop-blur-sm bg-white/70 border border-border-subtle rounded-xl px-6 py-4 shadow-sm"
          >
            <div className="flex gap-3 items-start">
              <div className="w-0.5 bg-blue rounded-full h-full min-h-[40px]"></div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-text-tertiary font-medium mb-1">
                  Bpifrance Le Lab · Étude 2025
                </div>
                <div className="font-serif italic text-base text-text-primary">
                  « 58 % des dirigeants de PME considèrent l'IA comme un enjeu de survie. Seuls 11 % en tirent parti. »
                </div>
              </div>
            </div>
          </motion.div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed text-center">
            Audit, formation, intégration. Trois leviers pour transformer une IA invisible en ROI mesurable — en 6 mois.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Building2 className="w-6 h-6 text-blue/40" />
              <div className="text-5xl font-heavy text-navy">50+</div>
            </div>
            <div className="text-sm text-text-secondary">entreprises accompagnées</div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-6 h-6 text-blue/40" />
              <div className="text-5xl font-heavy text-navy">97 %</div>
            </div>
            <div className="text-sm text-text-secondary">satisfaction client</div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-blue/40" />
              <div className="text-5xl font-heavy text-navy">×5,2</div>
            </div>
            <div className="text-sm text-text-secondary">ROI moyen observé</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
