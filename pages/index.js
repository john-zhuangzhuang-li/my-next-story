import { useRef } from "react";

import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import CertificatesSection from "../components/CertificatesSection";

const Home = () => {
  const aboutSpacerRef = useRef(null);

  const handleScrollTo = () => {
    if (!aboutSpacerRef.current) return;
    aboutSpacerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Header onScrollTo={handleScrollTo} />
      <Box gridColumn="center" minH="10rem" ref={aboutSpacerRef}></Box>
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <CertificatesSection />
    </Layout>
  );
};

export default Home;
