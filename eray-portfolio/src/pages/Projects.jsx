import hitshopImage from "../assets/hitshop_image.png";
import akillikampus from "../assets/akillikampus.png"
import erayai from "../assets/erayai.jpeg";
import {Link} from "react-router-dom";

import { useTranslation } from "react-i18next";

function Projects() {

  const {t} = useTranslation();

  return(
    <section className="flex flex-col bg-[#121212]">
      
      <div className="text-emerald-400 font-mono text-xl tracking-widest uppercase mb-7 ml-6 md:ml-16 mt-16 bg-[#121212]">
        Eray Kösterelioğlu
      </div>
      
      <div className="flex justify-center items-center text-[#005AC2] font-mono text-3xl md:text-5xl tracking-widest uppercase mb-7 mt-4 ml-6 md:ml-16 bg-[#121212]">
        {t('projects.selected')}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-16">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-[#0D1C2D] rounded-xl p-6 overflow-hidden">
          <img 
            src={hitshopImage} 
            alt="HitShop" 
            className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0 shrink-0" 
          />
          <p className="md:ml-8 text-white/90 text-xl mt-2 text-center md:text-left flex-1">
          {t("projects.hitshop")}
        </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start bg-[#0D1C2D] rounded-xl p-6 overflow-hidden">
          <img 
            src={akillikampus} 
            alt="AkilliKampus" 
            className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0 shrink-0" 
          />
          <p className="md:ml-8 text-white/90 text-xl mt-2 text-center md:text-left flex-1">
          {t("projects.smartcampus")}
        </p>
        </div>

        <div className="md:col-span-2 flex flex-col md:flex-row items-center md:items-start bg-[#0D1C2D] rounded-xl p-6 overflow-hidden">
          <img 
            src={erayai} 
            alt="ErayAI" 
            className="w-full md:w-auto md:max-w-[60%] h-auto object-contain rounded-lg mb-4 md:mb-0 shrink-0" 
          />
          <p className="md:ml-8 text-white/90 text-xl mt-2 text-center md:text-left flex-1">
            {t("projects.erayai")}
          </p>
        </div>
      </div>
        <div className="flex items-center justify-center bg-[#121212] py-6">
          <Link
            to="https://github.com/eraykstrl"
            className="text-white rounded-md px-8 py-6 bg-[#7A1E2C] hover:bg-[#9B2635] transition"
          >
            {t('projects.allproject')}
          </Link>
        </div>
    </section>
  );
}

export default Projects;