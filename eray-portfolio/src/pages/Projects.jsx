import hitshopImage from "../assets/hitshop_image.png";

function Projects() {
  return(
    <section className="flex flex-col bg-[#121212]">
      
      <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-7 ml-6 md:ml-16 mt-16 bg-[#121212]">
        PORTFOLIO EXCELLENCE
      </div>
      
      <div className="text-[#005AC2] font-mono text-3xl md:text-5xl tracking-widest uppercase mb-7 mt-4 ml-6 md:ml-16 bg-[#121212]">
        Selected Projects.
      </div>
      
      <p className="text-white ml-6 md:ml-16 mt-4 pr-6 md:pr-0 bg-[#121212]">
        A collection of architectural software solutions, focusing on performance, scalability, and technical elegance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-16">
        
        <div className="flex flex-col md:flex-row items-center md:items-start bg-[#0D1C2D] rounded-xl p-6">
          <img 
            src={hitshopImage} 
            alt="Hitshop" 
            className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0" 
          />
          <p className="md:ml-8 text-white/90 text-sm mt-2 text-center md:text-left">
            I developed a chatbot in this project
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start bg-[#0D1C2D] rounded-xl p-6">
          <img 
            src={hitshopImage} 
            alt="Proje 2" 
            className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0" 
          />
          <p className="md:ml-8 text-white/90 text-sm mt-2 text-center md:text-left">
            Açıklama buraya
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;