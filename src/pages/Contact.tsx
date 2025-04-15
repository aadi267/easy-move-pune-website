
import SectionHeading from "@/components/SectionHeading";
import LocationCard from "@/components/LocationCard";
import { Instagram, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Contact & Locations
            </h1>
            <p className="font-nunito text-lg text-gray-700">
              Find us at our two convenient locations in Pune
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Clinic Locations"
            subtitle="Visit us at our two specialized physiotherapy centers in Pune"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <LocationCard
              title="Pashan Clinic"
              address="Office 303 - A, 3rd Floor, Sukhwani Boulevard, Pashan - Sus Rd, Sus, Pune 411021"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613474556897!2d73.7816823!3d18.5446361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf43d6e0830f%3A0xbf3af5f3b4426879!2sSukhwani%20Boulevard%2C%20Pashan%20-%20Sus%20Rd%2C%20Sus%2C%20Pune%2C%20Maharashtra%20411021!5e0!3m2!1sen!2sin!4v1651152320756!5m2!1sen!2sin"
            />
            
            <LocationCard
              title="Punawale Clinic"
              address="Shop No. 8, Sarisha Society, Malwadi, Punawale, Pimpri-Chinchwad, Pune 411033"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613474556897!2d73.7538948!3d18.5983245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb3cd7b93c75%3A0xbca490e2afe3d603!2sPunawale%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651152320756!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-greenLight">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get In Touch"
            subtitle="We're here to answer your questions and schedule your appointments"
          />
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-greenMedium/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-greenMedium/20">
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-greenDark mt-1" size={22} />
                    <div>
                      <p className="font-poppins font-medium text-gray-800 mb-1">
                        Phone
                      </p>
                      <p className="font-nunito text-gray-700">
                        07715957284
                      </p>
                      <p className="font-nunito text-gray-600 text-sm mt-1">
                        Call us to book appointments or inquire about services
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Instagram className="text-greenDark mt-1" size={22} />
                    <div>
                      <p className="font-poppins font-medium text-gray-800 mb-1">
                        Instagram
                      </p>
                      <a 
                        href="https://www.instagram.com/easy2move_physiotherapy_clinic" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-nunito text-gray-700 hover:text-greenDark transition-colors"
                      >
                        @easy2move_physiotherapy_clinic
                      </a>
                      <p className="font-nunito text-gray-600 text-sm mt-1">
                        Follow us for health tips and clinic updates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-6">
                  Clinic Hours
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="text-greenDark mt-1" size={20} />
                    <div>
                      <p className="font-poppins font-medium text-gray-800 mb-1">
                        Monday to Saturday
                      </p>
                      <p className="font-nunito text-gray-700">
                        9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-greenDark mt-1" size={20} />
                    <div>
                      <p className="font-poppins font-medium text-gray-800 mb-1">
                        Sunday
                      </p>
                      <p className="font-nunito text-gray-700">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-greenLight rounded-md">
                  <p className="font-nunito text-gray-700">
                    <span className="font-medium">Note:</span> For the most efficient service, we 
                    recommend calling ahead to book your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => alert("📞 Please call 07715957284 to book your slot at the nearest clinic.")}
              className="bg-greenDark hover:bg-green-700 text-white font-poppins font-semibold px-8 py-3 rounded-md transition-colors flex items-center gap-2 mx-auto"
            >
              <Phone size={20} />
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our services"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-beige/50 rounded-lg p-6 border border-beigeDark/20">
                <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                  Do I need a doctor's referral to see a physiotherapist?
                </h3>
                <p className="font-nunito text-gray-700">
                  No, you don't need a referral to book an appointment with us. However, if you're planning 
                  to claim expenses through insurance, some plans may require a referral. Please check with 
                  your insurance provider.
                </p>
              </div>
              
              <div className="bg-beige/50 rounded-lg p-6 border border-beigeDark/20">
                <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                  How long does a typical physiotherapy session last?
                </h3>
                <p className="font-nunito text-gray-700">
                  Initial consultations typically last around 45-60 minutes, while follow-up sessions 
                  usually last 30-45 minutes. The duration may vary depending on your specific condition 
                  and treatment needs.
                </p>
              </div>
              
              <div className="bg-beige/50 rounded-lg p-6 border border-beigeDark/20">
                <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                  What should I wear to my physiotherapy appointment?
                </h3>
                <p className="font-nunito text-gray-700">
                  Please wear comfortable, loose-fitting clothing that allows easy access to the area 
                  requiring treatment. For lower limb issues, shorts are recommended. For upper body 
                  issues, tank tops or t-shirts are suitable.
                </p>
              </div>
              
              <div className="bg-beige/50 rounded-lg p-6 border border-beigeDark/20">
                <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                  Do you provide home visits for patients who cannot travel?
                </h3>
                <p className="font-nunito text-gray-700">
                  Yes, we offer home visit services for patients who have mobility challenges or are 
                  recovering from surgery. Please call our clinic to discuss your needs and schedule 
                  a home visit appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
