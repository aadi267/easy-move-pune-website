
import SectionHeading from "@/components/SectionHeading";
import ProfileCard from "@/components/ProfileCard";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              About Our Clinic
            </h1>
            <p className="font-nunito text-lg text-gray-700">
              Meet our expert physiotherapists who are dedicated to improving your mobility and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Approach"
            subtitle="We believe in personalized care and long-term wellness solutions"
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="font-nunito text-gray-700 mb-6">
              At EASY 2 MOVE PHYSIO CLINIC, we understand that each patient has unique needs and challenges. 
              Our approach focuses on thorough assessment, personalized treatment plans, and education that 
              empowers you to take control of your health.
            </p>
            <p className="font-nunito text-gray-700 mb-6">
              With two convenient locations in Pune, our team of experienced physiotherapists combines 
              traditional techniques with modern innovations to provide the most effective care possible. 
              Whether you're recovering from an injury, managing chronic pain, or seeking to improve your 
              physical performance, we're here to support your journey.
            </p>
            <p className="font-nunito text-gray-700">
              Our services span across sports rehabilitation, elderly care, post-surgical recovery, and 
              specialized treatments like dry needling and cupping therapy. We take pride in our ability 
              to tailor each treatment to the individual needs of our patients, ensuring optimal results 
              and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-greenLight">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Specialists"
            subtitle="Experienced physiotherapists dedicated to your wellbeing"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProfileCard
              name="Dr. Rohit Shukla"
              title="Sports Physiotherapy Specialist"
              expertise={[
                "Dry Needling",
                "Kinesio Taping",
                "Athletic Periodisation",
                "Sports Injury Rehabilitation",
                "Consultant for Indian Army Rowing"
              ]}
              bio="Dr. Rohit Shukla is a national-level athlete turned physiotherapist with extensive experience in sports medicine. He holds a Master's in Sports Physiotherapy and has served as a consultant for Indian Army Rowing, Yonex tournaments, and national athletes. His unique approach combines athletic experience with medical expertise."
            />
            
            <ProfileCard
              name="Dr. Vanita Gaikwad"
              title="Chronic Pain & Senior Care Specialist"
              expertise={[
                "Geriatric Physiotherapy",
                "Chronic Pain Management",
                "Post-surgical Rehabilitation",
                "Holistic Healing Approaches",
                "Patient Education"
              ]}
              bio="Dr. Vanita Gaikwad specializes in chronic pain management and senior care. Known for her deep listening skills and tailored healing plans, she focuses on creating sustainable recovery programs for elderly patients and those with long-term pain conditions. Her compassionate approach helps patients achieve lasting results."
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="font-nunito text-xl text-gray-700 italic mb-8">
              "To provide accessible, expert physiotherapy care that empowers patients to move better, 
              feel better, and live better."
            </p>
            <div className="bg-beige p-8 rounded-lg shadow-md">
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4">
                Our Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4">
                  <h4 className="font-poppins font-medium text-greenDark mb-2">Excellence</h4>
                  <p className="font-nunito text-gray-700 text-sm">
                    Delivering the highest standard of care with continuous learning and improvement.
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-poppins font-medium text-greenDark mb-2">Compassion</h4>
                  <p className="font-nunito text-gray-700 text-sm">
                    Treating each patient with empathy, respect, and genuine concern for their wellbeing.
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-poppins font-medium text-greenDark mb-2">Empowerment</h4>
                  <p className="font-nunito text-gray-700 text-sm">
                    Educating patients to take control of their health journey and recovery process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
