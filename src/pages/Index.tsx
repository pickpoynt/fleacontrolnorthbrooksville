import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import YellowJacketInfo from "@/components/landing/YellowJacketInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>emergency yellow jacket nest removal Lynden - Lynden Yellow Jacket Removal Pros (323) 880-1224</title>
        <meta name="description" content="emergency yellow jacket nest removal Lynden - Professional yellow jacket removal in Lynden, WA. Serving 98264, 98247, 98276, 98295, 98248, 98230. Expert wasp nest elimination and protective barrier treatments. Call (323) 880-1224 for rapid response." />
        <meta name="keywords" content="emergency yellow jacket nest removal Lynden, Lynden yellow jacket removal, wasp control Lynden WA, 98264 yellow jacket removal, 98247 pest control, 98276 bee removal" />
        <link rel="canonical" href="https://emergencyyellowjacketnestremovallynden.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Lynden Yellow Jacket Removal Pros",
            "image": "/1.jpeg",
            "@id": "https://emergencyyellowjacketnestremovallynden.com/",
            "url": "https://emergencyyellowjacketnestremovallynden.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "300 Front St",
              "addressLocality": "Lynden",
              "addressRegion": "WA",
              "postalCode": "98264",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.9448",
              "longitude": "-122.4479"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Yellow Jacket Nest Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Lynden Yellow Jacket Removal Pros"
            },
            "areaServed": [
              { "@type": "City", "name": "Lynden, WA" },
              { "@type": "PostalCode", "name": "98264" },
              { "@type": "PostalCode", "name": "98247" },
              { "@type": "PostalCode", "name": "98276" },
              { "@type": "PostalCode", "name": "98295" },
              { "@type": "PostalCode", "name": "98248" },
              { "@type": "PostalCode", "name": "98230" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lynden Yellow Jacket Removal Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underground Nest Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Eave and Attic Nest Elimination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Nighttime Removal" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="emergency yellow jacket nest removal Lynden - Lynden Yellow Jacket Removal Pros" />
        <meta property="og:description" content="Professional emergency yellow jacket nest removal in Lynden, WA. Same-day service, expert removal, and perimeter protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emergencyyellowjacketnestremovallynden.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              emergency yellow jacket <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase">removal Lynden</span>
            </>
          }
          subtitle="Lynden's rapid-response yellow jacket specialists. We eliminate dangerous underground nests, eave colonies, and structural infestations using professional-grade protective gear and targeted treatments — fast."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="LYNDEN YELLOW JACKET CONTROL"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <YellowJacketInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
