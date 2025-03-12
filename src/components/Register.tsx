import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const Register: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = [
    {
      id: "mortal",
      name: "Mortal",
      price: "₹499",
      features: [
        "Access to all keynote sessions",
        "Participation in Olympian Debates",
        "Symposium welcome kit",
        "Digital certificate"
      ],
      recommended: false
    },
    {
      id: "hero",
      name: "Hero",
      price: "₹999",
      features: [
        "All Mortal package benefits",
        "Participation in Herculean Tasks",
        "Access to Athena's Workshops",
        "Lunch on all days",
        "Exclusive PRANAV2K25 merchandise"
      ],
      recommended: true
    },
    {
      id: "demigod",
      name: "Demigod",
      price: "₹1499",
      features: [
        "All Hero package benefits",
        "VIP access to all events",
        "Participation in Icarus Challenge",
        "Gala dinner invitation",
        "One-on-one session with speakers",
        "Premium PRANAV2K25 merchandise"
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: "When and where will PRANAV2K25 take place?",
      answer: "PRANAV2K25 will be held from March 15-17, 2025, at the Apollo Campus, Olympus Building, Tech Park, Bangalore."
    },
    {
      question: "Is accommodation provided for participants?",
      answer: "Accommodation is not included in the registration packages. However, we have partnered with nearby hotels to offer special discounts for participants. Details will be shared after registration."
    },
    {
      question: "Can I register for specific events only?",
      answer: "No, our packages are designed to provide a comprehensive experience. However, the Mortal package allows access to keynote sessions and select events if you're unable to attend the full symposium."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, cancellations made 30 days before the event will receive a full refund minus processing fees. Cancellations within 30 days will receive a 50% refund. No refunds will be issued within 7 days of the event."
    },
    {
      question: "Can teams participate in the Icarus Challenge?",
      answer: "Yes, the Icarus Challenge is a team event. Teams of 2-4 members can participate, but each member must be registered individually (Hero or Demigod package)."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="register" className="py-20 bg-deep-blue relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Join the Odyssey
          </motion.h2>
          <motion.div
            className="h-1 w-24 mx-auto gold-gradient mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Embark on your heroic journey by registering for PRANAV2K25. Choose the package that best suits your quest for knowledge and innovation.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              className={`relative bg-deep-blue/70 border ${
                selectedPackage === pkg.id 
                  ? 'border-light-blue glowing-border' 
                  : pkg.recommended 
                    ? 'border-gold' 
                    : 'border-gold/30'
              } rounded-lg overflow-hidden`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 0 15px rgba(100, 255, 218, 0.15)',
                transition: { duration: 0.3 } 
              }}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-light-blue text-deep-blue text-xs font-bold px-3 py-1">
                  RECOMMENDED
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-cinzel font-bold text-gold mb-2">{pkg.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">/ person</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-light-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  className={`w-full py-3 rounded-md font-bold transition-colors ${
                    selectedPackage === pkg.id
                      ? 'bg-light-blue text-deep-blue'
                      : 'bg-transparent border border-gold text-gold hover:bg-gold/10'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-deep-blue/50 border border-gold/30 rounded-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-cinzel font-bold text-gold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gold/20 pb-4 last:border-b-0 last:pb-0"
              >
                <button 
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gold transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <motion.div 
                    className="mt-3 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;