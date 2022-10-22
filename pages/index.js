import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Box bg="green.100" minH="1200px" gridColumn="center">
        BIG BOX
      </Box>
      <SkillsSection />
    </Layout>
  );
};

export default Home;
