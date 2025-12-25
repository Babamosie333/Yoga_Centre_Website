import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif">
      {/* Navigation */}
        <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E8E1D5] py-4 px-8 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-[#2D3E33]">
            RK CHIRO YOGA CENTRE
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
              src="https://images.unsplash.com/photo-1591154719677-62a3d74c402f?auto=format&fit=crop&q=80&w=2000"
              alt="Chiropractic Care"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-[#2D3E33] animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Align Your Spine, Find Your Flow
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-[#6B705C] font-sans font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Expert chiropractic care meets traditional yoga. 
              Restore your natural alignment and revitalize your spirit at RK Chiro Yoga Centre.
            </p>
            <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <Link 
                href="/skills" 
                className="bg-[#2D3E33] text-white px-8 py-3 rounded-full hover:bg-[#1a2620] transition-all font-sans uppercase tracking-widest text-xs"
              >
                Our Techniques
              </Link>
              <Link 
                href="/contact" 
                className="border border-[#2D3E33] text-[#2D3E33] px-8 py-3 rounded-full hover:bg-[#2D3E33] hover:text-white transition-all font-sans uppercase tracking-widest text-xs"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 text-[#2D3E33]">A Holistic Path to Wellness</h2>
              <p className="text-lg leading-relaxed text-[#6B705C] mb-6">
                At RK Chiro Yoga Centre, we bridge the gap between structural integrity and physical fluidity. 
                Our unique approach combines precise chiropractic adjustments with targeted yoga practices.
              </p>
              <p className="text-lg leading-relaxed text-[#6B705C]">
                By focusing on spinal health and core strength, we help you overcome chronic pain 
                and achieve a state of lasting balance and vitality.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=1000"
                alt="Chiropractic Treatment"
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
              <h2 className="text-4xl font-light mb-4 text-[#2D3E33]">Our Core Specialties</h2>
              <div className="h-1 w-20 bg-[#B7B7A4] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Spinal Adjustment", desc: "Precise chiropractic techniques to restore proper nerve function.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
                { title: "Chiro-Yoga Flow", desc: "Yoga sequences specifically designed to complement spinal care.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" },
                { title: "Posture Correction", desc: "Expert guidance to improve your daily alignment and reduce strain.", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800" }
              ].map((skill, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={skill.img}
                      alt={skill.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <h4 className="text-xl font-bold mb-6 tracking-tighter uppercase">RK CHIRO YOGA CENTRE</h4>
              <p className="text-[#A5A58D] text-sm leading-relaxed">
                Dedicated to spinal health and holistic wellness through the synergy of chiropractic care and yoga.
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-sans font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-[#A5A58D]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-sans font-bold mb-6">Find Us</h4>
              <a 
                href="https://share.google/VTULjH4AgOt0jd4g9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A5A58D] hover:text-white transition-colors text-sm underline decoration-[#3D5245]"
              >
                Google Maps Location
              </a>
              <p className="mt-4 text-[#A5A58D] text-sm">
                RK Chiro Yoga Centre<br />
                Open Mon-Sun: 6:00 AM - 9:00 PM
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#3D5245] text-center text-[#A5A58D] text-xs">
            © 2024 RK Chiro Yoga Centre. All rights reserved.
          </div>
        </footer>
    </div>
  );
}
