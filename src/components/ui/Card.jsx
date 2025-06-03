import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  gradient = false,
  onClick,
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={hover ? { 
        y: -4, 
        transition: { duration: 0.2 } 
      } : {}}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl bg-dark-card border border-dark-border
        ${hover ? 'cursor-pointer' : ''}
        ${glow ? 'hover:shadow-2xl hover:shadow-brand-primary/10' : ''}
        ${gradient ? 'bg-gradient-to-br from-dark-card via-dark-card to-brand-primary/5' : ''}
        ${className}
      `}
    >
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-primary/0 to-brand-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}