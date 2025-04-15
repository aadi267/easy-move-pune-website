
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center' 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`mb-10 ${alignmentClasses[align]}`}>
      <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-nunito text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-greenMedium rounded mt-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
