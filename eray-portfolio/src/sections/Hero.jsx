
function Hero() {

  return(
    <section className="bg-[#0a0e17]/85 text-center px-12 pt-20 mb-8 pb-8">
      
      <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase-mb-7">
        ● Available for new projects
      </div>

      <h1 className="text-5xl font-bold text-white leading-tight tracking-tight mb-2">
        Building Digital Experiences<br />
        with <span className="text-emerald-400">Eray.</span>
      </h1>

      <p className="text-white/45 text-sm max-w-md mx-auto mt-4 mb-10 leading-relaxed">
        High-performance engineering specialized in architecting scalable,
        resilient cloud infrastructures for the modern web.
      </p>

      <div className="flex gap-3 justify-center">
        <button className="px-7 py-3 bg-blue-600 text-white text-sm font-medium rounded-md">
          View Projects
        </button>

        <button className="px-7 py-3 border border-white/15 text-white/70 text-sm rounded-md">
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;