import {
  Flex,
  Heading,
  Grid,
  chakra,
  shouldForwardProp,
  Icon,
  Circle,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";
import certImg01 from "../public/cert-imgs/cert-01.webp";
import certImg02 from "../public/cert-imgs/cert-02.webp";
import certImg03 from "../public/cert-imgs/cert-03.webp";
import certImg04 from "../public/cert-imgs/cert-04.webp";

import { DiJavascript1, DiCss3 } from "react-icons/di";
import { FaReact, FaCode } from "react-icons/fa";

const certImgList = {
  certImg01,
  certImg02,
  certImg03,
  certImg04,
};

const certIconList = {
  certImg01: DiJavascript1,
  certImg02: FaReact,
  certImg03: DiCss3,
  certImg04: FaCode,
};

// const CertItem = chakra(motion.li, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

const CertTitle = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

// const item = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };

const header = {
  visible: { opacity: 1, y: "0" },
  hidden: { opacity: 0, y: "-20px" },
};

const CertificateCard = ({ id, title, gradient }) => {
  return (
    <Flex
      //   display="flex"
      //   variants={item}
      as="li"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      rowGap={6}
      p={9}
      mx={{ base: 0, sm: 6 }}
      my={{ base: 3, sm: 6 }}
      bg="#fff"
      //   bgGradient="linear(#fff, #333) padding-box"
      //   bg="linear-gradient(#fff, #fff) padding-box,
      //   linear-gradient(to right, darkblue, darkorchid) border-box"
      //   border="1px"
      //   borderColor="gray.300"
      position="relative"
      borderRadius="2xl"
      // boxShadow="base"
      _before={{
        content: '""',
        position: "absolute",
        inset: "-5px",
        // transform: "translateY(10px)",
        // bg: "pink.500",
        // bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgGradient: gradient,
        borderRadius: "2xl",
        filter: "blur(15px)",
        zIndex: "-1",
        opacity: "0",
        transition: "all 0.2s",
      }}
      _after={{
        content: '""',
        position: "absolute",
        inset: "-1px",
        //   filter: "blur(10px)",
        zIndex: "-1",
        opacity: "0.4",
        bg: "gray.400",
        boxShadow: "base",
        // bgGradient: "linear(to-l, #7928CA, #FF0080)",
        borderRadius: "2xl",
        transition: "all 0.2s",
      }}
      //   _after={{
      //     content: '""',
      //     position: "absolute",
      //     inset: "5px",
      //     filter: "blur(10px)",
      //     zIndex: "-1",
      //     opacity: "1",
      //     bg: "#fff",
      //     borderRadius: "lg",
      //   }}
      sx={{
        "&:hover::before": { opacity: "0.75" },
        "&:hover::after": {
          opacity: "0.75",
          // bgGradient: "linear(to-l, #7928CA, #FF0080)",
          bgGradient: gradient,
        },
      }}
    >
      {/* <Flex justifyContent="flex-start" alignItems="center" alignSelf="stretch"> */}
      <CertTitle
        variants={header}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        alignSelf="flex-start"
        overflow="hidden"
      >
        <Circle size={12} bgGradient={gradient} ml={3}>
          <Icon as={certIconList[id]} w={6} h={6} color="#fff" />
        </Circle>
        <Heading
          size="lg"
          ml={3}
          noOfLines={1}
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgGradient={gradient}
          bgClip="text"
        >
          {title}
        </Heading>
      </CertTitle>
      {/* </Flex> */}
      <NextImage src={certImgList[id]} alt="Certificate image" />
    </Flex>
  );
};

export default CertificateCard;
