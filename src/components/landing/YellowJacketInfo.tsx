import { ShieldCheck, Zap, Activity, ClipboardCheck, MapPin, Locate, Search, AlertTriangle, Bug, Thermometer, Wind, ShieldAlert } from "lucide-react";

const YellowJacketInfo = () => {
    return (
        <section id="yellow-jacket-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Lynden Wasp & Yellow Jacket Control Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-amber-600">Yellow Jacket Removal Lynden</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Rapid-response yellow jacket elimination for Lynden, WA properties. We specialize in safe nest extraction, underground colony destruction, and structural exclusion to protect your family from aggressive swarms.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <ShieldAlert className="w-7 h-7 text-rose-500" />
                                    Lynden Extraction Protocol
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Nest Location & Entry Mapping</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Yellow jackets often hide in wall voids or deep underground. Our Lynden specialists use thermal imaging and directional flight tracking to pinpoint the exact center of the nest before beginning extraction.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">High-Pressure Dust Injection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We apply professional-grade residual powders directly into the nest entrance. This ensures every foraging worker and the queen are eliminated, preventing the colony from rebounding.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Bug className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Physical Nest Removal</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Where accessible, we physically remove the paper comb structure to prevent secondary pest infestations from dermestid beetles or ants attracted to the decaying larvae.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                                <img src="/2.jpeg" alt="Yellow Jacket Removal Lynden" className="w-full h-64 object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-amber-600" />
                                    Serving Lynden & Whatcom County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Priority emergency yellow jacket nest removal Lynden service for these local areas:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Front Street",
                                        "Bender Park",
                                        "Everson",
                                        "Nooksack",
                                        "Sumas",
                                        "Ferndale",
                                        "Custer",
                                        "North Bellingham"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="/1.jpeg" alt="Yellow Jacket Nest Removal Experts" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 bg-amber-600 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Lynden Yellow Jacket Risk</h4>
                            <p className="text-amber-50 text-sm leading-relaxed italic">
                                Lynden's agricultural surroundings and moderate climate create ideal habitats for Western Yellow Jackets. Unlike honeybees, they are highly aggressive and can sting multiple times. A single nest can harbor thousands of insects by late summer, posing a severe risk to pets, children, and anyone with allergies. Our Lynden team understands the local geography and provides same-day intervention to keep your property safe.
                            </p>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-amber-600">Emergency Yellow Jacket Removal Lynden</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Activity, title: "Steady Flight Paths", desc: "Seeing a constant stream of insects entering and exiting a single hole in the ground or a crack in your siding indicates a mature nest." },
                                { icon: AlertTriangle, title: "Chewing Noises", desc: "If you hear clicking or scratching sounds inside your walls, yellow jackets may be expanding their paper nest by chewing through your drywall." },
                                { icon: Thermometer, title: "Hot Spots on Walls", desc: "Large colonies generate significant heat. A warm patch on an interior wall often masks a massive nest void requiring immediate professional attention." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-amber-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Aggressive Swarm Near Your Home?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't attempt DIY removal for yellow jacket nests. Disturbing them without commercial-grade protective suits and knockdown agents can lead to life-threatening swarming behavior. Our Lynden experts are ready for 24/7 emergency dispatch.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">WA State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Wasp Specialists</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Rapid Dispatch</div>
                                </div>
                            </div>
                            <div className="bg-amber-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-amber-400/30 shadow-2xl">
                                <p className="text-amber-100 text-sm font-bold uppercase tracking-widest mb-2">Yellow Jacket Removal Lynden</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-amber-100 text-sm italic font-medium">
                                    emergency yellow jacket nest removal Lynden
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YellowJacketInfo;
