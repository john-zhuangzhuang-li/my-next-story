import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import SkillsSection from "../components/SkillsSection";
import CertificatesSection from "../components/CertificatesSection";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Box bg="green.100" minH="600px" gridColumn="center">
        BIG BOX
      </Box>
      <SkillsSection />
      <Box bg="green.100" minH="600px" gridColumn="center">
        BIG BOX
      </Box>
      <CertificatesSection />
    </Layout>
  );
};

export default Home;
