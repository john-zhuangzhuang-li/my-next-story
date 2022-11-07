import { useRef } from "react";

import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import AboutSectionAlt from "../components/AboutSectionAlt";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import CertificatesSection from "../components/CertificatesSection";

const Home = () => {
  const aboutSpacerRef = useRef(null);
  const skillsSpacerRef = useRef(null);
  const portSpacerRef = useRef(null);
  const certSpacerRef = useRef(null);

  const sectionRefs = {
    about: aboutSpacerRef,
    skills: skillsSpacerRef,
    port: portSpacerRef,
    cert: certSpacerRef,
  };

  // const handleScrollTo = () => {
  //   if (!aboutSpacerRef.current) return;
  //   aboutSpacerRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const handleScrollTo = (e) => {
    const { scrollId } = e.currentTarget.dataset;
    if (!scrollId) return;
    if (scrollId === "top") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    if (!sectionRefs[scrollId].current) return;
    sectionRefs[scrollId].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout onScrollTo={handleScrollTo}>
      <Header onScrollTo={handleScrollTo} />
      <Box
        gridColumn="center"
        h={{ base: 12, sm: 24 }}
        ref={aboutSpacerRef}
      ></Box>
      <AboutSectionAlt />
      {/* <AboutSection /> */}
      <Box
        gridColumn="center"
        h={{ base: 16, sm: 32 }}
        ref={skillsSpacerRef}
      ></Box>
      <SkillsSection />
      <Box
        gridColumn="center"
        h={{ base: 16, sm: 32 }}
        ref={portSpacerRef}
      ></Box>
      <PortfolioSection />
      <Box
        gridColumn="center"
        h={{ base: 16, sm: 32 }}
        ref={certSpacerRef}
      ></Box>
      <CertificatesSection />
      <Box gridColumn="center" h={{ base: 16, sm: 32 }}></Box>
    </Layout>
  );
};

export default Home;
