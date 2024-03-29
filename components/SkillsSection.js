import { Flex, Heading, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import SkillCard from "./SkillCard";
import { skillIconData } from "../store/dummy";

const SkillList = chakra(motion.ul, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const SkillsSection = () => {
  return (
    <Flex
      as="section"
      gridColumn="center"
      alignItems="center"
      flexDir="column"
      rowGap={12}
    >
      <Heading as="h3" size={{ base: "xl", sm: "xl" }}>
        Skills & Tools
      </Heading>
      <SkillList
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={list}
        listStyleType="none"
        display="flex"
        gap={9}
        justifyContent="center"
        flexWrap="wrap"
      >
        {skillIconData.map(({ id, src, title }) => (
          <SkillCard key={id} iconSrc={src} title={title} />
        ))}
      </SkillList>
    </Flex>
  );
};

export default SkillsSection;
