const faqs = [
  { question: "How much does it cost to have someone remove a yellow jacket nest?", answer: "The cost for professional yellow jacket nest removal typically ranges from $150 to $500, depending on the nest's location (ground, wall, or attic) and the difficulty of access." },
  { question: "How to get rid of a huge yellow jacket nest?", answer: "For large nests, professional extermination is the safest method. Techs use specialized dusts or aerosols and protective gear to ensure complete colony elimination including the queen." },
  { question: "Can you dig up a yellow jacket nest at night?", answer: "Yes, nighttime is actually the safest time for removal as yellow jackets are less active and mostly contained within the nest. However, it should only be done by pros with proper lighting and gear." },
  { question: "What does Dawn dish soap do to yellow jackets?", answer: "Dawn dish soap mixed with water can drown yellow jackets on contact by breaking the surface tension of their bodies, but it often fails to reach the deep interior of a large nest." },
  { question: "Will a yellow jacket nest eventually go away?", answer: "Yellow jacket nests are annual. The colony dies off in late autumn or early winter, and the nest is typically not reused the following year. However, new queens will start new nests nearby in the spring." },
  { question: "What does WD-40 do to wasps?", answer: "WD-40 can kill wasps on contact by suffocating them, but it is not a recommended or safe method for large-scale nest removal and can be a fire hazard." },
  { question: "What happens if you seal off a yellow jacket nest?", answer: "Never seal an active nest entrance in a wall. The yellow jackets will likely chew through drywall or other materials to find a new exit, often leading them into your living space." },
  { question: "What smell do yellow jackets hate?", answer: "Yellow jackets are repelled by smells such as peppermint, eucalyptus, tea tree oil, and wormwood. Planting these around your home can help deter them." },
  { question: "How many yellow jackets are in a large nest?", answer: "A mature yellow jacket nest can contain anywhere from 500 to 5,000 workers, and in some rare cases even more, depending on the species and environment." },
  { question: "Should I leave a yellow jacket nest alone?", answer: "If the nest is far from human activity, it can be left alone. However, if it's near entrances, play areas, or inside structures, professional removal is advised due to their aggressive nature." },
  { question: "Will wasps come back if you remove their nest?", answer: "The same colony will not return once the nest is removed and the insects are killed. However, the area remains attractive to new queens searching for nesting sites the following season." },
  { question: "What will dig up a yellow jacket nest?", answer: "Animals like skunks, raccoons, and bears often dig up ground nests at night to eat the larvae. This often leaves the area dangerous as remaining yellow jackets become highly aggressive." },
  { question: "What kills yellow jackets the fastest?", answer: "Professional-grade pyrethroid dusts and aerosols provide the fastest knockdown and kill rate for entire colonies." },
  { question: "What is a home remedy to get rid of yellow jackets?", answer: "While soap and water or vinegar sprays can kill individuals, they are rarely effective against large nests and often result in stings for the unequipped homeowner." },
  { question: "What household item kills wasps?", answer: "Soapy water, hairspray, and vinegar can kill individual wasps, but none are safe or effective for removing an established yellow jacket nest." },
  { question: "What month do yellow jackets build nests?", answer: "In Lynden and most of North America, queens emerge and begin building small nests in April and May, with colonies reaching peak size in August and September." },
  { question: "Do yellow jacket wasps remember you?", answer: "While they don't 'remember' faces like honeybees might, they can mark perceived threats with pheromones, which 'reminds' the entire colony to attack that specific person or animal." },
  { question: "Will yellow jackets leave if their nest is disturbed?", answer: "No. Disturbance usually triggers an aggressive defense response. They will attack the source of the disturbance rather than abandoning their larvae and queen." },
  { question: "Can you destroy a yellow jacket nest at night?", answer: "Yes, nighttime treatment is preferred because the colony is less active. However, red-filtered lights should be used to avoid attracting them to the technician." },
  { question: "What time of day are yellow jackets most active?", answer: "They are most active during the warmest parts of the day, typically from late morning through mid-afternoon." },
  { question: "What is the best time to remove a nest?", answer: "Late evening or very early morning is ideal as all members of the colony are present and activity is at its lowest." },
  { question: "How many yellow jackets are in one nest?", answer: "Ground nests usually average 1,000 to 4,000 insects, while aerial nests may have slightly fewer." },
  { question: "How do exterminators get rid of yellow jackets?", answer: "Exterminators use high-pressure dusters to inject residual powders deep into the nest, ensuring all layers of the comb are treated and the queen is eliminated." },
  { question: "Do yellow jackets destroy their own nests?", answer: "No, but the nests naturally degrade after the colony dies off in the winter cycle." },
  { question: "Do dryer sheets keep yellow jackets away?", answer: "There is little scientific evidence that dryer sheets effective repel yellow jackets, though some people use them around outdoor seating with varying results." },
  { question: "How far away can yellow jackets smell?", answer: "Yellow jackets have a powerful sense of smell and can be attracted to food or garbage from several hundred feet away." },
  { question: "What aggravates yellow jackets?", answer: "Vibrations (like lawnmowers), carbon dioxide, dark colors, and sudden movements near the nest are primary triggers for aggression." },
  { question: "What happens if you mow over a yellow jacket nest?", answer: "The vibration and heat of the mower will trigger an immediate and massive attack from the colony. This is one of the most common ways people get multiple stings." },
  { question: "Is it okay to leave a yellow jacket nest in the wall?", answer: "Leaving a nest in a wall can lead to structural moisture issues from decaying larvae and may attract other pests like dermestid beetles after the colony dies." },
  { question: "How deep in the ground is a yellow jacket nest?", answer: "Most ground nests are located 4 to 12 inches below the surface, often utilizing abandoned rodent burrows." }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Wasp & Yellow Jacket Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Lynden Yellow Jacket Removal <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential knowledge for Lynden properties dealing with aggressive yellow jacket colonies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
