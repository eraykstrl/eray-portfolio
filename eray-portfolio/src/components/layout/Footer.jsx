
function Footer() {

  return(
    <footer className="flex items-center justify-between bg-[#0D1C2D] px-4 py-6 border-t border-white/10">

      <span className="text-white text-xs font-mono">
        Eray Kosterelioglu
      </span>

      <span className="text-white text-xs font-mono">
        @2026 All Right Reserved.
      </span>


      <div className="flex gap-6 text-white/50 text-xs">
        <a href="#">Github</a>
        <a href="#">Linkedin</a>
        <a href="#">Contact</a>
      </div>

    </footer>
  )
}

export default Footer;