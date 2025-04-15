
interface TestimonialCardProps {
  name: string;
  text: string;
  age?: string;
  occupation?: string;
}

const TestimonialCard = ({ name, text, age, occupation }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-greenLight">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg
            className="w-8 h-8 text-greenMedium opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        
        <p className="text-gray-600 font-nunito mb-4 flex-grow">
          {text}
        </p>
        
        <div>
          <p className="font-poppins font-medium text-gray-800">{name}</p>
          {(age || occupation) && (
            <p className="text-gray-500 font-nunito text-sm">
              {age && <span>{age} {occupation && '• '}</span>}
              {occupation && <span>{occupation}</span>}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
