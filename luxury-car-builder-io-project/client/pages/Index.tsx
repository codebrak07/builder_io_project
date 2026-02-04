import { ArrowRight, MapPin, Phone, Mail, Zap, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-red-500">APEX</span> Motors
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#cars" className="text-sm text-white/80 hover:text-red-500 transition-premium">Cars</a>
            <a href="#categories" className="text-sm text-white/80 hover:text-red-500 transition-premium">Categories</a>
            <a href="#why" className="text-sm text-white/80 hover:text-red-500 transition-premium">Why Us</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-red-500 transition-premium">Contact</a>
          </div>
          <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-black font-semibold text-sm transition-fast-premium hover:shadow-lg hover:shadow-red-500/30">
            Book Test Drive
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient blur effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-black to-black"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Drive the Future of <span className="text-red-500">Luxury</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our exclusive collection of premium and sports cars, handpicked for the most discerning drivers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-black font-bold text-lg transition-fast-premium flex items-center gap-2 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1">
              Explore Collection <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-lg transition-fast-premium border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
              Book a Test Drive
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-red-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Categories Section */}
      <section id="categories" className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Our Car Categories</h2>
            <p className="text-xl text-gray-400 leading-relaxed">Explore our curated selection of vehicle categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SUV Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-up stagger-1">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-premium">🚙</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 leading-tight">Performance SUV</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Luxury meets power. Experience premium comfort with powerful engines and cutting-edge technology.</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 group/btn hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Cars <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Sports Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 md:translate-y-8 animate-fade-up stagger-2">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-premium">🏎️</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 leading-tight">Sports Cars</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Pure adrenaline. Handpicked supercars and hypercars that deliver unmatched performance and prestige.</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 group/btn hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Cars <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Electric Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-up stagger-3">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-premium">⚡</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 leading-tight">Electric Vehicles</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">The future is now. Explore our range of eco-conscious luxury EVs with incredible range and performance.</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 group/btn hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Cars <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="cars" className="py-20 md:py-32 px-6 bg-gradient-to-b from-black via-black to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Featured Models</h2>
            <p className="text-xl text-gray-400 leading-relaxed">Handpicked excellence from around the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Car Card 1 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1 animate-fade-up stagger-1">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-105 transition-premium">🏁</div>
                <div className="absolute top-4 right-4 bg-red-500 text-black px-3 py-1 text-xs font-bold">Featured</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 leading-tight">Ferrari SF90</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">V12 Hybrid • 986 HP • 0-100 in 2.5s</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Featured Car Card 2 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1 animate-fade-up stagger-2">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-105 transition-premium">🚗</div>
                <div className="absolute top-4 right-4 bg-red-500 text-black px-3 py-1 text-xs font-bold">Featured</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 leading-tight">Lamborghini Revuelto</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">V12 Hybrid • 1016 HP • 0-100 in 2.5s</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Featured Car Card 3 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1 animate-fade-up stagger-3">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-105 transition-premium">⚡</div>
                <div className="absolute top-4 right-4 bg-red-500 text-black px-3 py-1 text-xs font-bold">Featured</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 leading-tight">Porsche Taycan</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">Electric • 938 HP • 0-100 in 2.8s</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Featured Car Card 4 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-premium hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1 animate-fade-up stagger-4">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-105 transition-premium">👑</div>
                <div className="absolute top-4 right-4 bg-red-500 text-black px-3 py-1 text-xs font-bold">Featured</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 leading-tight">Bugatti Bolide</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">W16 • 1600 HP • 0-100 in 2.17s</p>
                <button className="text-red-500 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-fast-premium hover:text-red-400">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Why Choose APEX Motors</h2>
            <p className="text-xl text-gray-400 leading-relaxed">Experience excellence in every way</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group hover:border-red-500/50 transition-premium hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-up stagger-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl -z-10 group-hover:bg-red-500/20 transition-premium"></div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-premium">
                <ShieldCheck className="text-red-500 group-hover:scale-110 transition-premium" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">Premium Brands</h3>
              <p className="text-gray-400 leading-relaxed">Carefully curated selection from the world's most prestigious automakers.</p>
            </div>

            {/* Benefit 2 */}
            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group hover:border-red-500/50 transition-premium hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-up stagger-2">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl -z-10 group-hover:bg-red-500/20 transition-premium"></div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-premium">
                <Users className="text-red-500 group-hover:scale-110 transition-premium" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">Trusted Dealers</h3>
              <p className="text-gray-400 leading-relaxed">Work with expert dealers who understand luxury and your specific needs.</p>
            </div>

            {/* Benefit 3 */}
            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group hover:border-red-500/50 transition-premium hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-up stagger-3">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl -z-10 group-hover:bg-red-500/20 transition-premium"></div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-premium">
                <Zap className="text-red-500 group-hover:scale-110 transition-premium" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">Easy Booking</h3>
              <p className="text-gray-400 leading-relaxed">Seamless test drive booking and flexible scheduling for your convenience.</p>
            </div>

            {/* Benefit 4 */}
            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group hover:border-red-500/50 transition-premium hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-up stagger-4">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl -z-10 group-hover:bg-red-500/20 transition-premium"></div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-premium">
                <TrendingUp className="text-red-500 group-hover:scale-110 transition-premium" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">Best Prices</h3>
              <p className="text-gray-400 leading-relaxed">Competitive pricing with flexible financing options for every budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have found their dream car with APEX Motors. Start your luxury car journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-black font-bold text-lg transition-fast-premium hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1">
              Get Started Now
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-lg transition-fast-premium border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="animate-fade-up">
              <div className="text-2xl font-bold mb-4">
                <span className="text-red-500">APEX</span> Motors
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Luxury and sports cars for the most discerning drivers.</p>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-up stagger-1">
              <h4 className="font-bold mb-4 leading-tight">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-premium">Home</a></li>
                <li><a href="#cars" className="text-gray-400 hover:text-red-500 transition-premium">Featured Cars</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-red-500 transition-premium">Categories</a></li>
                <li><a href="#why" className="text-gray-400 hover:text-red-500 transition-premium">About Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up stagger-2">
              <h4 className="font-bold mb-4 leading-tight">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2 hover:text-red-500 transition-premium">
                  <Phone size={16} className="text-red-500 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-red-500 transition-premium">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-2 hover:text-red-500 transition-premium">
                  <Mail size={16} className="text-red-500 flex-shrink-0" />
                  <a href="mailto:info@apexmotors.com" className="hover:text-red-500 transition-premium">info@apexmotors.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500 flex-shrink-0" />
                  <span>123 Luxury Lane, City, Country</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="animate-fade-up stagger-3">
              <h4 className="font-bold mb-4 leading-tight">Follow Us</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-white/10 hover:bg-red-500 text-white transition-premium hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center text-lg font-bold">
                  f
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-red-500 text-white transition-premium hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center text-lg font-bold">
                  X
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-red-500 text-white transition-premium hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center text-lg font-bold">
                  in
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-red-500 text-white transition-premium hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center text-lg font-bold">
                  📷
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>&copy; 2024 APEX Motors. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-red-500 transition-premium">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition-premium">Terms & Conditions</a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition-premium">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
