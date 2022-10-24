import {
  Flex,
  Heading,
  Grid,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import CertificateCard from "./CertificateCard";

import { certData } from "../store/dummy";

const CertList = chakra(motion.ul, {
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
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
};

const CertificatesSection = () => {
  return (
    <Flex
      as="section"
      gridColumn="center"
      minH="30rem"
      flexDir="column"
      rowGap={3}
      //   bgGradient="linear(to-r, #fff, gray.100)"
    >
      <Heading as="h3" size="md">
        Certificates
      </Heading>
      {/* <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}> */}
      <CertList
        initial="hidden"
        whileInView="visible"
        variants={list}
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {certData.map(({ id, title }) => (
          <CertificateCard key={id} id={id} title={title} />
        ))}
      </CertList>
      {/* </Grid> */}
    </Flex>
  );
};

export default CertificatesSection;
