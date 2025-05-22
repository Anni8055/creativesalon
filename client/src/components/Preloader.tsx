import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-gold font-playfair text-4xl font-bold">Luxe</span>
          <span className="text-dark-blue font-playfair text-3xl ml-2">Salon & Spa</span>
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: 360,
            borderTopColor: ["hsl(47, 71%, 52%)", "hsl(210, 29%, 24%)", "hsl(5, 79%, 58%)", "hsl(47, 71%, 52%)"]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "linear"
          }}
          className="w-12 h-12 border-4 border-gray-200 rounded-full"
          style={{ borderTopColor: "hsl(47, 71%, 52%)" }}
        />
      </div>
    </div>
  );
};

export default Preloader;
