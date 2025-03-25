
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonial = ({ name, role, company, content, rating, image }: TestimonialProps) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-orange-400 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
      
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
      
      <blockquote className="mb-6 text-codeblack-700 text-sm flex-1">
        <p>"{content}"</p>
      </blockquote>
      
      <div className="flex items-center mt-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-orange/20">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-codeblack-900">{name}</h4>
          <div className="text-xs text-codeblack-600">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
