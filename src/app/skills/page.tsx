import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    title: "Asana Practice",
    subtitle: "Physical Postures",
    description: "Master the art of alignment and strength. From grounding Tadasana to restorative Savasana, we guide you through postures that enhance flexibility and stamina.",
    benefits: ["Improved Flexibility", "Joint Health", "Physical Strength"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Pranayama",
    subtitle: "Breath Control",
    description: "Breath is the bridge between body and mind. Learn rhythmic breathing techniques to reduce stress, improve lung capacity, and center your thoughts.",
    benefits: ["Stress Reduction", "Mental Clarity", "Energy Balance"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dhyana",
    subtitle: "Meditation",
    description: "Quiet the noise of the outside world. Our meditation sessions focus on mindfulness, helping you achieve a state of deep peace and self-awareness.",
    benefits: ["Inner Peace", "Emotional Stability", "Better Focus"],
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Vinyasa Flow",
    subtitle: "Dynamic Movement",
    description: "A rhythmic practice where movement is synchronized with breath. This dynamic style builds internal heat and improves cardiovascular health.",
    benefits: ["Cardio Health", "Mind-Body Flow", "Detoxification"],
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800"
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E8E1D5] py-4 px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#2D3E33]">
          SERENITY YOGA
        </Link>
        <div className="space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
          <Link href="/" className="hover:text-[#2D3E33] transition-colors">Home</Link>
          <Link href="/skills" className="text-[#2D3E33] border-b border-[#2D3E33]">Skills</Link>
          <Link href="/contact" className="hover:text-[#2D3E33] transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 px-8 text-center bg-white">
        <h1 className="text-5xl md:text-6xl font-light text-[#2D3E33] mb-4">Yoga Skills</h1>
        <p className="text-lg text-[#6B705C] max-w-2xl mx-auto font-sans">
          Explore the diverse disciplines and techniques we offer to help you reach your full potential.
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
        <h2 className="text-4xl font-light mb-8 italic">Ready to start your journey?</h2>
        <Link 
          href="/contact" 
          className="inline-block bg-[#FDFBF7] text-[#2D3E33] px-12 py-4 rounded-full hover:bg-white transition-all font-sans uppercase tracking-widest text-sm font-bold"
        >
          Book Your First Class
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2620] text-[#FDFBF7] py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter mb-8">SERENITY YOGA</div>
          <div className="flex justify-center space-x-8 mb-8 text-sm uppercase tracking-widest font-sans">
            <Link href="/" className="hover:text-[#A5A58D] transition-colors">Home</Link>
            <Link href="/skills" className="hover:text-[#A5A58D] transition-colors">Skills</Link>
            <Link href="/contact" className="hover:text-[#A5A58D] transition-colors">Contact</Link>
          </div>
          <p className="text-[#A5A58D] text-xs">© 2024 Serenity Yoga Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
