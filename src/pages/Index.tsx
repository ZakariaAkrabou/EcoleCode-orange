import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { CheckCircle, Code, Database, Layout, Smartphone, Terminal, Figma, Book, Award, Users, Cpu, Globe, Braces, Layers, GitBranch, CloudCog } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    courses: false,
    about: false,
    testimonials: false,
    stats: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["courses", "about", "testimonials", "stats", "cta"];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    {
      title: "Front-End Web Development",
      description: "Master the core technologies behind modern web development: HTML, CSS, and JavaScript frameworks.",
      level: "Beginner",
      duration: "12 Weeks",
      icon: "code",
      popular: true
    },
    {
      title: "Back-End Development",
      description: "Build robust server-side applications with Node.js, Express, databases, and API development.",
      level: "Intermediate",
      duration: "14 Weeks",
      icon: "database"
    },
    {
      title: "Full-Stack Development",
      description: "Comprehensive training in both front-end and back-end technologies to become a versatile developer.",
      level: "Advanced",
      duration: "16 Weeks",
      icon: "fullstack",
      popular: true
    },
    {
      title: "Mobile App Development",
      description: "Learn to build native and cross-platform mobile applications for iOS and Android.",
      level: "Intermediate",
      duration: "14 Weeks",
      icon: "mobile"
    },
    {
      title: "Data Science & Machine Learning",
      description: "Dive into data analysis, visualization, and machine learning with Python and specialized libraries.",
      level: "Advanced",
      duration: "16 Weeks",
      icon: "data-science"
    },
    {
      title: "UI/UX Design for Developers",
      description: "Learn design principles, tools, and techniques to create beautiful and functional user interfaces.",
      level: "Beginner",
      duration: "10 Weeks",
      icon: "ui-ux"
    }
  ];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Front-End Developer",
      company: "TechCorp",
      content: "The front-end development course completely transformed my career. Within three months of completing it, I landed my dream job. The hands-on projects and mentor support were invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "Full-Stack Developer",
      company: "StartupFlow",
      content: "I tried several online platforms before finding CodeMasters. The difference is night and day. The curriculum is comprehensive, challenging, and completely up-to-date with industry standards.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Priya Patel",
      role: "Mobile Developer",
      company: "AppWorks",
      content: "The mobile development bootcamp exceeded all my expectations. The instructors were experienced industry professionals who provided valuable insights beyond just the technical aspects.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Courses Section */}
      <section id="courses" className={`section-padding bg-gray-50 transition-all duration-1000 ${isVisible.courses ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange rounded-full font-medium text-sm mb-4">
              Our Curriculum
            </div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Courses for Modern Developers</h2>
            <p className="text-codeblack-700">
              Our industry-aligned curriculum is designed to equip you with the skills and knowledge needed in today's tech landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="btn-outline">
              View All Courses
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={`section-padding transition-all duration-1000 ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange rounded-full font-medium text-sm mb-4">
                Why Choose Us
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Unlock Your Potential with Our Expert-Led Coding Education</h2>
              
              <p className="text-codeblack-700 mb-8">
                At CodeMasters, we're more than just a coding school. We're a career launchpad designed to transform aspiring developers into industry-ready professionals through hands-on learning and personalized mentorship.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Industry-Experienced Instructors</h3>
                    <p className="text-codeblack-700 text-sm mt-1">
                      Learn from developers who have worked at top tech companies and bring real-world experience to the classroom.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Project-Based Curriculum</h3>
                    <p className="text-codeblack-700 text-sm mt-1">
                      Build a professional portfolio with real projects that demonstrate your skills to potential employers.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Career Support & Placement</h3>
                    <p className="text-codeblack-700 text-sm mt-1">
                      Get personalized career coaching, resume reviews, interview prep, and access to our hiring partner network.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Flexible Learning Options</h3>
                    <p className="text-codeblack-700 text-sm mt-1">
                      Choose between full-time, part-time, and self-paced programs designed to fit your schedule and learning style.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="#contact" className="btn-primary">Start Your Journey</a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Coding classroom" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange/20 rounded-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-codeblack-900 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats" className={`py-16 bg-codeblack-900 text-white transition-all duration-1000 ${isVisible.stats ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-orange text-4xl font-bold">5000+</div>
              <div className="text-sm text-gray-400">Students Enrolled</div>
            </div>
            <div className="space-y-2">
              <div className="text-orange text-4xl font-bold">95%</div>
              <div className="text-sm text-gray-400">Job Placement Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-orange text-4xl font-bold">50+</div>
              <div className="text-sm text-gray-400">Industry Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-orange text-4xl font-bold">25+</div>
              <div className="text-sm text-gray-400">Specialized Courses</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className={`section-padding bg-gray-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange rounded-full font-medium text-sm mb-4">
              Student Testimonials
            </div>
            <h2 className="text-3xl font-bold mb-6">Success Stories from Our Graduates</h2>
            <p className="text-codeblack-700">
              Our students come from diverse backgrounds but share a common goal: to transform their careers through coding education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange rounded-full font-medium text-sm mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold mb-6">A Comprehensive Learning Experience</h2>
            <p className="text-codeblack-700">
              We believe in a holistic approach to coding education that goes beyond just teaching syntax.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Coding</h3>
              <p className="text-sm text-codeblack-700">Build real projects from day one with guidance from industry experts who provide personalized feedback.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange mb-4">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
              <p className="text-sm text-codeblack-700">Stay ahead with a constantly updated curriculum that focuses on the most in-demand technologies and skills.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-world Problems</h3>
              <p className="text-sm text-codeblack-700">Tackle challenges modeled after real industry scenarios to develop practical problem-solving skills.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
              <p className="text-sm text-codeblack-700">Join a supportive community of learners and mentors who collaborate and help each other grow.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Portfolio</h3>
              <p className="text-sm text-codeblack-700">Graduate with a professional portfolio of projects that demonstrate your capabilities to employers.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Services</h3>
              <p className="text-sm text-codeblack-700">Receive personalized career coaching, interview prep, and connections to our hiring partner network.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies We Teach Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange rounded-full font-medium text-sm mb-4">
              Technologies We Teach
            </div>
            <h2 className="text-3xl font-bold mb-6">Master the Most In-Demand Tech Skills</h2>
            <p className="text-codeblack-700">
              Our curriculum covers a wide range of technologies that are highly sought after in the industry today.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Frontend */}
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Braces size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">HTML/CSS</h3>
              <p className="text-xs text-codeblack-600">The foundation of web development</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
              <p className="text-xs text-codeblack-600">Dynamic web programming language</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Layout size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">React</h3>
              <p className="text-xs text-codeblack-600">UI library for building interfaces</p>
            </div>
            
            {/* Backend */}
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Node.js</h3>
              <p className="text-xs text-codeblack-600">Server-side JavaScript runtime</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">SQL/NoSQL</h3>
              <p className="text-xs text-codeblack-600">Database management systems</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">RESTful APIs</h3>
              <p className="text-xs text-codeblack-600">Interface architecture for web services</p>
            </div>
            
            {/* Tools & Others */}
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <GitBranch size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Git & GitHub</h3>
              <p className="text-xs text-codeblack-600">Version control and collaboration</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <CloudCog size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">DevOps</h3>
              <p className="text-xs text-codeblack-600">CI/CD and deployment automation</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">React Native</h3>
              <p className="text-xs text-codeblack-600">Cross-platform mobile development</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Figma size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-xs text-codeblack-600">Design principles and tools</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI & ML</h3>
              <p className="text-xs text-codeblack-600">Artificial intelligence basics</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:border-orange/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange mx-auto mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">TypeScript</h3>
              <p className="text-xs text-codeblack-600">JavaScript with static typing</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className={`py-24 bg-gradient-to-r from-codeblack-900 to-codeblack-800 text-white transition-all duration-1000 ${isVisible.cta ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
            <p className="text-gray-300 mb-10">
              Join thousands of successful graduates who have transformed their careers through our cutting-edge curriculum and expert instruction.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Course of Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange">
                    <option value="" className="bg-codeblack-800">Select a course</option>
                    <option value="front-end" className="bg-codeblack-800">Front-End Development</option>
                    <option value="back-end" className="bg-codeblack-800">Back-End Development</option>
                    <option value="full-stack" className="bg-codeblack-800">Full-Stack Development</option>
                    <option value="mobile" className="bg-codeblack-800">Mobile App Development</option>
                    <option value="data-science" className="bg-codeblack-800">Data Science & ML</option>
                    <option value="ui-ux" className="bg-codeblack-800">UI/UX Design</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange h-24"
                  placeholder="Tell us about your goals and background"
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button className="bg-orange hover:bg-orange-600 text-white py-3 px-8 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

