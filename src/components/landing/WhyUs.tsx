import { ShieldCheck, MapPin, Activity, Locate, ClipboardCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 mb-6 uppercase tracking-widest text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Lynden Pest Control Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Why Lynden Trusts <span className="text-amber-600">Our extraction team</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-bold italic">
              When aggressive yellow jackets threaten your property, our licensed extraction team delivers the safest solution for Lynden homes — fast and guaranteed.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Activity, title: "1-Hour Emergency Response", description: "We dispatch immediately for active stings or child-safety emergencies in Lynden and Whatcom County — stopping swarms before they strike." },
                { icon: Locate, title: "Lynden Local Service", description: "Based right here in Lynden, WA for faster arrival than 'big box' pest companies — we know specific local wasp nesting patterns." },
                { icon: ClipboardCheck, title: "Heavy-Suit Protection", description: "Our technicians use commercial-grade protective gear and specialized extension tools to treat high-risk nests safely." },
                { icon: Sparkles, title: "Total Colony Neutralization", description: "We don't just kill the visible ones; we ensure the queen and all larvae are eliminated to prevent the colony from regaining strength." }
              ].map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-amber-600 border border-slate-100 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group">
              <img
                src="/2.jpeg"
                alt="Lynden Yellow Jacket Removal Equipment"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img
                src="/3.jpeg"
                alt="Professional Yellow Jacket Extraction Lynden"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-2">Swarm Active?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Call Lynden's Specialist</h4>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold h-10 px-6 rounded-xl uppercase tracking-widest text-[10px] w-full" asChild>
                  <a href="tel:3238801224">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
