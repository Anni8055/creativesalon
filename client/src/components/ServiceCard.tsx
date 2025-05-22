import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/utils';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  delay?: number;
}

const ServiceCard = ({ image, title, description, price, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="service-card bg-light-gray rounded-lg overflow-hidden shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold mb-3">{title}</h3>
        <p className="text-dark-gray mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gold font-montserrat font-medium">Starting at {formatPrice(price)}</span>
          <Link 
            href="/appointment" 
            className="text-dark-blue hover:text-gold transition-all font-medium"
          >
            Book Now <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
