import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  delay?: number;
}

const TeamMember = ({ image, name, role, description, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative overflow-hidden h-80">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-dark-blue bg-opacity-70 flex flex-col justify-center items-center p-6"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-center mb-4">{description}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gold transition-all">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gold transition-all">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gold transition-all">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-playfair font-bold mb-1">{name}</h3>
        <p className="text-gold mb-3">{role}</p>
        <Link 
          href="/appointment" 
          className="inline-block text-dark-blue hover:text-gold transition-all font-medium"
        >
          Book Appointment
        </Link>
      </div>
    </motion.div>
  );
};

export default TeamMember;
