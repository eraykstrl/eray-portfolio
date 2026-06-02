import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col bg-[#121212] mb-16">
      
      <div className="text-emerald-400 font-mono text-xs uppercase mb-7 ml-16 mt-16">
        {t('skills.overview')}
      </div>

      <div className="text-blue-400 font-mono text-5xl ml-16 mt-4">
        {t('skills.skills')}
      </div>

      <p className="text-white/100 font-mono text-lg mt-16 ml-16 max-w-4xl">
        {t('skills.text')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 ml-16 mr-16 gap-12">
        
        <div className="flex flex-col">
          <p className="text-white/100 text-5xl mb-4">{t('skills.catMobile')}</p>

          <div className="flex flex-col mt-4">
            <span className="text-white/100 text-base font-semibold">{t('skills.mobKotlin')}</span>
            <span className="text-white/50 text-sm">{t('skills.mobKotlinDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mobCompose')}</span>
            <span className="text-white/50 text-sm">{t('skills.mobComposeDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mobMVVM')}</span>
            <span className="text-white/50 text-sm">{t('skills.mobMVVMDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mobDI')}</span>
            <span className="text-white/50 text-sm">{t('skills.mobDIDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mobRetrofit')}</span>
            <span className="text-white/50 text-sm">{t('skills.mobRetrofitDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mobDesign')}</span>
            <span className="text-white/50 text-sm">{t('skills.mobDesignDesc')}</span>
          </div>
        </div>

        {/* ML & AI */}
        <div className="flex flex-col">
          <p className="text-white/100 text-5xl mb-4">{t('skills.catML')}</p>

          <div className="flex flex-col mt-4">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlPython')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlPythonDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlScikit')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlScikitDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlDataPre')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlDataPreDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlModels')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlModelsDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlDL')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlDLDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlCuda')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlCudaDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.mlCV')}</span>
            <span className="text-white/50 text-sm">{t('skills.mlCVDesc')}</span>
          </div>
        </div>

        {/* FRONTEND */}
        <div className="flex flex-col">
          <p className="text-white/100 text-5xl mb-4">{t('skills.catFrontend')}</p>

          <div className="flex flex-col mt-4">
            <span className="text-white/100 text-base font-semibold">{t('skills.feHtml')}</span>
            <span className="text-white/50 text-sm">{t('skills.feHtmlDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.feReact')}</span>
            <span className="text-white/50 text-sm">{t('skills.feReactDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.feTailwind')}</span>
            <span className="text-white/50 text-sm">{t('skills.feTailwindDesc')}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-white/100 text-5xl mb-4">{t('skills.catBackend')}</p>

          <div className="flex flex-col mt-4">
            <span className="text-white/100 text-base font-semibold">{t('skills.bePython')}</span>
            <span className="text-white/50 text-sm">{t('skills.bePythonDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.beFastapi')}</span>
            <span className="text-white/50 text-sm">{t('skills.beFastapiDesc')}</span>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-white/100 text-base font-semibold">{t('skills.beDocker')}</span>
            <span className="text-white/50 text-sm">{t('skills.beDockerDesc')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;