import { motion } from 'framer-motion';
import { fadeInUp, pageTransition } from '@/lib/animations';
import { AnimateInView } from '@/components/ui/animate-in-view';
import TeamMember from '@/components/TeamMember';

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "Sophia Williams",
    role: "Senior Stylist",
    description: "With over 10 years of experience, Sophia specializes in precision cutting and color transformations.",
    specialties: ["Hair Cutting", "Color Transformation", "Balayage", "Bridal Styling"],
    bio: "Sophia trained at the prestigious Vidal Sassoon Academy and has been a fixture at Luxe for 7 years. Her attention to detail and ability to create personalized styles make her one of our most requested stylists."
  },
  {
    image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "Marcus Johnson",
    role: "Barber & Stylist",
    description: "Marcus is known for his modern men's cuts and styling, specializing in fades and beard grooming.",
    specialties: ["Men's Cuts", "Beard Grooming", "Hot Towel Shaves", "Fades"],
    bio: "Marcus brings a fresh perspective to traditional barbering with his contemporary techniques and eye for detail. His loyal clientele appreciates his ability to blend classic style with modern trends."
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "Emily Chen",
    role: "Esthetician",
    description: "Emily is our skincare expert with certifications in advanced facial treatments and skin rejuvenation.",
    specialties: ["Customized Facials", "Chemical Peels", "Microdermabrasion", "Anti-Aging Treatments"],
    bio: "Emily's holistic approach to skincare combines Eastern and Western techniques for remarkable results. Her expertise in treating various skin conditions has earned her a devoted following."
  },
  {
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "David Rodriguez",
    role: "Massage Therapist",
    description: "David combines traditional and modern massage techniques to provide therapeutic and relaxing experiences.",
    specialties: ["Deep Tissue", "Swedish Massage", "Hot Stone Therapy", "Sports Massage"],
    bio: "With a background in physical therapy and advanced training in multiple massage modalities, David tailors each session to address his clients' specific needs and concerns."
  },
  {
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "Jessica Parker",
    role: "Nail Technician",
    description: "Jessica creates stunning nail art and provides immaculate manicure and pedicure services.",
    specialties: ["Gel Manicures", "Nail Art", "Luxury Pedicures", "Acrylic Extensions"],
    bio: "Jessica's creative flair and meticulous attention to detail shine through in her nail services. Her custom nail art has been featured in several fashion magazines."
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "Lauren Smith",
    role: "Color Specialist",
    description: "Lauren creates vibrant, personalized hair colors from subtle highlights to bold fashion colors.",
    specialties: ["Balayage", "Ombre", "Vivid Colors", "Color Correction"],
    bio: "Lauren's eye for color and technical precision make her the go-to stylist for clients seeking anything from natural-looking highlights to vibrant fashion colors. She regularly attends international color workshops to stay at the forefront of trends."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    name: "Michael Thompson",
    role: "Salon Director",
    description: "Michael oversees operations while still taking select clients for cutting and styling services.",
    specialties: ["Precision Cutting", "Hair Styling", "Team Development", "Client Relations"],
    bio: "With over 15 years in the industry, Michael brings both technical expertise and business acumen to his role as Salon Director. He's passionate about developing new talent and ensuring every client receives an exceptional experience."
  }
];

const Team = () => {
  return (
    <motion.div 
      className="pt-24 pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section - Paint Cup Circle */}
      <section className="relative h-96 bg-cover bg-center mb-16" style={{backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}>
        <div className="absolute inset-0 bg-gray-400 bg-opacity-40"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="relative w-[400px] h-[400px]">
            {/* Paint Cups Circle - smaller version */}
            {Array.from({ length: 18 }).map((_, index) => {
              const angle = (index * 20) * (Math.PI / 180);
              const radius = 180;
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
                  className={`absolute w-12 h-12 rounded-full ${colors[index % colors.length]} border-2 border-white`}
                  style={{ 
                    left: `${left - 24}px`, 
                    top: `${top - 24}px`,
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
            {Array.from({ length: 8 }).map((_, index) => {
              const colors = [
                'bg-pink-300', 'bg-blue-400', 'bg-green-300', 'bg-yellow-300', 
                'bg-orange-300', 'bg-purple-300', 'bg-indigo-400', 'bg-teal-300'
              ];
              
              const randomLeft = 180 + (Math.random() * 200 - 100);
              const height = 50 + Math.random() * 100;
              
              return (
                <motion.div 
                  key={`drip-${index}`}
                  className={`absolute w-1.5 ${colors[index % colors.length]}`}
                  style={{ 
                    left: `${randomLeft}px`, 
                    top: '80px',
                    height: `${height}px`,
                    zIndex: 10
                  }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${height}px`, opacity: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                />
              );
            })}
            
            {/* White circle in the middle with TEAM text */}
            <motion.div 
              className="absolute inset-0 mx-auto my-auto w-[220px] h-[220px] bg-white bg-opacity-80 rounded-full flex items-center justify-center z-30"
              style={{ 
                left: '50%', 
                top: '50%', 
                transform: 'translate(-50%, -50%)' 
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h1 className="text-6xl font-light tracking-widest text-gray-700">TEAM</h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <AnimateInView variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Artists</h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our team of dedicated professionals combines technical expertise with artistic vision to deliver exceptional results tailored to each client's unique style and preferences.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* Team Member Details */}
        {teamMembers.map((member, index) => (
          <AnimateInView 
            key={index}
            variants={fadeInUp} 
            className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden"
            delay={0.1 * index}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-playfair font-bold mb-2">{member.name}</h3>
                <p className="text-gold font-montserrat font-medium mb-4">{member.role}</p>
                <p className="text-dark-gray mb-6">{member.bio}</p>
                
                <h4 className="text-lg font-playfair font-bold mb-3">Specialties:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.specialties.map((specialty, i) => (
                    <span 
                      key={i}
                      className="bg-light-gray text-dark-gray px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <button className="btn-primary">
                  Book with {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </AnimateInView>
        ))}

        {/* Join Our Team */}
        <AnimateInView variants={fadeInUp} className="bg-light-gray rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-4">Join Our Team</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-lg mb-6">
                We're always looking for talented, passionate professionals to join the Luxe family. If you're committed to excellence and creating exceptional experiences for clients, we'd love to hear from you.
              </p>
              <button className="btn-primary">
                View Career Opportunities
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Salon Team Working Together"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </AnimateInView>
      </div>
    </motion.div>
  );
};

export default Team;
