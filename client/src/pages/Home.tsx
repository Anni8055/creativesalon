import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, bounce } from '@/lib/animations';
import { scrollToElement } from '@/lib/utils';
import { Link } from 'wouter';
import { AnimateInView } from '@/components/ui/animate-in-view';
import ServiceCard from '@/components/ServiceCard';
import TeamMember from '@/components/TeamMember';
import GalleryItem from '@/components/GalleryItem';
import Testimonial from '@/components/Testimonial';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section - Team */}
      <section 
        id="home" 
        className="h-screen flex items-center justify-center bg-cover bg-center relative" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}
      >
        <div className="absolute inset-0 bg-gray-400 bg-opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center relative">
          <div className="relative">
            {/* Paint Cups Circle */}
            <div className="mx-auto w-[600px] h-[600px] relative">
              {/* Create a ring of paint cups */}
              {Array.from({ length: 24 }).map((_, index) => {
                const angle = (index * 15) * (Math.PI / 180);
                const radius = 250;
                const left = Math.cos(angle) * radius + radius;
                const top = Math.sin(angle) * radius + radius;
                
                // Define a range of vibrant colors for the paint
                const colors = [
                  'bg-pink-300', 'bg-blue-400', 'bg-green-300', 'bg-yellow-300', 
                  'bg-orange-300', 'bg-purple-300', 'bg-indigo-400', 'bg-teal-300'
                ];
                
                return (
                  <motion.div 
                    key={index}
                    className={`absolute w-16 h-16 rounded-full ${colors[index % colors.length]} border-4 border-white`}
                    style={{ 
                      left: `${left - 32}px`, 
                      top: `${top - 32}px`,
                      transformOrigin: 'center',
                      zIndex: 20
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  />
                );
              })}
              
              {/* Paint dripping effects */}
              {Array.from({ length: 12 }).map((_, index) => {
                const colors = [
                  'bg-pink-300', 'bg-blue-400', 'bg-green-300', 'bg-yellow-300', 
                  'bg-orange-300', 'bg-purple-300', 'bg-indigo-400', 'bg-teal-300'
                ];
                
                const randomLeft = 250 + (Math.random() * 300 - 150);
                const height = 100 + Math.random() * 200;
                
                return (
                  <motion.div 
                    key={`drip-${index}`}
                    className={`absolute w-2 ${colors[index % colors.length]}`}
                    style={{ 
                      left: `${randomLeft}px`, 
                      top: '100px',
                      height: `${height}px`,
                      zIndex: 10
                    }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${height}px`, opacity: 0.8 }}
                    transition={{ delay: index * 0.1 + 1, duration: 1.5 }}
                  />
                );
              })}
              
              {/* White circle in the middle with TEAM text */}
              <motion.div 
                className="absolute inset-0 mx-auto my-auto w-[300px] h-[300px] bg-white bg-opacity-80 rounded-full flex items-center justify-center z-30"
                style={{ 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <h1 className="text-7xl font-light tracking-widest text-gray-700">TEAM</h1>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Book Now Button */}
        <motion.div 
          className="absolute bottom-10 right-10 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Link href="/appointment">
            <button className="rounded-full bg-pink-300 hover:bg-pink-400 transition-colors px-6 py-3 text-white font-medium flex items-center space-x-2">
              <span className="text-lg">Book Now</span>
              <i className="fas fa-calendar-alt"></i>
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateInView variants={fadeInUp} className="text-center mb-16" id="services-title">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Luxury Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Experience our premium range of services designed to enhance your natural beauty and provide ultimate relaxation.
            </p>
          </AnimateInView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              image="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=550" 
              title="Hair Styling"
              description="From classic cuts to trending styles, our expert stylists create the perfect look that complements your personality."
              price={45}
              delay={0.1}
            />
            
            <ServiceCard 
              image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=550" 
              title="Facial Treatments"
              description="Rejuvenate your skin with our customized facial treatments that address your specific skin concerns."
              price={75}
              delay={0.2}
            />
            
            <ServiceCard 
              image="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=550" 
              title="Manicure & Pedicure"
              description="Pamper your hands and feet with our luxurious nail treatments that leave you feeling refreshed."
              price={35}
              delay={0.3}
            />
            
            <ServiceCard 
              image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=550" 
              title="Massage Therapy"
              description="Relieve stress and tension with our therapeutic massage treatments tailored to your comfort level."
              price={85}
              delay={0.4}
            />
          </div>
          
          <AnimateInView variants={fadeInUp} className="text-center mt-12">
            <Link href="/services" className="inline-block btn-primary btn-large">
              View All Services
            </Link>
          </AnimateInView>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-blue text-white relative">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateInView variants={fadeInLeft} id="about-content">
              <div className="drop-shadow-lg">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
                <p className="text-lg mb-6">Founded in 2010, Luxe Salon & Spa has been dedicated to providing exceptional beauty services in a luxurious and welcoming environment.</p>
                <p className="text-lg mb-6">Our team of highly skilled professionals is committed to enhancing your natural beauty while ensuring you feel pampered and relaxed during your visit.</p>
                <p className="text-lg mb-8">We use only premium products and stay at the forefront of industry trends to deliver results that exceed your expectations.</p>
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center">
                    <i className="fas fa-medal text-gold text-3xl mr-4"></i>
                    <div>
                      <h4 className="text-xl font-playfair font-bold">Premium Quality</h4>
                      <p>Using top-tier products</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-certificate text-gold text-3xl mr-4"></i>
                    <div>
                      <h4 className="text-xl font-playfair font-bold">Certified Experts</h4>
                      <p>Highly trained professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView variants={fadeInRight} className="grid grid-cols-2 gap-4" id="about-images">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
                alt="Salon Interior" 
                className="rounded-lg shadow-2xl border-2 border-white h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
                alt="Spa Room" 
                className="rounded-lg shadow-2xl border-2 border-white h-64 object-cover w-full mt-8"
              />
            </AnimateInView>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <AnimateInView variants={fadeInUp} className="text-center" delay={0.1}>
              <div className="text-gold text-5xl font-bold mb-4">12+</div>
              <h3 className="text-xl font-playfair font-bold">Years of Experience</h3>
            </AnimateInView>
            <AnimateInView variants={fadeInUp} className="text-center" delay={0.2}>
              <div className="text-gold text-5xl font-bold mb-4">15+</div>
              <h3 className="text-xl font-playfair font-bold">Expert Stylists</h3>
            </AnimateInView>
            <AnimateInView variants={fadeInUp} className="text-center" delay={0.3}>
              <div className="text-gold text-5xl font-bold mb-4">10K+</div>
              <h3 className="text-xl font-playfair font-bold">Happy Clients</h3>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <AnimateInView variants={fadeInUp} className="text-center mb-16" id="team-title">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">Our team of dedicated professionals is passionate about helping you look and feel your best.</p>
          </AnimateInView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              image="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              name="Sophia Williams"
              role="Senior Stylist"
              description="With over 10 years of experience, Sophia specializes in precision cutting and color transformations."
              delay={0.1}
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              name="Marcus Johnson"
              role="Barber & Stylist"
              description="Marcus is known for his modern men's cuts and styling, specializing in fades and beard grooming."
              delay={0.2}
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              name="Emily Chen"
              role="Esthetician"
              description="Emily is our skincare expert with certifications in advanced facial treatments and skin rejuvenation."
              delay={0.3}
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              name="David Rodriguez"
              role="Massage Therapist"
              description="David combines traditional and modern massage techniques to provide therapeutic and relaxing experiences."
              delay={0.4}
            />
          </div>
          
          <AnimateInView variants={fadeInUp} className="text-center mt-12">
            <Link href="/team" className="inline-block btn-primary btn-large">
              View Full Team
            </Link>
          </AnimateInView>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateInView variants={fadeInUp} className="text-center mb-16" id="gallery-title">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">Explore our portfolio showcasing our most beautiful transformations and signature styles.</p>
          </AnimateInView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem 
              image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              title="Balayage Highlights"
              description="Our signature natural-looking highlights that enhance your hair's dimension."
              delay={0.1}
            />
            
            <GalleryItem 
              image="https://pixabay.com/get/gdf04433ac48adf7f5efb7c015feec0abb72c8dcaf9b55c70e30cdbfa8f6b7d2d6e946562809bba69be554b66bb2f0ffcbc49d962774b2512a5c5914aab48b3eb_1280.jpg"
              title="Elegant Updo"
              description="Perfect for weddings and special occasions to make you feel glamorous."
              delay={0.2}
            />
            
            <GalleryItem 
              image="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              title="Luxury Nail Art"
              description="Custom nail designs that express your personal style and creativity."
              delay={0.3}
            />
            
            <GalleryItem 
              image="https://pixabay.com/get/g55b0b3e056453689ff74b735085ed666fc45bd0941f8e2e6774e8fae535d6463d64a31fbd6c37a63c95636fa33cce3ae4f4758b94da18b29acd7d84ba5ae68d6_1280.jpg"
              title="Revitalizing Facial"
              description="Our signature facial that leaves your skin glowing and rejuvenated."
              delay={0.4}
            />
            
            <GalleryItem 
              image="https://pixabay.com/get/gaec93e90e8c13d48128ea2e00db68ce590c1b4783abae7b1ca38e2d4dc00b8a802104ad4b7e2023580e7d53da614734fa57307d42350898453327cb85d58ca26_1280.jpg"
              title="Modern Men's Cut"
              description="Contemporary styles that keep you looking sharp and confident."
              delay={0.5}
            />
            
            <GalleryItem 
              image="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              title="Premium Products"
              description="We use and sell only the highest quality professional products for your hair and skin."
              delay={0.6}
            />
          </div>
          
          <AnimateInView variants={fadeInUp} className="text-center mt-12">
            <Link href="/gallery" className="inline-block btn-primary btn-large">
              View Full Gallery
            </Link>
          </AnimateInView>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}>
        <div className="absolute inset-0 bg-dark-blue bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateInView variants={fadeInUp} className="text-center mb-16" id="testimonials-title">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-2xl mx-auto">Hear what our clients have to say about their experiences at Luxe Salon & Spa.</p>
          </AnimateInView>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              rating={5}
              content={"I've been coming to Luxe for years and have never been disappointed. Sophia always knows exactly what I want, even when I'm not sure myself. The atmosphere is so relaxing and welcoming."}
              author="Jessica Miller"
              status="Regular Client - 5 years"
              delay={0.1}
            />
            
            <Testimonial 
              rating={5}
              content={"My experience at Luxe was absolutely amazing. The facial treatment with Emily completely transformed my skin. The attention to detail and personalized care sets them apart from other salons I've visited."}
              author="Robert Brown"
              status="New Client"
              delay={0.2}
            />
            
            <Testimonial 
              rating={5}
              content={"I booked a full spa day at Luxe to celebrate my anniversary, and it exceeded all expectations. The massage by David was incredible, and the staff made sure every moment was perfect. I'll definitely be coming back!"}
              author="Amanda Johnson"
              status="Regular Client - 2 years"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Contact & Appointment Section */}
      <section id="contact" className="py-20 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateInView variants={fadeInLeft} id="contact-info">
              <div className="drop-shadow-lg">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Get In Touch</h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
                <p className="text-lg mb-8">We'd love to hear from you. Visit us or get in touch to schedule your next appointment.</p>
                <div className="flex items-start mb-6">
                  <div className="text-gold text-2xl mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-bold mb-1">Visit Us</h4>
                    <p>123 Beauty Lane, Luxury District<br/>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="text-gold text-2xl mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-bold mb-1">Call Us</h4>
                    <p>(212) 555-7890</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="text-gold text-2xl mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-bold mb-1">Email Us</h4>
                    <p>info@luxesalon.com</p>
                  </div>
                </div>
                <div className="flex items-start mb-8">
                  <div className="text-gold text-2xl mr-4">
                    <i className="far fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-bold mb-1">Opening Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 8:00 PM<br/>
                    Saturday: 9:00 AM - 6:00 PM<br/>
                    Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-gold transition-all">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-gold transition-all">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-gold transition-all">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-gold transition-all">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </AnimateInView>
            
            {/* Appointment Form */}
            <AnimateInView variants={fadeInRight} id="appointment">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-playfair font-bold mb-6">Book an Appointment</h2>
                <form action="/api/appointments" method="post">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-dark-gray mb-2">Full Name</label>
                      <input type="text" id="name" name="name" className="custom-input" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-dark-gray mb-2">Email Address</label>
                      <input type="email" id="email" name="email" className="custom-input" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-dark-gray mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="custom-input" required />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-dark-gray mb-2">Preferred Date</label>
                      <input type="date" id="date" name="date" className="custom-input" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="time" className="block text-dark-gray mb-2">Preferred Time</label>
                      <input type="time" id="time" name="time" className="custom-input" required />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-dark-gray mb-2">Service</label>
                      <select id="service" name="service" className="custom-input" required>
                        <option value="">Select a Service</option>
                        <option value="haircut">Haircut & Styling</option>
                        <option value="color">Hair Coloring</option>
                        <option value="facial">Facial Treatment</option>
                        <option value="massage">Massage Therapy</option>
                        <option value="manicure">Manicure & Pedicure</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-dark-gray mb-2">Special Requests</label>
                    <textarea id="message" name="message" rows={4} className="custom-input"></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gold text-white py-3 rounded-md hover:bg-opacity-90 transition-all font-montserrat font-medium"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
