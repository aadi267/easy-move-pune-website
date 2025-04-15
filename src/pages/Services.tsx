
import SectionHeading from "@/components/SectionHeading";
import { BandageIcon, Dumbbell, HeartPulse, ActivitySquare, Home, ThermometerIcon } from "lucide-react";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Our Services
            </h1>
            <p className="font-nunito text-lg text-gray-700">
              Comprehensive physiotherapy solutions for all your rehabilitation needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Specialized Physiotherapy Services"
            subtitle="Expert care for a wide range of conditions and rehabilitation needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Posture Correction */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-greenLight w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                    <ActivitySquare size={28} className="text-greenDark" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">
                      Posture Correction
                    </h3>
                    <p className="font-nunito text-gray-600 mb-4">
                      Poor posture can lead to pain, reduced mobility, and long-term complications. Our posture correction 
                      therapy addresses the root causes of misalignment and provides lasting solutions.
                    </p>
                    <ul className="space-y-2 font-nunito text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Comprehensive posture assessment
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Customized exercise programs
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Manual therapy for muscle tension
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Ergonomic advice for work and daily activities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sports Injury Rehab */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-greenLight w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                    <Dumbbell size={28} className="text-greenDark" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">
                      Sports Injury Rehabilitation
                    </h3>
                    <p className="font-nunito text-gray-600 mb-4">
                      Our sports rehabilitation programs are designed by Dr. Rohit Shukla, who combines his experience as 
                      a national athlete with his expertise in sports physiotherapy.
                    </p>
                    <ul className="space-y-2 font-nunito text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Expert assessment of sports injuries
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Specialized rehabilitation protocols
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Performance enhancement techniques
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Return-to-sport conditioning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Post-Surgical Physiotherapy */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-greenLight w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                    <BandageIcon size={28} className="text-greenDark" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">
                      Post-Surgical Physiotherapy
                    </h3>
                    <p className="font-nunito text-gray-600 mb-4">
                      Recovery after surgery requires specialized care to ensure optimal healing and return to function. 
                      Our post-surgical rehabilitation programs are designed to accelerate your recovery safely.
                    </p>
                    <ul className="space-y-2 font-nunito text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Early mobilization techniques
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Scar tissue management
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Progressive strength training
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Coordination with surgeons for optimal outcomes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Management */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-greenLight w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                    <HeartPulse size={28} className="text-greenDark" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">
                      Pain Management
                    </h3>
                    <p className="font-nunito text-gray-600 mb-4">
                      Chronic pain requires a multifaceted approach. Dr. Vanita Gaikwad specializes in creating effective 
                      pain management strategies for back pain, knee pain, neck pain, and other chronic conditions.
                    </p>
                    <ul className="space-y-2 font-nunito text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Holistic pain assessment
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Manual therapy techniques
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Therapeutic exercises
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Lifestyle modification guidance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Techniques */}
      <section className="py-16 bg-greenLight">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Specialized Techniques"
            subtitle="Advanced treatments to enhance your recovery"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-greenMedium/20">
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 text-center">
                Dry Needling
              </h3>
              <p className="font-nunito text-gray-600 text-center">
                A specialized technique that uses thin needles to release trigger points in muscles, 
                providing relief from pain and improving mobility.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-greenMedium/20">
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 text-center">
                Cupping Therapy
              </h3>
              <p className="font-nunito text-gray-600 text-center">
                An ancient technique that uses suction to increase blood flow, reduce muscle tension, 
                and promote healing in targeted areas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-greenMedium/20">
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 text-center">
                Manual Therapy
              </h3>
              <p className="font-nunito text-gray-600 text-center">
                Hands-on techniques to manipulate joints and soft tissue, improving mobility and reducing pain 
                through skilled therapeutic touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Visits */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-greenLight w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                    <Home size={36} className="text-greenDark" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-2xl text-gray-800 mb-3 text-center md:text-left">
                      Home Visit Services
                    </h3>
                    <p className="font-nunito text-gray-600 mb-4">
                      We understand that mobility can be challenging for some patients, especially after surgery 
                      or for elderly individuals. That's why we offer professional physiotherapy services in the 
                      comfort of your home.
                    </p>
                    <ul className="space-y-2 font-nunito text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Comprehensive in-home assessment
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Customized home exercise programs
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Environmental safety assessment
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-greenMedium mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Caregiver education and training
                      </li>
                    </ul>
                    <div className="mt-6 text-center md:text-left">
                      <button 
                        onClick={() => alert("📞 Please call 07715957284 to book your home visit.")}
                        className="bg-greenDark hover:bg-green-700 text-white font-poppins font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                      >
                        <ThermometerIcon size={20} />
                        Request Home Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
