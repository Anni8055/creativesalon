import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimateInViewProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  id?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimateInView({
  children,
  variants,
  className,
  id,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true
}: AnimateInViewProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: threshold });
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        controls.start('visible');
      }, delay * 1000);
    }
  }, [controls, isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
