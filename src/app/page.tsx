import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E8E1D5] py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-[#2D3E33]">
          SERENITY YOGA
        </div>
        <div className="space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
          <Link href="/" className="hover:text-[#2D3E33] transition-colors">Home</Link>
          <Link href="/skills" className="hover:text-[#2D3E33] transition-colors">Skills</Link>
          <Link href="/contact" className="hover:text-[#2D3E33] transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000"
            alt="Yoga Practice"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-[#2D3E33] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Find Your Balance
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-[#6B705C] font-sans font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Discover inner peace and physical strength at Serenity Yoga Center. 
            A sanctuary for your body and soul.
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Link 
              href="/skills" 
              className="bg-[#2D3E33] text-white px-8 py-3 rounded-full hover:bg-[#1a2620] transition-all font-sans uppercase tracking-widest text-xs"
            >
              Explore Skills
            </Link>
            <Link 
              href="/contact" 
              className="border border-[#2D3E33] text-[#2D3E33] px-8 py-3 rounded-full hover:bg-[#2D3E33] hover:text-white transition-all font-sans uppercase tracking-widest text-xs"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-8 text-[#2D3E33]">Our Philosophy</h2>
            <p className="text-lg leading-relaxed text-[#6B705C] mb-6">
              At Serenity Yoga, we believe yoga is more than just exercise; it's a journey back to yourself. 
              Our center provides a calm environment where you can explore ancient techniques adapted for modern life.
            </p>
            <p className="text-lg leading-relaxed text-[#6B705C]">
              Whether you're a beginner or an advanced practitioner, our skilled instructors guide you 
              through breath, movement, and meditation to achieve holistic well-being.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
              alt="Yoga Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-24 px-8 bg-[#F5F2ED]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-[#2D3E33]">Cultivate Your Practice</h2>
            <div className="h-1 w-20 bg-[#B7B7A4] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hatha Yoga", desc: "Balance your energy through physical postures and breathing.", img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=500" },
              { title: "Vinyasa Flow", desc: "Connect breath with fluid movements for a meditative state.", img: "https://images.unsplash.com/photo-1588244911075-8422f28148b3?auto=format&fit=crop&q=80&w=500" },
              { title: "Pranayama", desc: "Master the art of breath control to calm the mind.", img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=500" }
            ].map((skill, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={skill.img}
                    alt={skill.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2 text-[#2D3E33]">{skill.title}</h3>
                <p className="text-[#6B705C] font-sans text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3E33] text-[#FDFBF7] py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-6 tracking-tighter">SERENITY YOGA</h4>
            <p className="text-[#A5A58D] text-sm leading-relaxed">
              Empowering individuals through the ancient wisdom of yoga and modern wellness practices.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-sans font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#A5A58D]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-sans font-bold mb-6">Location</h4>
            <a 
              href="https://share.google/VTULjH4AgOt0jd4g9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#A5A58D] hover:text-white transition-colors text-sm"
            >
              Visit our Studio on Google Maps
            </a>
            <p className="mt-4 text-[#A5A58D] text-sm">
              123 Zen Path, Wellness Valley<br />
              Open Mon-Sun: 6:00 AM - 9:00 PM
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#3D5245] text-center text-[#A5A58D] text-xs">
          © 2024 Serenity Yoga Center. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
