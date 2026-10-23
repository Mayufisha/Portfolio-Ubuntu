function About(){
    return(
         <section id="about" className="py-16 bg-slate-950 text-slate-100">
        <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold text-center tracking-tight mb-6">
          My Learning Path
        </h1>
        <p className="max-w-2xl mx-auto px-4 text-center text-slate-300 leading-relaxed mb-12">
          I am a full-stack developer focused on building clean, responsive web apps that feel simple
          to use and solid under the hood. My path started on a phone and grew through formal study
          and real projects that sharpened my design, coding, and problem-solving skills.
        </p>
        <div className="relative max-w-4xl mx-auto px-4 space-y-16">

    <div className="md:flex md:items-center md:gap-10">
      <img src="Images/codding on a mobile.png" alt="Learning to code on mobile"
           className="w-32 h-32 object-cover rounded-full border-4 border-amber-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-medium tracking-tight">
          2019-2022: Self-taught foundation
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Started on mobile and built a strong base in HTML, CSS, and JavaScript, learning how to
          structure pages, create layouts, and bring interactions to life.
        </p>
      </div>
    </div>

    <div className="md:flex md:flex-row-reverse md:items-center md:gap-10">
      <img src="Images/CS in uni.png" alt="Studying Computer Science at university"
           className="w-32 h-32 object-cover rounded-full border-4 border-amber-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-right">
        <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-medium tracking-tight">
          2022-2023: Structured learning and problem-solving
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Formal CS coursework strengthened my foundations in programming logic, data structures,
          and C++ while I kept shipping small web projects.
        </p>
      </div>
    </div>

    <div className="md:flex md:items-center md:gap-10">
      <img src="Images/online studying.png" alt="Online learning journey"
           className="w-32 h-32 object-cover rounded-full border-4 border-amber-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-medium tracking-tight">
          2023-Present: React, UI/UX, and real projects
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Built full-stack and frontend projects with React and Tailwind, explored UI/UX in Figma,
          and expanded into Python and databases while focusing on clean, responsive interfaces.
        </p>
      </div>
    </div>

  </div>
</section>
    );
};
export default About;
