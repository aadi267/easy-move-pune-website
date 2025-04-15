
import { useState } from "react";
import { Phone } from "lucide-react";

const BookAppointment = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    
    // Automatically hide message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <>
      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-greenDark hover:bg-green-700 text-white font-poppins font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl"
        >
          <Phone size={20} />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Popup Message */}
      {showMessage && (
        <div className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg border border-greenMedium max-w-xs z-50 animate-fade-in">
          <p className="font-nunito text-gray-800">
            <span className="font-semibold">📞 Please call 07715957284</span> to book your slot at the nearest clinic.
          </p>
          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default BookAppointment;
