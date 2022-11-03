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

  const handleScrollTo = () => {
    if (!aboutSpacerRef.current) return;
    aboutSpacerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Header onScrollTo={handleScrollTo} />
      <Box gridColumn="center" minH={6} ref={aboutSpacerRef}></Box>
      <AboutSectionAlt />
      {/* <AboutSection /> */}
      <Box gridColumn="center" minH={6} ref={skillsSpacerRef}></Box>
      <SkillsSection />
      <Box gridColumn="center" minH={6} ref={portSpacerRef}></Box>
      <PortfolioSection />
      <Box gridColumn="center" minH={6} ref={certSpacerRef}></Box>
      <CertificatesSection />
    </Layout>
  );
};

export default Home;
