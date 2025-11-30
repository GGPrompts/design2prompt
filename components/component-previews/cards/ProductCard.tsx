'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, Sparkles } from 'lucide-react';
import { Customization } from '@/types/customization';

type ProductCardProps = {
  customization: Customization;
};

export function ProductCard({ customization }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shadowIntensity = parseInt(customization.shadowIntensity) || 50;
  const imageHeight = parseInt(customization.imageHeight) || 200;
  const showRating = customization.showRating !== 'false';

  const baseStyle = {
    fontFamily: customization.fontFamily,
    fontSize: `${customization.fontSize}px`,
    fontWeight: customization.fontWeight,
  };

  const rating = 4.8;
  const reviews = 256;
  const originalPrice = 299;
  const salePrice = 199;
  const discount = Math.round((1 - salePrice / originalPrice) * 100);

  return (
    <motion.div
      className="w-full max-w-sm overflow-hidden border"
      style={{
        ...baseStyle,
        backgroundColor: customization.backgroundColor,
        borderColor: `${customization.primaryColor}20`,
        borderRadius: `${customization.borderRadius}px`,
        color: customization.textColor,
        boxShadow: `0 15px 40px ${customization.primaryColor}${Math.round(shadowIntensity * 0.3).toString(16).padStart(2, '0')}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden" style={{ height: imageHeight }}>
        {/* Gradient Background (simulating product image) */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${customization.primaryColor}30, ${customization.secondaryColor}30)`,
          }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Product Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${customization.primaryColor}60, ${customization.secondaryColor}60)`,
              boxShadow: `0 20px 40px ${customization.primaryColor}50`,
            }}
            animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.05 : 1 }}
          >
            <Sparkles className="w-16 h-16" style={{ color: customization.textColor }} />
          </motion.div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <motion.span
            className="px-3 py-1 text-xs font-bold rounded-full"
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            -{discount}%
          </motion.span>
          <motion.span
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: customization.primaryColor,
              color: customization.backgroundColor,
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Bestseller
          </motion.span>
        </div>

        {/* Like Button */}
        <motion.button
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
          style={{
            backgroundColor: `${customization.backgroundColor}80`,
            border: `1px solid ${customization.primaryColor}30`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
        >
          <motion.div
            animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }}
          >
            <Heart
              className="w-5 h-5"
              style={{
                color: isLiked ? '#ef4444' : customization.textColor,
                fill: isLiked ? '#ef4444' : 'transparent',
              }}
            />
          </motion.div>
        </motion.button>

        {/* Quick Actions (on hover) */}
        <motion.div
          className="absolute bottom-4 inset-x-4 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        >
          <motion.button
            className="flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium backdrop-blur-sm"
            style={{
              backgroundColor: `${customization.backgroundColor}90`,
              border: `1px solid ${customization.primaryColor}40`,
            }}
            whileHover={{ backgroundColor: customization.primaryColor }}
          >
            <Eye className="w-4 h-4" />
            Quick View
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p
          className="text-xs font-medium uppercase tracking-wider mb-2"
          style={{ color: customization.primaryColor }}
        >
          Premium Collection
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 line-clamp-2">
          Designer Wireless Headphones Pro
        </h3>

        {/* Rating */}
        {showRating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  style={{
                    color: i < Math.floor(rating) ? '#fbbf24' : `${customization.textColor}30`,
                    fill: i < Math.floor(rating) ? '#fbbf24' : 'transparent',
                  }}
                />
              ))}
            </div>
            <span className="text-sm opacity-70">
              {rating} ({reviews} reviews)
            </span>
          </div>
        )}

        {/* Color Options */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs opacity-60">Colors:</span>
          <div className="flex gap-1.5">
            {['#1a1a2e', '#e94560', '#16213e', '#0f3460'].map((color, i) => (
              <motion.button
                key={color}
                className="w-5 h-5 rounded-full border-2"
                style={{
                  backgroundColor: color,
                  borderColor: i === 0 ? customization.primaryColor : 'transparent',
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-2xl font-bold" style={{ color: customization.primaryColor }}>
            ${salePrice}
          </span>
          <span className="text-sm line-through opacity-50">
            ${originalPrice}
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full py-3.5 rounded-lg flex items-center justify-center gap-2 font-semibold"
          style={{
            background: `linear-gradient(135deg, ${customization.primaryColor}, ${customization.secondaryColor})`,
            color: customization.backgroundColor,
            boxShadow: `0 8px 25px ${customization.primaryColor}40`,
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: `0 12px 35px ${customization.primaryColor}60`,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </motion.button>

        {/* Stock Status */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#22c55e' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs opacity-60">In Stock - Ships within 24h</span>
        </div>
      </div>
    </motion.div>
  );
}
