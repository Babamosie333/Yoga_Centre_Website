import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E8E1D5] py-4 px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#2D3E33]">
          SERENITY YOGA
        </Link>
        <div className="space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
          <Link href="/" className="hover:text-[#2D3E33] transition-colors">Home</Link>
          <Link href="/skills" className="hover:text-[#2D3E33] transition-colors">Skills</Link>
          <Link href="/contact" className="text-[#2D3E33] border-b border-[#2D3E33]">Contact</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 px-8 text-center bg-white">
        <h1 className="text-5xl md:text-6xl font-light text-[#2D3E33] mb-4">Get in Touch</h1>
        <p className="text-lg text-[#6B705C] max-w-2xl mx-auto font-sans">
          Have questions or want to join a session? We're here to help you on your path to wellness.
        </p>
      </header>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light text-[#2D3E33] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F2ED] rounded-full text-[#2D3E33]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Our Studio</h3>
                    <a 
                      href="https://share.google/VTULjH4AgOt0jd4g9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#6B705C] hover:text-[#2D3E33] transition-colors underline decoration-[#B7B7A4]"
                    >
                      Find us on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F2ED] rounded-full text-[#2D3E33]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Email Us</h3>
                    <a 
                      href="mailto:hello@serenityyoga.com" 
                      className="text-[#6B705C] hover:text-[#2D3E33] transition-colors"
                    >
                      hello@serenityyoga.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F2ED] rounded-full text-[#2D3E33]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Call Us</h3>
                    <p className="text-[#6B705C]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F2ED] rounded-full text-[#2D3E33]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Studio Hours</h3>
                    <p className="text-[#6B705C]">Mon - Fri: 6:00 AM - 9:00 PM</p>
                    <p className="text-[#6B705C]">Sat - Sun: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Mail Button */}
            <div className="p-8 bg-[#2D3E33] rounded-2xl text-[#FDFBF7]">
              <h3 className="text-2xl font-light mb-4 italic text-white">Direct Inquiry</h3>
              <p className="text-[#A5A58D] mb-6 font-sans text-sm">
                Click the button below to send us a quick email regarding classes or memberships.
              </p>
              <a 
                href="mailto:hello@serenityyoga.com?subject=Inquiry about Yoga Classes" 
                className="inline-block w-full text-center bg-[#FDFBF7] text-[#2D3E33] py-4 rounded-xl hover:bg-white transition-all font-sans uppercase tracking-widest text-xs font-bold"
              >
                Send Email Now
              </a>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#E8E1D5]">
            <h2 className="text-3xl font-light text-[#2D3E33] mb-8">Send a Message</h2>
            <form className="space-y-6 font-sans" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#6B705C]">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-[#FDFBF7] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#2D3E33] transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#6B705C]">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-[#FDFBF7] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#2D3E33] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#6B705C]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-[#FDFBF7] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#2D3E33] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#6B705C]">Message</label>
                <textarea 
                  rows={5}
                  className="w-full p-3 bg-[#FDFBF7] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#2D3E33] transition-colors resize-none"
                  placeholder="Tell us about your yoga journey..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#2D3E33] text-white py-4 rounded-xl hover:bg-[#1a2620] transition-all uppercase tracking-widest text-xs font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2620] text-[#FDFBF7] py-12 px-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#A5A58D] text-xs">© 2024 Serenity Yoga Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
