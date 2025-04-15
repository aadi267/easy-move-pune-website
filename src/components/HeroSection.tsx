
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-greenLight to-beige overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
              Expert Physiotherapy Care in Pune
            </h1>
            <p className="font-nunito text-lg text-gray-700 mb-6">
              Specialized treatment for sports injuries, chronic pain, and rehabilitation
              by experienced physiotherapists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-greenDark hover:bg-green-700 text-white font-poppins font-semibold px-6 py-3 rounded-md transition-colors inline-block text-center"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="bg-white hover:bg-gray-100 text-greenDark border border-greenDark font-poppins font-semibold px-6 py-3 rounded-md transition-colors inline-block text-center"
              >
                Find Our Clinics
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Physiotherapy session" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-greenLight hidden md:block">
                <p className="font-poppins font-semibold text-greenDark">
                  Two convenient locations in Pune
                </p>
                <p className="font-nunito text-sm text-gray-600">
                  Pashan & Punawale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
    </section>
  );
};

export default HeroSection;
