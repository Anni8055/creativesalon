import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '@/lib/animations';
import { Link } from 'wouter';
import { AnimateInView } from '@/components/ui/animate-in-view';

const About = () => {
  return (
    <motion.div 
      className="pt-24 pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section with Pink Gradient and Overlay */}
      <section className="relative h-[28rem] bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 flex items-center justify-center mb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80" alt="Salon Interior" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-pink-200 bg-opacity-60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimateInView variants={fadeInLeft} className="max-w-xl text-dark-blue drop-shadow-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Ultimate Salon</h1>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-2xl font-extrabold text-dark-blue">
              Discover the story behind our commitment to excellence and passion for beauty.
            </p>
          </AnimateInView>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Our Story - Styled with circles like in the screenshot */}
        <section className="mb-20 relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-200 rounded-3xl shadow-xl">
          <div className="absolute inset-0 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Elegant Spa" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 rounded-r-3xl" />
            <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateInView variants={fadeInLeft} className="relative">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-dark-blue">Our Story</h2>
                <div className="w-24 h-1 bg-pink-300 mb-8"></div>
                <p className="text-lg mb-6 font-bold text-dark-blue">
                  Founded in 2010, Ultimate Salon & Spa has been dedicated to providing exceptional beauty services in a luxurious and welcoming environment.
                </p>
                <p className="text-lg mb-6 font-bold text-dark-blue">
                  Our team of highly skilled professionals is committed to enhancing your natural beauty while ensuring you feel pampered and relaxed during your visit.
                </p>
                <p className="text-lg mb-6 font-bold text-dark-blue">
                  We use only premium products and stay at the forefront of industry trends to deliver results that exceed your expectations.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center">
                  <div className="text-pink-400 text-3xl mr-4">
                    <i className="fas fa-medal"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-dark-blue">Premium Quality</h4>
                    <p className="text-dark-blue font-bold">Using top-tier products</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-pink-400 text-3xl mr-4">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-dark-blue">Certified Experts</h4>
                    <p className="text-dark-blue font-bold">Highly trained professionals</p>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView variants={fadeInRight} className="grid grid-cols-2 gap-4 relative">
              <img 
                src="https://images.unsplash.com/photo-1512259596154-8a3bfa6f7d85?auto=format&fit=crop&w=600&q=80" 
                alt="Modern Salon Chair" 
                className="rounded-2xl shadow-2xl h-64 object-cover w-full z-10 border-4 border-pink-200"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                alt="Luxury Spa Room" 
                className="rounded-2xl shadow-2xl h-64 object-cover w-full mt-8 z-10 border-4 border-pink-200"
              />
            </AnimateInView>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 bg-light-gray rounded-lg mb-20">
          <div className="container mx-auto px-4">
            <AnimateInView variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Philosophy</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            </AnimateInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateInView variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md" delay={0.1}>
                <div className="text-gold text-3xl mb-4">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4">Client-Centered Approach</h3>
                <p className="text-dark-gray">
                  We believe in putting our clients first, listening carefully to their needs, and creating personalized experiences that exceed expectations.
                </p>
              </AnimateInView>

              <AnimateInView variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md" delay={0.2}>
                <div className="text-gold text-3xl mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4">Quality & Sustainability</h3>
                <p className="text-dark-gray">
                  We use only premium, environmentally responsible products that deliver exceptional results while minimizing our ecological footprint.
                </p>
              </AnimateInView>

              <AnimateInView variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md" delay={0.3}>
                <div className="text-gold text-3xl mb-4">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4">Continuous Education</h3>
                <p className="text-dark-gray">
                  Our team regularly participates in advanced training to stay at the forefront of industry trends and techniques.
                </p>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Meet the Founder */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateInView variants={fadeInLeft}>
              <img 
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful Founder - Elegant Woman" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </AnimateInView>

            <AnimateInView variants={fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Meet Our Founder</h2>
              <div className="w-24 h-1 bg-gold mb-8"></div>
              <p className="text-lg mb-6">
                <span className="font-bold text-dark-blue">Maria Johnson</span> began her career over 20 years ago, training at prestigious academies in New York and Paris before opening Luxe Salon & Spa.
              </p>
              <p className="text-lg mb-6">
                With multiple industry awards and a reputation for excellence, Maria has built a team that shares her passion for transformative beauty services and exceptional client care.
              </p>
              <p className="text-lg mb-6">
                "My vision was to create more than just a salon—I wanted to build a community where clients feel valued and stylists are inspired to do their best work. At Luxe, we celebrate individual beauty and help our clients express their unique style."
              </p>
              <p className="italic text-right">— Maria Johnson, Founder</p>
            </AnimateInView>
          </div>
        </section>

        {/* Our Achievements - Stats with bg image */}
        <section className="py-16 mb-20 relative bg-gray-100">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <AnimateInView variants={fadeInUp} className="text-center" delay={0.1}>
                <motion.div 
                  className="text-gray-700 text-5xl font-bold mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  12+
                </motion.div>
                <h3 className="text-xl text-gray-600 font-medium tracking-wide">Years of Experience</h3>
              </AnimateInView>
              
              <AnimateInView variants={fadeInUp} className="text-center" delay={0.2}>
                <motion.div 
                  className="text-gray-700 text-5xl font-bold mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  15+
                </motion.div>
                <h3 className="text-xl text-gray-600 font-medium tracking-wide">Expert Stylists</h3>
              </AnimateInView>
              
              <AnimateInView variants={fadeInUp} className="text-center" delay={0.3}>
                <motion.div 
                  className="text-gray-700 text-5xl font-bold mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  10K+
                </motion.div>
                <h3 className="text-xl text-gray-600 font-medium tracking-wide">Happy Clients</h3>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <AnimateInView variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Experience the Luxe Difference</h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto mb-8">
              We invite you to visit our salon and spa to experience our exceptional services firsthand. Our friendly team is ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/appointment" className="btn-primary btn-large">
                Book an Appointment
              </Link>
              <Link href="/contact" className="text-dark-blue hover:text-gold transition-all font-medium">
                Contact Us <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </AnimateInView>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
