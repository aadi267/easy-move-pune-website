
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";

const Reviews = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Patient Reviews
            </h1>
            <p className="font-nunito text-lg text-gray-700">
              What our patients say about their recovery journey with us
            </p>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Real Patient Stories"
            subtitle="Hear from those who've experienced our care firsthand"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Saurav Deshwal"
              text="Got cupping therapy for stiff back—felt relaxed instantly! The level of care and attention to detail was impressive. I've been recommending Dr. Rohit to all my colleagues."
            />
            
            <TestimonialCard
              name="Pratima Sangle"
              text="Chronic pain relief after months. Dr. Vanita explained everything clearly and created a treatment plan that actually worked for me. She listened to my concerns and tailored the approach to my needs."
            />
            
            <TestimonialCard
              name="Bisham Malkani"
              text="Very punctual and kind… knee pain vanished after just a few sessions. At my age, I didn't think I'd be this mobile again, but the team gave me hope and results!"
              age="82 yrs"
            />
            
            <TestimonialCard
              name="Prathamesh Ghule Patil"
              text="Rohit sir helped me return to football post ACL and tumor surgery. His sports-specific approach and understanding of an athlete's needs made all the difference in my recovery and return to the field."
              occupation="Footballer"
            />
            
            <TestimonialCard
              name="Punit Kumar"
              text="Expert in sports injuries. Highly recommend Dr. Rohit for any athlete looking to recover properly. The combination of techniques he used helped me get back to training in half the expected time."
            />
            
            <TestimonialCard
              name="Manish Varma"
              text="After a serious car accident, I thought I might never walk normally again. The team at Easy 2 Move designed a progressive rehabilitation program that got me back on my feet. Forever grateful!"
            />
          </div>
        </div>
      </section>

      {/* Recovery Success Stories */}
      <section className="py-16 bg-greenLight">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recovery Success Stories"
            subtitle="See the transformations our patients have experienced"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-greenMedium/20">
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3">
                From Wheelchair to Walking
              </h3>
              <p className="font-nunito text-gray-600 mb-4">
                "After my hip replacement surgery, I was afraid I wouldn't regain my independence. 
                Dr. Vanita's careful approach helped me progress from wheelchair to walker to walking 
                independently in just 8 weeks. Her encouragement kept me motivated throughout my recovery."
              </p>
              <div className="flex justify-between items-center">
                <span className="font-poppins font-medium text-gray-800">— Anjali Sharma</span>
                <span className="text-greenDark font-nunito text-sm">Post-Surgical Recovery</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-greenMedium/20">
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3">
                Back on the Field
              </h3>
              <p className="font-nunito text-gray-600 mb-4">
                "As a professional cricketer, my shoulder injury threatened my career. The sports 
                rehabilitation program Dr. Rohit designed not only healed my injury but actually improved 
                my throwing strength and accuracy. I'm now performing better than ever."
              </p>
              <div className="flex justify-between items-center">
                <span className="font-poppins font-medium text-gray-800">— Vikram Patel</span>
                <span className="text-greenDark font-nunito text-sm">Sports Rehabilitation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Stats */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Patients Choose Us"
            subtitle="Our commitment to excellence reflected in numbers"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-greenLight">
              <div className="text-4xl font-poppins font-bold text-greenDark mb-2">98%</div>
              <p className="font-nunito text-gray-700">Patient Satisfaction</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-greenLight">
              <div className="text-4xl font-poppins font-bold text-greenDark mb-2">500+</div>
              <p className="font-nunito text-gray-700">Athletes Treated</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-greenLight">
              <div className="text-4xl font-poppins font-bold text-greenDark mb-2">5000+</div>
              <p className="font-nunito text-gray-700">Successful Sessions</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-greenLight">
              <div className="text-4xl font-poppins font-bold text-greenDark mb-2">12+</div>
              <p className="font-nunito text-gray-700">Years Experience</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="font-poppins font-semibold text-lg text-gray-800 mb-6">
              Ready to start your recovery journey with us?
            </p>
            <button 
              onClick={() => alert("📞 Please call 07715957284 to book your slot at the nearest clinic.")}
              className="bg-greenDark hover:bg-green-700 text-white font-poppins font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Book Your Appointment Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
