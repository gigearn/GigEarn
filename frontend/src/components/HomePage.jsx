import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-light tracking-tight text-blue-900">Gig<b>Earn</b></h1>
            </div>
            <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-blue-600 hover:text-blue-900 font-medium text-sm tracking-wide transition-colors">For Workers</a>
              <a href="#" className="text-blue-600 hover:text-blue-900 font-medium text-sm tracking-wide transition-colors">For Stores</a>
              <a href="#" className="text-blue-600 hover:text-blue-900 font-medium text-sm tracking-wide transition-colors">About</a>
            </nav>
            <button className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-light text-blue-900 mb-8 leading-tight">
            Building India's
            <span className="block font-semibold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Most Reliable Workforce
            </span>
          </h1>
          <p className="text-xl text-blue-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            A progressive system where reliability compounds over time. From flexible gig work to stable employment, 
            we're building the foundation for India's next-generation workforce.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg">
              Join as Worker
            </button>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-base font-medium border border-blue-200 hover:bg-blue-50 transition-all">
              Register Store
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center mb-6">
              <span className="text-blue-700 font-light text-2xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Newcomers</h3>
            <p className="text-blue-700 mb-6 leading-relaxed">
              Begin your journey with flexible shift-based work while building your reliability profile.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></span>
                Flexible shift scheduling
              </div>
              <div className="flex items-center text-sm text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></span>
                Performance tracking
              </div>
              <div className="flex items-center text-sm text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></span>
                Reliability scoring
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-md border border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-blue-50/70 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <span className="text-blue-800 font-light text-2xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 relative z-10">Associated Workers</h3>
            <p className="text-blue-700 mb-6 leading-relaxed relative z-10">
              Earn priority access, premium rates, and stability through consistent performance.
            </p>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center text-sm text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                Priority shift access
              </div>
              <div className="flex items-center text-sm text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                Enhanced compensation
              </div>
              <div className="flex items-center text-sm text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                Benefits eligibility
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 opacity-75">
            <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center mb-6">
              <span className="text-blue-600 font-light text-2xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Employees</h3>
            <p className="text-blue-600 mb-6 leading-relaxed">
              Formal employment with comprehensive benefits and long-term security.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-blue-500">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></span>
                Full employment benefits
              </div>
              <div className="flex items-center text-sm text-blue-500">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></span>
                Career progression
              </div>
              <div className="flex items-center text-sm text-blue-500">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></span>
                Coming soon
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-blue-100 p-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-blue-900 mb-4">Platform Capabilities</h2>
            <p className="text-blue-700 text-lg">Enterprise-grade infrastructure for workforce management</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-700">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3 text-lg">Dual Confirmation System</h4>
                <p className="text-blue-700 leading-relaxed">OTP-verified attendance and delivery confirmation ensures complete reliability and accountability.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-700">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3 text-lg">Transparent Progression</h4>
                <p className="text-blue-700 leading-relaxed">Clear, rule-based advancement paths with visible reliability metrics and performance tracking.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-700">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3 text-lg">Smart Staffing</h4>
                <p className="text-blue-700 leading-relaxed">Pre-confirmed workforce allocation with intelligent matching for optimal shift coverage.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-700">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3 text-lg">Secure Logistics</h4>
                <p className="text-blue-700 leading-relaxed">DigiPIN and OTP-based delivery system for hyperlocal logistics with complete traceability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-light mb-6">Ready to Transform Workforce?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the platform that values consistency, rewards reliability, and builds careers
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-base font-medium hover:bg-blue-50 transition-all transform hover:scale-105">
                Start Building
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>


      <footer className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-t border-blue-100/50 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-blue-700 text-sm">© 2024 GigEarn. Workforce infrastructure for India's gig economy.</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">Terms</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
