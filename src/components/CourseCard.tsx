
import { useState } from 'react';
import { Code, Database, Layout, Smartphone, BookOpen, Figma } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  icon: string;
  popular?: boolean;
}

const CourseCard = ({ title, description, level, duration, icon, popular = false }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = () => {
    switch(icon) {
      case 'code':
        return <Layout size={22} />;
      case 'database':
        return <Database size={22} />;
      case 'fullstack':
        return <Code size={22} />;
      case 'mobile':
        return <Smartphone size={22} />;
      case 'data-science':
        return <BookOpen size={22} />;
      case 'ui-ux':
        return <Figma size={22} />;
      default:
        return <Code size={22} />;
    }
  };

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-500 group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Popular
        </div>
      )}
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-500 ${isHovered ? 'bg-orange scale-110' : 'bg-codeblack-800'}`}>
            {renderIcon()}
          </div>
          <div className="flex items-center gap-2">
            <div className={`text-xs font-semibold px-2 py-1 rounded-full ${level === 'Beginner' ? 'bg-green-100 text-green-700' : level === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
              {level}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors duration-300">{title}</h3>
        
        <p className="text-codeblack-700 text-sm mb-6 flex-1">{description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-2">
          <div className="flex items-center text-sm text-codeblack-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
          
          <a 
            href="#" 
            className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? 'text-orange' : 'text-codeblack-800'}`}
          >
            View Course →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
