
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { ActivitySquare, Dumbbell, HeartPulse, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <HeroSection />
      
      {/* Featured Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Specialized Services" 
            subtitle="We offer comprehensive physiotherapy solutions tailored to your specific needs"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Posture Correction"
              description="Specialized techniques to correct posture problems and prevent future complications."
              Icon={ActivitySquare}
            />
            <ServiceCard 
              title="Sports Injury Rehab"
              description="Expert care for athletes with personalized recovery programs."
              Icon={Dumbbell}
            />
            <ServiceCard 
              title="Pain Management"
              description="Effective treatments for back, neck, knee pain and other chronic conditions."
              Icon={HeartPulse}
            />
            <ServiceCard 
              title="Post-Surgical Care"
              description="Rehabilitation programs to support recovery after surgeries and procedures."
              Icon={Stethoscope}
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-greenDark hover:text-green-700 font-poppins font-medium"
            >
              View All Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Patients Say" 
            subtitle="Trusted by athletes, seniors, and everyone in between"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              name="Saurav Deshwal"
              text="Got cupping therapy for stiff back—felt relaxed instantly! The therapists really know what they're doing."
            />
            <TestimonialCard
              name="Pratima Sangle"
              text="Chronic pain relief after months. Dr. Vanita explained everything clearly and created a treatment plan that actually worked for me."
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/reviews" 
              className="inline-flex items-center text-greenDark hover:text-green-700 font-poppins font-medium"
            >
              Read More Reviews
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Instagram Preview (Optional) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Follow Us On Instagram" 
            subtitle="Stay updated with our latest treatments, patient success stories, and health tips"
          />
          
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/easy2move_physiotherapy_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-poppins font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              @easy2move_physiotherapy_clinic
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-greenLight">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="Expert care, personalized approach, and proven results"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-greenMedium/20">
              <div className="w-14 h-14 bg-greenMedium/20 rounded-full flex items-center justify-center mb-4 text-greenDark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-3 text-gray-800">Experienced Specialists</h3>
              <p className="font-nunito text-gray-600">
                Our expert team includes sports medicine specialists and senior care experts with years of experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-greenMedium/20">
              <div className="w-14 h-14 bg-greenMedium/20 rounded-full flex items-center justify-center mb-4 text-greenDark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-3 text-gray-800">Personalized Approach</h3>
              <p className="font-nunito text-gray-600">
                We create customized treatment plans tailored to your specific condition and recovery goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-greenMedium/20">
              <div className="w-14 h-14 bg-greenMedium/20 rounded-full flex items-center justify-center mb-4 text-greenDark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-3 text-gray-800">Modern Techniques</h3>
              <p className="font-nunito text-gray-600">
                We combine traditional therapy with advanced techniques like dry needling and cupping for better results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
