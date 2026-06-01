
import hitshopImage from "../assets/hitshop_image.png";

function Projects() {
  return(
    <section className="flex flex-col bg-[#121212]">

      <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase-mb-7 ml-16 mt-16 bg-[#121212]">
        PORTFOLIO EXCELLENCE
      </div>

      <div className="text-[#005AC2] font-mono text-5xl tracking-widest uppercase-mb-7 mt-4 ml-16 bg-[#121212]">
        Selected Projects.
      </div>

      <p className="text-white/100 ml-16 mt-4 bg-[#121212]">
      A collection of architectural software solutions, focusing on performance, scalability, and technical elegance.
      </p>

      <div className="grid md:grid-cols-2 gap-8 p-16">

        <div className="flex bg-[#0D1C2D] rounded-xl p-6">
          <img src={hitshopImage} alt="Hitshop" className="w-64 h-auto object-contain rounded-lg" />
          <p className="ml-8 text-white/100 text-sm mt-2">I developed a chatbot in this project</p>
        </div>

        <div className="flex bg-[#0D1C2D] rounded-xl p-6">
          <img src={hitshopImage} alt="Proje 2" className="w-64 h-auto object-contain rounded-lg" />
          <p className="ml-8 text-white/100 text-sm mt-2">Açıklama buraya</p>
        </div>

      </div>

    </section>
  );
}

export default Projects;