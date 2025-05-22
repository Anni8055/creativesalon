import { motion } from 'framer-motion';
import { fadeInUp, pageTransition } from '@/lib/animations';
import { Link } from 'wouter';
import { AnimateInView } from '@/components/ui/animate-in-view';
import { formatPrice } from '@/lib/utils';

const services = [
  {
    category: "Hair Services",
    items: [
      { name: "Women's Haircut & Style", price: 45, description: "A personalized cut and style tailored to your face shape and preferences." },
      { name: "Men's Haircut & Style", price: 35, description: "Classic or contemporary cuts for men of all ages." },
      { name: "Blow Dry & Styling", price: 40, description: "Professional blow dry with curling or straightening as desired." },
      { name: "Hair Coloring", price: 85, description: "Full color service using premium hair color products." },
      { name: "Highlights/Lowlights", price: 110, description: "Dimensional color to enhance your natural hair color." },
      { name: "Balayage/Ombre", price: 150, description: "Hand-painted highlights for a natural, sun-kissed look." },
      { name: "Special Occasion Styling", price: 75, description: "Formal styling for weddings, proms, and special events." },
      { name: "Hair Treatment", price: 55, description: "Deep conditioning treatments for damaged or dry hair." }
    ]
  },
  {
    category: "Facial Treatments",
    items: [
      { name: "Express Facial", price: 60, description: "A quick refresher facial for those on the go." },
      { name: "Signature Facial", price: 90, description: "Our customized facial targeting your specific skin concerns." },
      { name: "Anti-Aging Facial", price: 120, description: "Advanced treatment to reduce fine lines and improve skin elasticity." },
      { name: "Acne Treatment", price: 95, description: "Deep cleansing facial to target acne and breakouts." },
      { name: "Microdermabrasion", price: 110, description: "Exfoliation treatment to reveal smoother, younger-looking skin." },
      { name: "Chemical Peel", price: 130, description: "Removes damaged outer layers of skin for a smoother complexion." }
    ]
  },
  {
    category: "Nail Services",
    items: [
      { name: "Classic Manicure", price: 35, description: "Includes nail shaping, cuticle care, hand massage, and polish." },
      { name: "Gel Manicure", price: 50, description: "Long-lasting gel polish with nail preparation and cuticle care." },
      { name: "Luxury Manicure", price: 60, description: "Classic manicure with exfoliation, extended massage, and paraffin treatment." },
      { name: "Classic Pedicure", price: 45, description: "Includes foot soak, exfoliation, nail care, and polish." },
      { name: "Spa Pedicure", price: 65, description: "Classic pedicure with callus treatment, extended massage, and paraffin dip." },
      { name: "Nail Art (per nail)", price: 5, description: "Custom nail designs to express your personal style." }
    ]
  },
  {
    category: "Massage & Body Treatments",
    items: [
      { name: "Swedish Massage (60 min)", price: 85, description: "Relaxing full-body massage using long, flowing strokes." },
      { name: "Deep Tissue Massage (60 min)", price: 95, description: "Targets deeper muscle layers to release chronic tension." },
      { name: "Hot Stone Massage (75 min)", price: 120, description: "Uses heated stones to enhance relaxation and ease muscle tension." },
      { name: "Aromatherapy Massage (60 min)", price: 90, description: "Swedish massage with essential oils to enhance relaxation." },
      { name: "Body Scrub Treatment", price: 80, description: "Full-body exfoliation to remove dead skin cells and stimulate circulation." },
      { name: "Prenatal Massage (60 min)", price: 90, description: "Gentle massage specially designed for expectant mothers." }
    ]
  },
  {
    category: "Waxing Services",
    items: [
      { name: "Eyebrow Waxing", price: 18, description: "Shapes and defines eyebrows for a polished look." },
      { name: "Lip or Chin Waxing", price: 15, description: "Removes unwanted facial hair for a smooth finish." },
      { name: "Underarm Waxing", price: 25, description: "Removes underarm hair for smooth, hair-free skin." },
      { name: "Half Leg Waxing", price: 45, description: "Removes hair from knee to ankle or thigh to knee." },
      { name: "Full Leg Waxing", price: 75, description: "Complete hair removal from upper thigh to ankle." },
      { name: "Back or Chest Waxing", price: 60, description: "Removes unwanted hair from back or chest area." }
    ]
  }
];

const Services = () => {
  return (
    <motion.div 
      className="pt-24 pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="container mx-auto px-4">
        <AnimateInView variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Explore our complete range of premium salon and spa services designed to enhance your natural beauty and provide ultimate relaxation.
          </p>
        </AnimateInView>

        {services.map((category, index) => (
          <div key={index} className="mb-16">
            <AnimateInView variants={fadeInUp} className="mb-8" delay={0.1}>
              <h2 className="text-3xl font-playfair font-bold mb-2">{category.category}</h2>
              <div className="w-16 h-1 bg-gold"></div>
            </AnimateInView>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {category.items.map((service, serviceIndex) => (
                  <AnimateInView 
                    key={serviceIndex} 
                    variants={fadeInUp} 
                    className="p-6 hover:bg-light-gray transition-all"
                    delay={0.1 * (serviceIndex + 1)}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-playfair font-bold">{service.name}</h3>
                        <p className="text-dark-gray mt-2">{service.description}</p>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <span className="text-gold font-montserrat font-medium text-lg">
                          {formatPrice(service.price)}
                        </span>
                        <Link 
                          href="/appointment" 
                          className="btn-primary"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </div>
        ))}

        <AnimateInView variants={fadeInUp} className="text-center mt-12">
          <h3 className="text-2xl font-playfair font-bold mb-4">Ready to Experience Luxury?</h3>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto mb-8">
            Schedule your appointment today and let our professional team pamper you with our exceptional services.
          </p>
          <Link href="/appointment" className="btn-primary btn-large">
            Book Your Appointment
          </Link>
        </AnimateInView>
      </div>
    </motion.div>
  );
};

export default Services;
