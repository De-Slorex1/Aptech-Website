'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-brand-primary" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-brand-secondary)_0%,_transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-20 rounded-[3rem]"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Ready To Start Your <br /> 
            <span className="text-brand-tertiary">Global Tech Journey?</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a diverse community of learners from around the world. 
            Expanding your network and perspective starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://forms.gle/JsUVMFHnnuoxLTeM9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-tertiary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-brand-tertiary/90 focus-visible:ring-4 focus-visible:ring-brand-tertiary focus-visible:ring-offset-2 transition-all hover:scale-105"
              aria-label="Apply Now for Aptech Programs"
            >
              Enroll now
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/2347070491555"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 focus-visible:ring-4 focus-visible:ring-white transition-all"
              aria-label="Get Career Advice via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Ask for Career Advice
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
