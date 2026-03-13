import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FleaControlInfo from "@/components/landing/FleaControlInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "North Brooksville Flea Control Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "North Brooksville, FL";
  const zipCodes = "34601, 34604, 34606, 34613, 34614";
  const fullKeyword = "Flea control north brooksville";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://fleacontrolnorthbrooksville.vercel.app/",
    "url": "https://fleacontrolnorthbrooksville.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "North Brooksville",
      "addressLocality": "North Brooksville",
      "addressRegion": "FL",
      "postalCode": "34601",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5700,
      "longitude": -82.4002
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": fullKeyword,
    "provider": {
      "@type": "LocalBusiness",
      "name": firmName
    },
    "areaServed": [
      { "@type": "City", "name": "North Brooksville, FL" },
      { "@type": "PostalCode", "name": "34601" },
      { "@type": "PostalCode", "name": "34604" },
      { "@type": "PostalCode", "name": "34606" },
      { "@type": "PostalCode", "name": "34613" },
      { "@type": "PostalCode", "name": "34614" }
    ],
    "description": `Professional ${fullKeyword}. Expert flea elimination and pet-safe treatments in North Brooksville FL ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. We provide 24/7 pest control, pet-safe flea treatments, and yard perimeter protection in ${location}. Call ${phoneNumber} now for rapid flea elimination.`} />
        <meta name="keywords" content={`${fullKeyword}, flea exterminator North Brooksville, flea treatment Brooksville FL, pest control 34601, flea removal Hernando County`} />
        <link rel="canonical" href="https://fleacontrolnorthbrooksville.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Flea Control <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">North Brooksville</span>
            </>
          }
          subtitle="North Brooksville's specialized flea eradication experts. We provide laboratory-grade treatments and total infestation removal to protect your pets and property — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="NORTH BROOKSVILLE FLEA EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <FleaControlInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
