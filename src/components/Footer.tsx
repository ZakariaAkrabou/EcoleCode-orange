
import { Github, Twitter, Youtube, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-codeblack-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="font-bold text-xl">CodeMasters</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              Empowering the next generation of developers with cutting-edge curriculum and industry-aligned training.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Mobile Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">UX/UI Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Blockchain Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Game Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">Career Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300 text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-orange mr-3 mt-0.5" />
                <span className="text-gray-400 text-sm">hello@codemasters.edu</span>
              </li>
              <li className="flex items-start">
                <PhoneCall size={18} className="text-orange mr-3 mt-0.5" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start pt-2">
                <div className="bg-codeblack-800 p-4 rounded-lg w-full">
                  <h5 className="font-medium text-sm mb-2">Subscribe to our newsletter</h5>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="bg-codeblack-700 text-white text-sm px-3 py-2 rounded-l-md flex-1 focus:outline-none"
                    />
                    <button className="bg-orange hover:bg-orange-600 text-white px-3 py-2 rounded-r-md text-sm transition-colors duration-300">
                      Join
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 mt-12 border-t border-codeblack-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} CodeMasters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
