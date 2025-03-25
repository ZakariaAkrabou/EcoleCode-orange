
import { useEffect, useRef } from 'react';

const Hero = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (codeRef.current) {
        const visibleLines = codeRef.current.querySelectorAll('.code-line:not(.visible)');
        if (visibleLines.length === 0) {
          clearInterval(typingInterval);
          return;
        }
        
        visibleLines[0].classList.add('visible');
      }
    }, 200);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative bg-white min-h-screen flex items-center pt-16">
      <div className="container-custom">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-10 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24 relative z-10">
          <div className="lg:pr-12 space-y-8 animate-slide-up [animation-delay:0.2s] opacity-0">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange rounded-full font-medium text-sm animate-fade-in [animation-delay:0.6s] opacity-0">
              Unlock Your Coding Potential
            </div>
            
            <h1 className="font-bold leading-tight">
              Master the Art of <span className="text-orange">Coding</span> with Expert Guidance
            </h1>
            
            <p className="text-lg text-codeblack-700 leading-relaxed">
              Join our comprehensive coding programs designed to transform beginners into professional developers. Learn at your own pace with hands-on projects and real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in [animation-delay:0.8s] opacity-0">
              <a href="#courses" className="btn-primary">
                Explore Courses
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>
            
            <div className="pt-6 flex items-center gap-8 flex-wrap text-sm text-codeblack-700">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flexible Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Job Placement</span>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12 animate-fade-in [animation-delay:0.4s] opacity-0">
            <div className="glass-card rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-codeblack-600 font-mono">script.js</div>
              </div>
              
              <div className="font-mono text-sm bg-codeblack-900 text-white p-4 rounded-lg overflow-hidden" ref={codeRef}>
                <pre className="language-javascript">
                  <code>
                    <div className="code-line text-orange">// Welcome to CodeMasters</div>
                    <div className="code-line text-blue-400">class <span className="text-green-400">Developer</span> {"{"}</div>
                    <div className="code-line pl-4 text-purple-400">constructor<span className="text-white">(</span><span className="text-orange-300">name, skills</span><span className="text-white">) {"{"}</span></div>
                    <div className="code-line pl-8"><span className="text-purple-400">this</span>.name = name;</div>
                    <div className="code-line pl-8"><span className="text-purple-400">this</span>.skills = skills;</div>
                    <div className="code-line pl-8"><span className="text-purple-400">this</span>.projects = [];</div>
                    <div className="code-line pl-4 text-white">{"}"}</div>
                    <div className="code-line pl-4 text-yellow-400">learnNewSkill<span className="text-white">(</span><span className="text-orange-300">skill</span><span className="text-white">) {"{"}</span></div>
                    <div className="code-line pl-8"><span className="text-purple-400">this</span>.skills.push(skill);</div>
                    <div className="code-line pl-8">console.<span className="text-blue-400">log</span>(<span className="text-green-300">{"`Learned ${skill}`"}</span>);</div>
                    <div className="code-line pl-4 text-white">{"}"}</div>
                    <div className="code-line text-white">{"}"}</div>
                    <div className="code-line text-blue-300">const <span className="text-white">you</span> = <span className="text-yellow-400">new</span> <span className="text-green-400">Developer</span>(<span className="text-green-300">{"'Your Name'"}</span>, []);</div>
                    <div className="code-line">you.<span className="text-yellow-400">learnNewSkill</span>(<span className="text-green-300">{"'JavaScript'"}</span>);</div>
                    <div className="code-line">you.<span className="text-yellow-400">learnNewSkill</span>(<span className="text-green-300">{"'React'"}</span>);</div>
                    <div className="code-line">you.<span className="text-yellow-400">learnNewSkill</span>(<span className="text-green-300">{"'Node.js'"}</span>);</div>
                    <div className="code-line text-gray-400">// Your coding journey begins here</div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Hero;
