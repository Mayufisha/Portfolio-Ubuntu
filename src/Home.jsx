function Home({ setActive }) {
    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-10 md:gap-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-100">
          <div className="flex md:flex-col justify-center gap-6 text-2xl">
            <a href="https://github.com/Mayufisha" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              GitHub ↗
            </a>
            <a href="mailto:sambenmayu@gmail.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              Email ↗
            </a>
            <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              LinkedIn ↗
            </a>
          </div>
         <div className="text-center md:text-left max-w-lg">
           <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-4">
             Hi, I'm Samuel Molla
           </h1>
           <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl text-amber-400 mb-4">
             A Full-Stack Developer
           </h3>
           <p className="mb-3 text-slate-300 leading-relaxed">
             I build fast, accessible web apps with clean UI and reliable backend logic.
           </p>
           <p className="mb-6 text-slate-400">
             Focused on React, modern CSS, and practical full-stack workflows.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
             <button
               type="button"
               onClick={() => setActive("projects")}
               className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-semibold py-2 px-6 rounded transition"
             >
               View Projects
             </button>
             <button
               type="button"
               onClick={() => setActive("contact")}
               className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-100 font-semibold py-2 px-6 rounded transition"
             >
               Contact Me
             </button>
             <a
               href="./Samuel_Molla_Resume.pdf"
               className="border border-slate-700 text-slate-200 hover:border-amber-500 hover:text-amber-400 font-semibold py-2 px-6 rounded transition"
               target="_blank"
               rel="noreferrer"
             >
               Resume
             </a>
           </div>
           <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
             <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-300">React</span>
             <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-300">Tailwind</span>
             <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-300">Node</span>
             <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-300">MongoDB</span>
             <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-300">Express</span>
           </div>
         </div>

        <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-full overflow-hidden border-2 border-slate-800 shadow-lg bg-white">
          <img
  src="Images/Samuel_Molla.jpg"
  alt="Samuel Molla"
  className="block w-full h-full object-contain"
/>
</div>
      </section>
    );
};
export default Home;
