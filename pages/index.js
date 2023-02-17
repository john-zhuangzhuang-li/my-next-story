import { useRef } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import AboutSectionAlt from "../components/AboutSectionAlt";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactModal from "../components/ContactModal";

import { soApiBase, soApiUser, soApiTags } from "../store/dummy";

const Home = ({ updatedUser, updatedTags, updated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sectionsRef = useRef({});

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
    if (!sectionsRef.current[scrollId]) return;
    sectionsRef.current[scrollId].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Layout onScrollTo={handleScrollTo} onContactModalOpen={onOpen}>
        <Header onScrollTo={handleScrollTo} onContactModalOpen={onOpen} />
        <Box
          gridColumn="center"
          h={{ base: 12, sm: 16 }}
          ref={(el) => (sectionsRef.current["about"] = el)}
        ></Box>
        <AboutSectionAlt {...{ updatedUser, updatedTags, updated }} />
        <Box
          gridColumn="center"
          h={{ base: 16, sm: 32 }}
          ref={(el) => (sectionsRef.current["skills"] = el)}
        ></Box>
        <SkillsSection />
        <Box
          gridColumn="center"
          h={{ base: 16, sm: 32 }}
          ref={(el) => (sectionsRef.current["port"] = el)}
        ></Box>
        <PortfolioSection />
        <Box
          gridColumn="center"
          h={{ base: 16, sm: 32 }}
          ref={(el) => (sectionsRef.current["cert"] = el)}
        ></Box>
        <CertificatesSection />
        <Box gridColumn="center" h={{ base: 16, sm: 32 }}></Box>
      </Layout>
      <ContactModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  // For testing without data fetch
  // return {
  //   props: {
  //     updatedUser: null,
  //     updatedTags: null,
  //     updated: null,
  //   },
  // };

  const resUser = await fetch(`${soApiBase}${soApiUser}`);
  if (!resUser.ok)
    return {
      props: {
        updatedUser: null,
        updatedTags: null,
        updated: null,
      },
      revalidate: 86400,
    };
  const userData = await resUser.json();
  const updated = new Date().toLocaleDateString("en-CA");
  const { items: userItems } = userData;
  const { badge_counts: badgeCounts, reputation } = userItems[0];
  const resTags = await fetch(`${soApiBase}${soApiTags}`);
  if (!resTags.ok)
    return {
      props: {
        updatedUser: {
          badgeCounts,
          reputation,
        },
        updatedTags: null,
        updated,
      },
      revalidate: 86400,
    };
  const tagsData = await resTags.json();
  const { items: tagItems } = tagsData;
  const updatedTags = tagItems.map((item, index) => {
    const {
      answer_count: answerCount,
      answer_score: answerScore,
      question_count: questionCount,
      question_score: questionScore,
      tag_name: title,
    } = item;
    const score = +answerScore + +questionScore;
    const posts = +answerCount + +questionCount;
    return {
      id: `so-tag-${index + 1}`,
      title,
      score,
      posts,
      badge: score > 100 ? "bronze" : null,
    };
  });
  return {
    props: {
      updatedUser: {
        badgeCounts,
        reputation,
      },
      updatedTags,
      updated,
    },
    revalidate: 86400,
  };
};
