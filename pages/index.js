import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import CertificatesSection from "../components/CertificatesSection";

const Home = () => {
  return (
    <Layout>
      <Header />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <CertificatesSection />
    </Layout>
  );
};

export default Home;
