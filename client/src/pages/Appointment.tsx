import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '@/lib/animations';
import { AnimateInView } from '@/components/ui/animate-in-view';
import { Link } from 'wouter';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  stylist: string;
  message: string;
}

const services = [
  { id: 'haircut', name: 'Haircut & Styling' },
  { id: 'color', name: 'Hair Coloring' },
  { id: 'facial', name: 'Facial Treatment' },
  { id: 'massage', name: 'Massage Therapy' },
  { id: 'manicure', name: 'Manicure & Pedicure' },
  { id: 'waxing', name: 'Waxing & Hair Removal' }
];

const stylists = [
  { id: 'any', name: 'Any Available Stylist' },
  { id: 'sophia', name: 'Sophia Williams - Senior Stylist' },
  { id: 'marcus', name: 'Marcus Johnson - Barber & Stylist' },
  { id: 'emily', name: 'Emily Chen - Esthetician' },
  { id: 'david', name: 'David Rodriguez - Massage Therapist' },
  { id: 'jessica', name: 'Jessica Parker - Nail Technician' }
];

const Appointment = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AppointmentFormData>();
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);

  const appointmentMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      const response = await apiRequest('POST', '/api/appointments', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Request Received",
        description: "We'll contact you shortly to confirm your appointment.",
        variant: "default",
      });
      reset();
      setSuccess(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem submitting your appointment request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: AppointmentFormData) => {
    appointmentMutation.mutate(data);
  };

  // Get tomorrow's date for min date value
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <motion.div 
      className="pt-24 pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mb-16" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600')"}}>
        <div className="absolute inset-0 bg-dark-blue bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimateInView variants={fadeInUp} className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-white">Book an Appointment</h1>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-lg text-white">
              Schedule your visit to experience our premium salon and spa services.
            </p>
          </AnimateInView>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Appointment Information */}
          <AnimateInView variants={fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Your Luxe Experience</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="text-lg mb-8">
              We're excited to welcome you to Luxe Salon & Spa. Fill out the form to request your appointment, and our team will contact you to confirm your booking.
            </p>

            <div className="bg-dark-blue text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-6">Appointment Guidelines</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mr-4 mt-1"></i>
                  <span>Please arrive 10-15 minutes before your scheduled appointment.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mr-4 mt-1"></i>
                  <span>24-hour notice is required for cancellations to avoid a cancellation fee.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mr-4 mt-1"></i>
                  <span>First-time clients should arrive 15 minutes early to complete consultation forms.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mr-4 mt-1"></i>
                  <span>If you're more than 15 minutes late, we may need to reschedule your appointment.</span>
                </li>
              </ul>
            </div>

            <div className="bg-light-gray rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6">Salon Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-1">Monday - Friday:</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Saturday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Sunday:</p>
                  <p>10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </AnimateInView>
          
          {/* Appointment Form */}
          <AnimateInView variants={fadeInRight}>
            {success ? (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-gold text-5xl mb-6">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-4">Appointment Request Received</h2>
                <p className="text-lg mb-8">
                  Thank you for choosing Luxe Salon & Spa. We'll contact you shortly to confirm your appointment details.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => setSuccess(false)} 
                    className="btn-primary"
                  >
                    Book Another Appointment
                  </button>
                  <Link href="/" className="text-dark-blue hover:text-gold transition-all font-medium">
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-playfair font-bold mb-6">Book an Appointment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-dark-gray mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className={`custom-input ${errors.name ? 'border-red-500' : ''}`}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    <div>
                      <label htmlFor="date" className="block text-dark-gray mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        min={minDate}
                        className={`custom-input ${errors.date ? 'border-red-500' : ''}`}
                        {...register("date", { required: "Date is required" })}
                      />
                      {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="time" className="block text-dark-gray mb-2">Preferred Time</label>
                      <input 
                        type="time" 
                        id="time" 
                        className={`custom-input ${errors.time ? 'border-red-500' : ''}`}
                        {...register("time", { required: "Time is required" })}
                      />
                      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-dark-gray mb-2">Service</label>
                      <select 
                        id="service" 
                        className={`custom-input ${errors.service ? 'border-red-500' : ''}`}
                        {...register("service", { required: "Service is required" })}
                      >
                        <option value="">Select a Service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>{service.name}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="stylist" className="block text-dark-gray mb-2">Preferred Stylist</label>
                    <select 
                      id="stylist" 
                      className={`custom-input ${errors.stylist ? 'border-red-500' : ''}`}
                      {...register("stylist")}
                    >
                      {stylists.map(stylist => (
                        <option key={stylist.id} value={stylist.id}>{stylist.name}</option>
                      ))}
                    </select>
                    {errors.stylist && <p className="text-red-500 text-sm mt-1">{errors.stylist.message}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-dark-gray mb-2">Special Requests</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="custom-input"
                      {...register("message")}
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="w-full bg-gold text-white py-3 rounded-md hover:bg-opacity-90 transition-all font-montserrat font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={appointmentMutation.isPending}
                  >
                    {appointmentMutation.isPending ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Book Appointment"}
                  </motion.button>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    By booking an appointment, you agree to our cancellation policy and terms of service.
                  </p>
                </form>
              </div>
            )}
          </AnimateInView>
        </div>

        {/* Service Packages */}
        <AnimateInView variants={fadeInUp} className="mt-20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">Popular Service Packages</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-dark-blue text-white p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold">Relaxation Package</h3>
                <p className="text-lg font-medium mt-2">$180</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>60-Minute Swedish Massage</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Express Facial</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Classic Manicure</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Aromatherapy Scalp Massage</span>
                  </li>
                </ul>
                <div className="text-center">
                  <button onClick={() => window.location.href = '#appointment-form'} className="btn-primary">
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10">
              <div className="bg-gold text-white p-6 text-center">
                <span className="inline-block bg-white text-gold px-4 py-1 rounded-full text-sm font-bold mb-2">Most Popular</span>
                <h3 className="text-2xl font-playfair font-bold">Luxe Signature Experience</h3>
                <p className="text-lg font-medium mt-2">$275</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Haircut & Style</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Signature Facial</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>90-Minute Massage</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Luxury Manicure & Pedicure</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Complimentary Glass of Champagne</span>
                  </li>
                </ul>
                <div className="text-center">
                  <button onClick={() => window.location.href = '#appointment-form'} className="btn-primary">
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-dark-blue text-white p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold">Beauty Refresh</h3>
                <p className="text-lg font-medium mt-2">$150</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Haircut & Blow Dry</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Deep Conditioning Treatment</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Express Facial</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gold mr-3"></i>
                    <span>Eyebrow Shaping</span>
                  </li>
                </ul>
                <div className="text-center">
                  <button onClick={() => window.location.href = '#appointment-form'} className="btn-primary">
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </motion.div>
  );
};

export default Appointment;
