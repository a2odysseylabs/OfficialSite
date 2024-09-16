import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from './Pages/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        A2 Odyssey Labs
        </h1>
      </header>
      <main className="container mx-auto px-4 space-y-24">
        <section className="text-center space-y-6">
          <h2 className="text-5xl font-bold leading-tight">Welcome to A2 Odyssey Labs</h2>
          <p className="text-xl text-blue-300">Embark on a Journey of Digital Exploration</p>
          <p className="max-w-2xl mx-auto text-gray-300">
          At A2 Odyssey Labs, we transform ideas into captivating digital experiences. 
          Specializing in mobile app development, web experiences, and augmented reality (AR), 
          we are your partners in shaping the future of technology.
          </p>
        </section>
        
        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-300">
            To push the boundaries of digital interaction and create immersive, engaging, and innovative
            experiences that educate and entertain our audience.
          </p>
        </section>
        
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">Why Choose A2 Odyssey Labs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 space-y-4 transition-all hover:bg-white/10">
              <h3 className="text-2xl font-semibold text-blue-400">Exploration and Innovation</h3>
              <p className="text-gray-300">
                We are driven by a spirit of adventure and curiosity. Our team continuously explores new
                technologies and methodologies to bring you the most cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 space-y-4 transition-all hover:bg-white/10">
              <h3 className="text-2xl font-semibold text-blue-400">Tailored Experiences</h3>
              <p className="text-gray-300">
                Every project is a new journey. We customize our services to meet your unique needs, ensuring
                that the end product not only meets but exceeds your expectations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Mobile App Development", "Web Development", "Augmented Reality (AR) Solutions"].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-4 text-center transition-transform hover:scale-105">
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
            {["Discovery and Planning", "Design and Development", "Testing and Launch"].map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Join Us on This Journey</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Ready to embark on a digital voyage? Let's create something extraordinary together. Contact us
            today to start your journey with Voyage Innovate.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>info.a2odysseylabs@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>123 Innovation Lane, Tech City, TX 70001</span>
            </div>
          </div>
        </section>
        
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
      </section>
      </main>
      <footer className="container mx-auto px-4 py-8 mt-24 text-center text-gray-400">
        <p>&copy; 2024 A2 Odyssey Labs. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
