import hitshopImage from "../assets/hitshop_image.png";
import akillikampus from "../assets/akillikampus.png"

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
            alt="HitShop" 
            className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0" 
          />
          <p className="md:ml-8 text-white/90 text-xl mt-2 text-center md:text-left">
          HitShop is a modern e-commerce mobile application inspired by platforms like Trendyol.
          It provides users with a seamless shopping experience, allowing them to browse products,
          search items, view detailed product pages, and manage their favorites within a clean and
          intuitive interface. Built with Kotlin and Jetpack Compose, the app follows MVVM Clean
          Architecture and modern Android development best practices, including dependency injection
          with Hilt and local data persistence using Room.
        </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start bg-[#0D1C2D] rounded-xl p-6">
          <img 
            src={akillikampus} 
            alt="AkilliKampus" 
            className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0" 
          />
          <p className="md:ml-8 text-white/90 text-xl mt-2 text-center md:text-left">
          A location-based smart campus safety and health notification system designed to
          provide real-time emergency alerts within a campus environment. The application
          visualizes incidents on a map based on severity levels and sends instant push
          notifications to users. Built with Kotlin, Jetpack Compose, and Firebase,
          the system enables administrators to create and manage emergency alerts,
          while users receive real-time updates through Firebase Cloud Messaging.
        </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;