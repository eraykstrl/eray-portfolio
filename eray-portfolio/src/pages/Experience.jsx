function Experience() {
  return (
    <section className="flex flex-col mb-16">

      <div className="mt-16 ml-16">
        <span className="font-mono text-5xl text-emerald-400">My Journey</span>
      </div>

      <div className="flex flex-col gap-12 ml-16 mt-16">

        {/* TÜBİTAK */}
        <div className="flex items-start">
          <div className="flex flex-col w-36 shrink-0">
            <span className="font-mono text-xs text-emerald-400">4 Months</span>
            <span>Feb 2026 - May 2026</span>
          </div>

          <div className="h-64 border-l border-white/50 ml-8 shrink-0"></div>

          <div className="ml-16 border border-white/20 rounded-md bg-black p-8 w-full mr-8">
            <span className="text-white font-semibold">TÜBİTAK UME</span>
            <p className="text-white/50 mt-1">Computer Engineering Intern</p>
            <div className="mt-4 text-white/80 leading-relaxed flex flex-col gap-2">
              <p>Built end-to-end data preprocessing and feature engineering pipelines using Python, NumPy, and Pandas to prepare datasets for machine learning models.</p>
              <p>Developed and optimized ML and deep learning models for classification and regression tasks using Scikit-learn, TensorFlow, and Keras.</p>
              <p>Researched AutoML techniques to improve model selection, training efficiency, and optimization processes.</p>
              <p>Deployed scalable ML systems using Docker and RabbitMQ, and contributed to a Digital Twin platform with bidirectional inference capabilities.</p>
            </div>
          </div>
        </div>

        {/* ATA AIT SIMURG */}
        <div className="flex items-start">
          <div className="flex flex-col w-36 shrink-0">
            <span className="font-mono text-xs text-emerald-400">1 Year</span>
            <span>June 2023 - September 2024</span>
          </div>

          <div className="h-64 border-l border-white/50 ml-8 shrink-0"></div>

          <div className="ml-16 border border-white/20 rounded-md bg-black p-8 w-full mr-8">
            <span className="text-white font-semibold">ATA AIT SIMURG</span>
            <p className="text-white/50 mt-1">Head of Software Development</p>
            <div className="mt-4 text-white/80 leading-relaxed flex flex-col gap-2">
              <p>Trained and evaluated YOLO-based object detection models, and developed real-time inference pipelines using OpenCV for computer vision applications.</p>
              <p>Implemented wireless image transmission over Wi-Fi using socket programming to stream both processed and raw video frames.</p>
              <p>Built a PyQt5-based desktop interface for real-time image processing and system control.</p>
              <p>Integrated drone control and command systems using the MAVLink communication protocol.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;