'use client';

import { motion } from 'framer-motion';
import { MapPin, Link as LinkIcon, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Customization } from '@/types/customization';

type ProfileCardProps = {
  customization: Customization;
};

export function ProfileCard({ customization }: ProfileCardProps) {
  const shadowIntensity = parseInt(customization.shadowIntensity) || 50;
  const glassOpacity = parseInt(customization.glassOpacity) || 15;

  const baseStyle = {
    fontFamily: customization.fontFamily,
    fontSize: `${customization.fontSize}px`,
    fontWeight: customization.fontWeight,
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', color: '#1DA1F2' },
    { icon: Github, label: 'GitHub', color: '#333' },
    { icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Mail, label: 'Email', color: customization.primaryColor },
  ];

  return (
    <motion.div
      className="w-full max-w-sm overflow-hidden border"
      style={{
        ...baseStyle,
        backgroundColor: customization.backgroundColor,
        borderColor: `${customization.primaryColor}30`,
        borderRadius: `${customization.borderRadius}px`,
        color: customization.textColor,
        boxShadow: `0 20px 60px ${customization.primaryColor}${Math.round(shadowIntensity * 0.4).toString(16).padStart(2, '0')}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header gradient background */}
      <div
        className="relative h-24"
        style={{
          background: `linear-gradient(135deg, ${customization.primaryColor}, ${customization.secondaryColor})`,
        }}
      >
        {/* Animated pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Avatar */}
      <div className="relative px-6">
        <motion.div
          className="absolute -top-12 w-24 h-24 rounded-full border-4 overflow-hidden"
          style={{
            borderColor: customization.backgroundColor,
            boxShadow: `0 8px 20px ${customization.primaryColor}40`,
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div
            className="w-full h-full flex items-center justify-center text-2xl font-bold"
            style={{
              background: `linear-gradient(135deg, ${customization.primaryColor}60, ${customization.secondaryColor}60)`,
              color: customization.textColor,
            }}
          >
            AJ
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="pt-14 px-6 pb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">Alex Johnson</h3>
          <motion.div
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
            style={{ backgroundColor: customization.primaryColor }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span style={{ color: customization.backgroundColor }}>&#10003;</span>
          </motion.div>
        </div>

        <p className="text-sm opacity-60 mt-1">Senior Product Designer</p>

        <p className="mt-3 text-sm opacity-80 leading-relaxed">
          Crafting digital experiences that blend beauty with functionality.
          Passionate about design systems and user-centered design.
        </p>

        {/* Location & Website */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <div className="flex items-center gap-1.5 opacity-60">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <motion.a
            href="#"
            className="flex items-center gap-1.5"
            style={{ color: customization.primaryColor }}
            whileHover={{ x: 2 }}
          >
            <LinkIcon className="w-4 h-4" />
            <span>alexj.design</span>
          </motion.a>
        </div>

        {/* Stats */}
        <div
          className="flex justify-between mt-5 pt-5 border-t"
          style={{ borderColor: `${customization.primaryColor}20` }}
        >
          {[
            { label: 'Projects', value: '142' },
            { label: 'Followers', value: '12.4k' },
            { label: 'Following', value: '847' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="font-bold text-lg" style={{ color: customization.primaryColor }}>
                {stat.value}
              </div>
              <div className="text-xs opacity-50">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mt-5">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.button
                key={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center border"
                style={{
                  borderColor: `${customization.primaryColor}30`,
                  backgroundColor: `${customization.primaryColor}10`,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: customization.primaryColor,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Icon className="w-4 h-4" style={{ color: customization.textColor }} />
              </motion.button>
            );
          })}
        </div>

        {/* Action Button */}
        <motion.button
          className="w-full mt-5 py-3 rounded-lg font-medium"
          style={{
            background: `linear-gradient(135deg, ${customization.primaryColor}, ${customization.secondaryColor})`,
            color: customization.backgroundColor,
          }}
          whileHover={{ scale: 1.02, boxShadow: `0 8px 25px ${customization.primaryColor}50` }}
          whileTap={{ scale: 0.98 }}
        >
          Follow
        </motion.button>
      </div>
    </motion.div>
  );
}
