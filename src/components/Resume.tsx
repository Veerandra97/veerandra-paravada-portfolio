import { ArrowLeft, Printer } from "lucide-react";
import { useEffect } from "react";

export function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title persistently while on this page to guarantee the 
    // print dialog captures it without race conditions.
    const originalTitle = document.title;
    document.title = "Veerandra_Paravada_Resume";
    
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top action bar (Not part of the printed resume) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <a 
          href="#"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </a>
        <button 
          onClick={handlePrint}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
        >
          <Printer className="w-4 h-4 mr-2" />
          Download / Print PDF
        </button>
      </div>

      {/* Resume Document */}
      <div id="resume-content" className="max-w-4xl mx-auto bg-white p-8 sm:p-12 md:p-16 shadow-xl print:shadow-none print:p-0 print:max-w-none text-slate-900">
        
        {/* HEADER */}
        <header className="mb-8 border-b-[3px] border-slate-800 pb-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-1 uppercase tracking-wide">
            Veerandra Paravada
          </h1>
          <h2 className="text-xl font-medium text-slate-700 mb-4 tracking-wide">
            Associate Analyst
          </h2>
          <div className="text-sm text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>vinayveerandra97@gmail.com</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>veerandraparavada.com</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a href="https://www.linkedin.com/in/paravadaveerandravinay/" className="text-slate-600 hover:text-slate-900">linkedin.com/in/paravadaveerandravinay</a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a href="https://github.com/veerandra97" className="text-slate-600 hover:text-slate-900">github.com/veerandra97</a>
          </div>
        </header>

        {/* PROFESSIONAL SUMMARY */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Professional Summary
          </h3>
          <p className="text-slate-700 leading-relaxed text-justify">
            Associate Analyst with 3 years of professional experience specializing in survey engineering, data logic implementation, and quality assurance. Successfully transitioned into IT via comprehensive Full-Stack Java training, currently expanding expertise in DevOps practices. Strong track record of engineering robust solutions, optimizing routing pathways, and ensuring zero-defect deliverables for complex operational requirements.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Technical Skills
          </h3>
          <div className="text-slate-700 leading-relaxed space-y-2">
            <p><strong className="font-semibold text-slate-900 w-32 inline-block">Languages:</strong> Java, SQL, TypeScript, HTML, CSS</p>
            <p><strong className="font-semibold text-slate-900 w-32 inline-block">Frameworks:</strong> Spring Boot, Angular, React, Tailwind CSS</p>
            <p><strong className="font-semibold text-slate-900 w-32 inline-block">Practices:</strong> Full-Stack Development, Survey Logic & Routing, Quality Assurance, DevOps (Currently Learning)</p>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Professional Experience
          </h3>
          
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
              <h4 className="text-md font-bold text-slate-900 uppercase">Associate Analyst</h4>
              <span className="text-sm font-semibold text-slate-700">2023 – Present</span>
            </div>
            <div className="text-md text-slate-800 font-medium mb-3 italic">
              ConfirmIT
            </div>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 leading-relaxed">
              <li>Designed and implemented complex survey structures tailored to specific operational requirements.</li>
              <li>Engineered and meticulously tested survey logic to ensure highly accurate data collection workflows.</li>
              <li>Configured and validated complex routing paths, optimizing the overall user experience and minimizing drop-offs.</li>
              <li>Reviewed and validated surveys created by peers, ensuring all deployed campaigns functioned flawlessly before final delivery.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Projects
          </h3>
          
          <div className="mb-4">
            <h4 className="text-md font-bold text-slate-900 mb-1">Rice Threshing Machine</h4>
            <p className="text-sm text-slate-800 font-medium mb-3 italic">Mechanical Engineering Project</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 leading-relaxed">
              <li>Designed and developed a mechanical Rice Threshing Machine to address agricultural labor inefficiencies.</li>
              <li>Optimized traditional manual processes through engineered mechanical advantage.</li>
              <li>Improved overall efficiency, reducing the required workforce from 10 individuals to 1 and processing time from 3 days to 1 day.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
            <h4 className="text-md font-bold text-slate-900">B.Tech in Mechanical Engineering</h4>
            <span className="text-sm font-semibold text-slate-700">2019</span>
          </div>
          <div className="text-md text-slate-800 italic">
            Raghu Engineering College (67%)
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Certifications
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
            <h4 className="text-md font-bold text-slate-900">Full Stack Java Development</h4>
            <span className="text-sm font-semibold text-slate-700">2022 – 2023</span>
          </div>
          <div className="text-md text-slate-800 italic">
            TalentSprint
          </div>
        </section>

      </div>
    </div>
  );
}
