import { ArrowRight, Search, ShieldCheck, Wind, Bug, Droplets } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Yellow Jacket Removal Lynden</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Lynden property owners rely on our certified techs for high-risk nest extraction and total colony control. We target the dangerous insects where they live and breed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Nest Location Mapping",
              description: "Precise identification of underground tunnels, wall void entries, and eave attachments across your Lynden residential or commercial site.",
            },
            {
              icon: ShieldCheck,
              title: "Residual Barrier Defense",
              description: "Commercial-grade barrier applications to common entry points, preventing new queens from establishing colonies in your structural voids.",
            },
            {
              icon: Bug,
              title: "Ground Nest Extraction",
              description: "Safe, deep-injection treatment for underground yellow jacket nests, ensuring complete neutralisation of the subterranean colony.",
            },
            {
              icon: Wind,
              title: "Structural Nest Removal",
              description: "Specialized extraction from attic spaces, roof lines, and interior walls using protective gear and localized pest knockdown agents.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Book Extraction <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
