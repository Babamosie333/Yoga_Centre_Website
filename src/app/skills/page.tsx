import Link from "next/link";
import Image from "next/image";

const skills = [
    {
      title: "Spinal Alignment",
      subtitle: "Chiropractic Care",
      description: "Expert adjustments to correct spinal misalignments (subluxations). Our precise techniques restore proper nerve flow, reduce pain, and improve your body's innate healing ability.",
      benefits: ["Pain Relief", "Nervous System Health", "Improved Mobility"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Chiro-Yoga Fusion",
      subtitle: "Structural Flow",
      description: "A specialized yoga practice designed by chiropractors. We focus on postures that stabilize the spine and strengthen the core to maintain the benefits of your adjustments.",
      benefits: ["Spinal Stability", "Core Strength", "Long-term Maintenance"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Posture Rehabilitation",
      subtitle: "Corrective Exercise",
      description: "Personalized exercise programs to reverse the effects of modern lifestyle stressors. Learn how to carry your body with ease and prevent recurring injuries.",
      benefits: ["Better Posture", "Injury Prevention", "Ergonomic Awareness"],
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
    },
  {
    title: "Neuromuscular Therapy",
    subtitle: "Soft Tissue Balance",
    description: "Focused massage and trigger point therapy to release chronic tension. This prepares the muscles to support a properly aligned skeletal system.",
    benefits: ["Muscle Relaxation", "Better Circulation", "Reduced Tension"],
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=800"
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E8E1D5] py-4 px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#2D3E33]">
          RK CHIRO YOGA CENTRE
        </Link>
        <div className="space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
          <Link href="/" className="hover:text-[#2D3E33] transition-colors">Home</Link>
          <Link href="/skills" className="text-[#2D3E33] border-b border-[#2D3E33]">Skills</Link>
          <Link href="/contact" className="hover:text-[#2D3E33] transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 px-8 text-center bg-white">
        <h1 className="text-5xl md:text-6xl font-light text-[#2D3E33] mb-4">Our Skills & Techniques</h1>
        <p className="text-lg text-[#6B705C] max-w-2xl mx-auto font-sans">
          The perfect harmony of structural alignment and physical fluidity.
        </p>
      </header>

      {/* Skills Grid */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="space-y-24">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-sm uppercase tracking-[0.2em] text-[#B7B7A4] font-sans font-bold mb-4 block">
                  {skill.subtitle}
                </span>
                <h2 className="text-4xl font-light text-[#2D3E33] mb-6">{skill.title}</h2>
                <p className="text-lg text-[#6B705C] leading-relaxed mb-8">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {skill.benefits.map((benefit, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1 bg-[#F5F2ED] text-[#2D3E33] rounded-full text-xs font-sans uppercase tracking-widest"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D3E33] text-[#FDFBF7] text-center px-8 mt-16">
        <h2 className="text-4xl font-light mb-8 italic">Align your body, empower your life.</h2>
        <Link 
          href="/contact" 
          className="inline-block bg-[#FDFBF7] text-[#2D3E33] px-12 py-4 rounded-full hover:bg-white transition-all font-sans uppercase tracking-widest text-sm font-bold"
        >
          Book a Consultation
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2620] text-[#FDFBF7] py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter mb-8 uppercase">RK CHIRO YOGA CENTRE</div>
          <div className="flex justify-center space-x-8 mb-8 text-sm uppercase tracking-widest font-sans">
            <Link href="/" className="hover:text-[#A5A58D] transition-colors">Home</Link>
            <Link href="/skills" className="hover:text-[#A5A58D] transition-colors">Skills</Link>
            <Link href="/contact" className="hover:text-[#A5A58D] transition-colors">Contact</Link>
          </div>
          <p className="text-[#A5A58D] text-xs">© 2024 RK Chiro Yoga Centre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
