import { i } from 'framer-motion/client';
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

function Hero() {

  const {t, i18n} = useTranslation();

  return(
    <section className="bg-[#0a0e17]/85 text-center px-12 pt-20 mb-8 pb-8">

      <div className='text-white/100 items-center font-bold text-5xl tracking-tight uppercase-mb-7 leading-tight'>
        <span>Eray Kösterelioğlu</span>
      </div>
      
      <div className="text-emerald-400 font-mono text-s tracking-widest uppercase-mb-7 mt-8">
        {t('hero.status')}
      </div>

      <h1 className="text-5xl font-bold text-white leading-tight tracking-tight mb-2">
        {t('hero.title')}<br />
      </h1>

      <p className="text-white/45 text-sm max-w-md mx-auto mt-4 mb-10 leading-relaxed">
        {t('hero.description')}
      </p>
      
      <div className="flex gap-3 justify-center">
        <Link
          to = "/projects"
          className='px-8 py-4 bg-blue-600 text-white/100 text-sm font-medium rounded-md hover:cursor-pointer'>
          {t('hero.viewProjects')}
      </Link>
      <Link 
        to = "mailto:eray.kostereli@gmail.com"
        className="px-8 py-4 border border-white/15 text-white/100 text-sm rounded-md hover:cursor-pointer">
        {t('hero.contact')}
      </Link>
      </div>
    </section>
  );
}

export default Hero;