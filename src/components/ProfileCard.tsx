
interface ProfileCardProps {
  name: string;
  title: string;
  expertise: string[];
  bio: string;
}

const ProfileCard = ({ name, title, expertise, bio }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-greenLight">
      <div className="bg-greenLight py-4 px-6 border-b border-greenMedium/20">
        <h3 className="font-poppins font-semibold text-xl text-gray-800">{name}</h3>
        <p className="font-nunito text-greenDark">{title}</p>
      </div>
      
      <div className="p-6">
        <p className="font-nunito text-gray-700 mb-6">
          {bio}
        </p>
        
        <h4 className="font-poppins font-medium text-gray-800 mb-3">Areas of Expertise:</h4>
        <ul className="list-disc pl-5 space-y-1 font-nunito text-gray-700">
          {expertise.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
