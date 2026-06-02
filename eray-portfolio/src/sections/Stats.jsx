import { label } from "framer-motion/client";
import {useTranslation} from "react-i18next";

function Stats() {

  const {t} = useTranslation();

  const stats = [
    { label: t("stats.mlLabel"), value: t("stats.mlValue") },
    { label: t("stats.androidLabel"), value: t("stats.androidValue") },
    { label: t("stats.webLabel"), value: t("stats.webValue") }
  ];
  
  return(
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl w-full mx-auto">
      {stats.map((stat) => (
        <div key={stat.label} className="px-8 py-6 border-r border-white/7 last:border-r-0">
          <p className="font-mono text-[16px] text-emerald-400 tracking-widest">
            {stat.label}
          </p>
          <p className="text-sm font-semibold text-white/100">
            {stat.value}
          </p>
          </div>
      ))}
    </div>
  );

}


export default Stats;