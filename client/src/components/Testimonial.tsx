import { motion } from 'framer-motion';

interface TestimonialProps {
  rating: number;
  content: string;
  author: string;
  status: string;
  delay?: number;
}

const Testimonial = ({ rating, content, author, status, delay = 0 }: TestimonialProps) => {
  const initials = author
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <motion.div 
      className="bg-white rounded-lg p-8 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="text-gold">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fas ${i < rating ? 'fa-star' : 'fa-star-o'}`}></i>
          ))}
        </div>
      </div>
      <p className="text-dark-gray mb-6">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mr-4">
          <span className="text-dark-blue font-bold">{initials}</span>
        </div>
        <div>
          <h4 className="font-playfair font-bold">{author}</h4>
          <p className="text-sm text-dark-gray">{status}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
