import { motion } from 'framer-motion';

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const GalleryItem = ({ image, title, description, delay = 0 }: GalleryItemProps) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-lg shadow-lg relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-dark-blue bg-opacity-70 flex flex-col justify-center items-center p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-playfair font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-center mb-4">{description}</p>
        <motion.a 
          href="#" 
          className="text-gold hover:text-white transition-all"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fas fa-expand-alt text-2xl"></i>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default GalleryItem;
