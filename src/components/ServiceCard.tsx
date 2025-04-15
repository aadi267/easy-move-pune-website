
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-greenLight">
      <div className="bg-greenLight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-greenDark" />
      </div>
      <h3 className="text-xl font-poppins font-semibold text-gray-800 text-center mb-3">
        {title}
      </h3>
      <p className="text-gray-600 font-nunito text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
