'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Customization } from '@/types/customization';

type GradientHeroProps = {
  customization: Customization;
};

export function GradientHero({ customization }: GradientHeroProps) {
  const gradientAngle = parseInt(customization.gradientAngle) || 135;
  const glassOpacity = parseInt(customization.glassOpacity || '15') || 15;
  const blurAmount = parseInt(customization.blurAmount || '12') || 12;
  const opacityToHex = (opacity: number) => Math.round(opacity * 2.55).toString(16).padStart(2, '0');

  const baseStyle = {
    fontFamily: customization.fontFamily,
    fontSize: `${customization.fontSize}px`,
    fontWeight: customization.fontWeight,
  };

  return (
    <div className="w-full max-w-lg" style={baseStyle}>
      <motion.div
        className="relative p-8 overflow-hidden"
        style={{
          background: `linear-gradient(${gradientAngle}deg, ${customization.backgroundColor}, ${customization.backgroundColor}dd)`,
          borderRadius: `${Number(customization.borderRadius) * 2}px`,
          border: `1px solid ${customization.primaryColor}30`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
          style={{
            background: `radial-gradient(circle, ${customization.primaryColor}, transparent)`,
            filter: `blur(${blurAmount * 2}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
            opacity: [glassOpacity / 100 * 4, glassOpacity / 100 * 4.8, glassOpacity / 100 * 4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${customization.secondaryColor}, transparent)`,
            filter: `blur(${blurAmount * 2}px)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
            opacity: [glassOpacity / 100 * 3.3, glassOpacity / 100 * 4, glassOpacity / 100 * 3.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium rounded-full"
            style={{
              backgroundColor: `${customization.primaryColor}20`,
              color: customization.primaryColor,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3" />
            <span>New Release</span>
          </motion.div>

          <motion.h1
            className="text-3xl font-bold mb-3"
            style={{
              background: `linear-gradient(${gradientAngle}deg, ${customization.primaryColor}, ${customization.secondaryColor})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Build Beautiful UIs
          </motion.h1>

          <motion.p
            className="mb-6 leading-relaxed"
            style={{ color: `${customization.textColor}80` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Create stunning interfaces with customizable components and export
            perfect prompts for any AI assistant.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="flex items-center gap-2 px-5 py-2.5 font-medium text-white rounded-lg"
              style={{
                background: `linear-gradient(${gradientAngle}deg, ${customization.primaryColor}, ${customization.secondaryColor})`,
                boxShadow: `0 4px 20px ${customization.primaryColor}40`,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 8px 30px ${customization.primaryColor}60` }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              className="px-5 py-2.5 font-medium border rounded-lg"
              style={{
                borderColor: `${customization.primaryColor}50`,
                color: customization.textColor,
              }}
              whileHover={{ backgroundColor: `${customization.primaryColor}15` }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
