import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '@/lib/animations';
import { AnimateInView } from '@/components/ui/animate-in-view';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon!",
          variant: "default",
        });
        reset();
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="pt-24 pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mb-16" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600')"}}>
        <div className="absolute inset-0 bg-dark-blue bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimateInView variants={fadeInUp} className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-white">Contact Us</h1>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-lg text-white">
              We'd love to hear from you. Get in touch with our team for any questions or to schedule an appointment.
            </p>
          </AnimateInView>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimateInView variants={fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="text-lg mb-8">
              We're here to answer any questions you might have about our services, appointments, or products. Reach out to us using any of the contact methods below.
            </p>
            
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
            
            <div className="flex space-x-4 mb-8">
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

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-80 mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.8959090540896!2d-73.9851635849508!3d40.748440479327535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sph!4v1625136384620!5m2!1sen!2sph"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Map Location"
              ></iframe>
            </div>
          </AnimateInView>
          
          {/* Contact Form */}
          <AnimateInView variants={fadeInRight}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-playfair font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-dark-gray mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`custom-input ${errors.name ? 'border-red-500' : ''}`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-dark-gray mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`custom-input ${errors.email ? 'border-red-500' : ''}`}
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        } 
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-dark-gray mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className={`custom-input ${errors.phone ? 'border-red-500' : ''}`}
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-dark-gray mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={`custom-input ${errors.subject ? 'border-red-500' : ''}`}
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark-gray mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className={`custom-input ${errors.message ? 'border-red-500' : ''}`}
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gold text-white py-3 rounded-md hover:bg-opacity-90 transition-all font-montserrat font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </motion.button>
              </form>
            </div>
          </AnimateInView>
        </div>

        {/* FAQs Section */}
        <AnimateInView variants={fadeInUp} className="mt-20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-bold mb-3">Do you offer gift certificates?</h3>
              <p>Yes, we offer gift certificates in any denomination. They can be purchased in-store or by phone and are valid for one year from the date of purchase.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-bold mb-3">What if I need to cancel my appointment?</h3>
              <p>We require 24 hours notice for cancellations. Appointments cancelled with less than 24 hours notice may be subject to a cancellation fee.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-bold mb-3">How early should I arrive for my appointment?</h3>
              <p>We recommend arriving 10-15 minutes before your scheduled appointment to complete any necessary paperwork and relax before your service.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-bold mb-3">Do you sell the products used during services?</h3>
              <p>Yes, we retail all of the professional products used during our services. Our staff can recommend the best products for your specific needs.</p>
            </div>
          </div>
        </AnimateInView>
      </div>
    </motion.div>
  );
};

export default Contact;
