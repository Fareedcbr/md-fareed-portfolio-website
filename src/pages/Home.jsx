import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects";
import FeaturedCertifications from "../sections/FeaturedCertifications";
import CTA from "../sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <FeaturedCertifications />
      <CTA />
    </>
  );
}

export default Home;