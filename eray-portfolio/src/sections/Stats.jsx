import { label } from "framer-motion/client";

function Stats() {

  const stats = [
    {label:"ML . AI " , value: "Python / ML & AI Developer"},
    {label:"Android Developer", value : "Android & Jetpack Compose Developer"},
    {label : "Web Developer", value : "React.js"}
  ];
  return(
    <div className="grid grid-cols-4 max-w-5xl w-full mx-auto">
      {stats.map((stat) => (
        <div key={stat.label} className="px-8 py-6 border-r border-white/7 last:border-r-0">
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">
            {stat.label}
          </p>
          <p className="text-sm font-semibold text-white/85">
            {stat.value}
          </p>
          </div>
      ))}
    </div>
  );

}


export default Stats;