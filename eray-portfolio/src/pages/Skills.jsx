function Skills() {
  return(
    
    <section className="flex flex-col bg-[#121212] mb-16">

      <div className="text-emerald-400 font-mono text-xs uppercase-mb-7 ml-16 mt-16">
        STACK OVERVIEW
      </div>

      <div className="text-blue-400 font-mono text-5xl ml-16 mt-4">
        Skills & Expertise
      </div>

      <p className="text-white/100 font-mono text-base mt-16 ml-16 text-24">
        Focused on building high-velocity digital products with a focus on type-safety, scalable <br/>
        infrastructure, and exceptional developer experience. My toolkit is continually evolving with the industry’s best practices.
      </p>

      <div className="grid grid-cols-4 mt-16 jusitfy-between ml-16">

        <div className="flex flex-col">

          <p className="text-white/100 text-5xl">Mobile & Android</p>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Kotlin</span>
            <span className="text-white/50 text-s">Advanced Leval Kotlin</span>
          </div>


          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Jetpack Compose</span>
            <span className="text-white/50 text-s">Modern UI Systems</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>MVVM & MVVM Clean</span>
            <span className="text-white/50 text-s">Modern Architecture</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Dependency Injection</span>
            <span className="text-white/50 text-s">Dagger & Hilt</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Retfrofit</span>
            <span className="text-white/50 text-s">Modern library</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Design Patterns</span>
            <span className="text-white/50 text-s">Readable & high performance</span>
          </div>
        </div>


        <div className="flex flex-col">

          <p className="text-white/100 text-5xl">ML & AI</p>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Python</span>
            <span className="text-white/50 text-s">Readable</span>
          </div>


          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Scikit-learn</span>
            <span className="text-white/50 text-s">Important libraries</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Data preprocessing</span>
            <span className="text-white/50 text-s">Pandas, Numpy, Matplotlib</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Modern ML Models</span>
            <span className="text-white/50 text-s">XGBoost, LightGBM, Catboost</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Deep Learning</span>
            <span className="text-white/50 text-s">Tensorflow</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>CUDA & System Optimization</span>
            <span className="text-white/50 text-s">System optimization, distributed computing</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Computer Vision</span>
            <span className="text-white/50 text-s">Tensorflow & CNN</span>
          </div>
        </div>

                <div className="flex flex-col">

          <p className="text-white/100 text-5xl">Frontend</p>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>HTML & CSS</span>
            <span className="text-white/50 text-s">Basic Systems</span>
          </div>


          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>React.js</span>
            <span className="text-white/50 text-s">Server Components</span>
          </div>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Tailwind CSS</span>
            <span className="text-white/50 text-s">Utility-first, Design Systems</span>
          </div>
          
        </div>

        <div className="flex flex-col">

          <p className="text-white/100 text-5xl">Backend</p>

          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>Python</span>
            <span className="text-white/50 text-s">Advanced Leval Python</span>
          </div>
          <div className="flex flex-col mt-8 ml-4">
            <span className="text-white/100" text-base>FastAPI</span>
            <span className="text-white/50 text-s">High Performance</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;