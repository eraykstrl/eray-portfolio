
function Footer() {

  return(
    <footer className="flex items-center justify-between bg-[#0D1C2D] px-4 py-6 border-t border-white/10">

      <span className="text-white text-xs font-mono">
        Eray Kosterelioglu
      </span>

      <span className="text-white text-xs font-mono">
        @2026
      </span>

      <div className="flex gap-2 text-white/50 text-xs">
        <a href="https://github.com/eraykstrl" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="https://linkedin.com/in/eray-kstrl" target="_blank" rel="noreferrer">
          Linkedin
        </a>
        <a href="mailto:eray.kostereli@gmail.com">
          Contact
        </a>
      </div>

    </footer>
  )
}

export default Footer;