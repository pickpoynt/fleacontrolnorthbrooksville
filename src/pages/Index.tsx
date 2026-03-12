import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CloggedDrainInfo from "@/components/landing/CloggedDrainInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Chino Hills Clogged Drain Cleaning Pros";
  const phoneNumber = "(877) 792-1410";
  const location = "Chino Hills, CA";
  const zipCodes = "91709, 91710, 91708, 92880, 92887";
  const fullKeyword = "Clogged drain cleaning service Chino Hills";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/2.jpeg",
    "@id": "https://cloggeddraincleaningservicechinohills.vercel.app/",
    "url": "https://cloggeddraincleaningservicechinohills.vercel.app/",
    "telephone": "8777921410",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chino Hills",
      "addressLocality": "Chino Hills",
      "addressRegion": "CA",
      "postalCode": "91709",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.9892,
      "longitude": -117.7326
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
      { "@type": "City", "name": "Chino Hills, CA" },
      { "@type": "PostalCode", "name": "91709" },
      { "@type": "PostalCode", "name": "91710" },
      { "@type": "PostalCode", "name": "91708" },
      { "@type": "PostalCode", "name": "92880" },
      { "@type": "PostalCode", "name": "92887" }
    ],
    "description": `Professional ${fullKeyword}. Emergency blockage removal, hydro jetting, and sewer cleaning in Chino Hills ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName}`}</title>
        <meta name="description" content={`Professional ${fullKeyword}. We provide 24/7 emergency blockage removal and expert hydro jetting in ${location} ${zipCodes}. Call ${phoneNumber} now for rapid drain clearing.`} />
        <meta name="keywords" content={`${fullKeyword}, drain cleaning Chino Hills, rooter service 91709, hydro jetting 91710, sewer cleaning Chino Hills CA`} />
        <link rel="canonical" href="https://cloggeddraincleaningservicechinohills.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              {fullKeyword.replace(" Chino Hills", "")} <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Chino Hills</span>
            </>
          }
          subtitle="Chino Hills' premier drain clearing specialists. We provide rapid-response blockage removal and professional hydro jetting to restore your plumbing system quickly — 24/7."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="CHINO HILLS DRAIN CLEANING PROS"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <CloggedDrainInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
