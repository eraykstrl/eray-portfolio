import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col mb-16">

      <div className="mt-16 ml-8 md:ml-16">
        <span className="font-mono text-5xl text-emerald-400">
          {t('experience.journeyTitle')}
        </span>
      </div>

      <div className="flex flex-col gap-12 mx-8 md:ml-16 mt-16">

        {/* TÜBİTAK */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex flex-row md:flex-col w-full md:w-36 shrink-0 gap-2 md:gap-0 mb-4 md:mb-0">
            <span className="font-mono text-xs text-emerald-400">{t('experience.tubitakDuration')}</span>
            <span className="text-sm">{t('experience.tubitakDates')}</span>
          </div>

          <div className="hidden md:block h-64 border-l border-white/50 ml-8 shrink-0"></div>

          <div className="md:ml-16 border border-white/20 rounded-md bg-black p-6 md:p-8 w-full md:mr-8">
            <span className="text-white font-semibold">{t('experience.tubitakCompany')}</span>
            <p className="text-white/50 mt-1">{t('experience.tubitakRole')}</p>
            <div className="mt-4 text-white/80 leading-relaxed flex flex-col gap-2">
              <p>{t('experience.tubitakDesc1')}</p>
              <p>{t('experience.tubitakDesc2')}</p>
              <p>{t('experience.tubitakDesc3')}</p>
              <p>{t('experience.tubitakDesc4')}</p>
            </div>
          </div>
        </div>

        {/* ATA AIT SIMURG */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex flex-row md:flex-col w-full md:w-36 shrink-0 gap-2 md:gap-0 mb-4 md:mb-0">
            <span className="font-mono text-xs text-emerald-400">{t('experience.simurgDuration')}</span>
            <span className="text-sm">{t('experience.simurgDates')}</span>
          </div>

          <div className="hidden md:block h-64 border-l border-white/50 ml-8 shrink-0"></div>

          <div className="md:ml-16 border border-white/20 rounded-md bg-black p-6 md:p-8 w-full md:mr-8">
            <span className="text-white font-semibold">{t('experience.simurgCompany')}</span>
            <p className="text-white/50 mt-1">{t('experience.simurgRole')}</p>
            <div className="mt-4 text-white/80 leading-relaxed flex flex-col gap-2">
              <p>{t('experience.simurgDesc1')}</p>
              <p>{t('experience.simurgDesc2')}</p>
              <p>{t('experience.simurgDesc3')}</p>
              <p>{t('experience.simurgDesc4')}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;