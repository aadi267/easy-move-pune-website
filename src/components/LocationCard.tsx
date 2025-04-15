
interface LocationCardProps {
  title: string;
  address: string;
  mapUrl: string;
}

const LocationCard = ({ title, address, mapUrl }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight h-full">
      <div className="bg-greenLight py-3 px-5 border-b border-greenMedium/20">
        <h3 className="font-poppins font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      
      <div className="p-5">
        <p className="font-nunito text-gray-700 mb-4">
          {address}
        </p>
        
        <div className="rounded overflow-hidden h-60 mb-4">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${title}`}
          ></iframe>
        </div>
        
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-greenMedium hover:bg-greenDark text-white font-nunito font-medium py-2 text-center rounded-md transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
