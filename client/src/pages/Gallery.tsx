import { motion } from 'framer-motion';
import { fadeInUp, pageTransition } from '@/lib/animations';
import { AnimateInView } from '@/components/ui/animate-in-view';
import GalleryItem from '@/components/GalleryItem';

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Balayage Highlights",
    description: "Our signature natural-looking highlights that enhance your hair's dimension."
  },
  {
    image: "https://pixabay.com/get/gdf04433ac48adf7f5efb7c015feec0abb72c8dcaf9b55c70e30cdbfa8f6b7d2d6e946562809bba69be554b66bb2f0ffcbc49d962774b2512a5c5914aab48b3eb_1280.jpg",
    title: "Elegant Updo",
    description: "Perfect for weddings and special occasions to make you feel glamorous."
  },
  {
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Luxury Nail Art",
    description: "Custom nail designs that express your personal style and creativity."
  },
  {
    image: "https://pixabay.com/get/g55b0b3e056453689ff74b735085ed666fc45bd0941f8e2e6774e8fae535d6463d64a31fbd6c37a63c95636fa33cce3ae4f4758b94da18b29acd7d84ba5ae68d6_1280.jpg",
    title: "Revitalizing Facial",
    description: "Our signature facial that leaves your skin glowing and rejuvenated."
  },
  {
    image: "https://pixabay.com/get/gaec93e90e8c13d48128ea2e00db68ce590c1b4783abae7b1ca38e2d4dc00b8a802104ad4b7e2023580e7d53da614734fa57307d42350898453327cb85d58ca26_1280.jpg",
    title: "Modern Men's Cut",
    description: "Contemporary styles that keep you looking sharp and confident."
  },
  {
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Premium Products",
    description: "We use and sell only the highest quality professional products for your hair and skin."
  },
  {
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Hair Coloring",
    description: "Vibrant, long-lasting color tailored to complement your skin tone and style."
  },
  {
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Spa Manicure",
    description: "A luxurious treatment for your hands featuring premium products and expert techniques."
  },
  {
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Precision Haircuts",
    description: "Expertly crafted cuts that enhance your features and suit your lifestyle."
  },
  {
    image: "https://images.unsplash.com/photo-1596178060810-72660ee8d392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Hot Stone Massage",
    description: "A therapeutic massage using smooth heated stones to ease muscle tension and promote relaxation."
  },
  {
    image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Bridal Styling",
    description: "Complete hair and makeup services to make you look stunning on your special day."
  },
  {
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    title: "Luxury Salon Experience",
    description: "Every visit to our salon is designed to provide relaxation and rejuvenation in an elegant environment."
  }
];

const Gallery = () => {
  return (
    <motion.div 
      className="pt-24 pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mb-16" style={{backgroundImage: "url('https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600')"}}>
        <div className="absolute inset-0 bg-dark-blue bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimateInView variants={fadeInUp} className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-white">Our Gallery</h1>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-lg text-white">
              Explore our portfolio showcasing our most beautiful transformations and signature styles.
            </p>
          </AnimateInView>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <AnimateInView variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Portfolio Showcase</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            A glimpse into the artistry and expertise of our talented team. Browse through our gallery to see the beautiful results we create for our clients.
          </p>
        </AnimateInView>

        {/* Gallery Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-gold text-white rounded-full hover:bg-opacity-90 transition-all">All</button>
          <button className="px-6 py-2 bg-light-gray text-dark-gray rounded-full hover:bg-gold hover:text-white transition-all">Hair</button>
          <button className="px-6 py-2 bg-light-gray text-dark-gray rounded-full hover:bg-gold hover:text-white transition-all">Nails</button>
          <button className="px-6 py-2 bg-light-gray text-dark-gray rounded-full hover:bg-gold hover:text-white transition-all">Skin</button>
          <button className="px-6 py-2 bg-light-gray text-dark-gray rounded-full hover:bg-gold hover:text-white transition-all">Massage</button>
          <button className="px-6 py-2 bg-light-gray text-dark-gray rounded-full hover:bg-gold hover:text-white transition-all">Bridal</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              delay={0.1 * (index % 6)}
            />
          ))}
        </div>

        <AnimateInView variants={fadeInUp} className="text-center mt-16">
          <h3 className="text-2xl font-playfair font-bold mb-6">Inspired by What You See?</h3>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto mb-8">
            Let our talented team create a personalized look just for you. Schedule your appointment today.
          </p>
          <motion.button 
            className="btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.location.href = '/appointment'}
          >
            Book Your Appointment
          </motion.button>
        </AnimateInView>
      </div>
    </motion.div>
  );
};

export default Gallery;
