import {
  Flex,
  Heading,
  Grid,
  chakra,
  shouldForwardProp,
  Box,
  Container,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";
import testImg from "../public/port-imgs/test-02.webp";

// CURRENT SCR SHOT SIZE: 1800 X 1200

// NEXT: USE THE TITLE CIRCLE FORM CERT IN HERE!! MAKE BG GRAD!! SHOULD LOOK GOOD
// TEXT AND CHIP ON OTHER SIDE!! CAN FIT MORE TXT TOO!!

const PortfolioCard = ({ reverse }) => {
  return (
    <Flex flexDir={reverse ? "row-reverse" : "row"}>
      <Flex
        width="60%"
        bg="teal.300"
        justifyContent="center"
        alignItems="center"
        p={9}
        borderRadius="lg"
      >
        <Flex borderRadius="lg" overflow="hidden" bg="gray.200">
          <NextImage src={testImg} alt="Portfolio image" />
        </Flex>
      </Flex>
      <Flex flex="1" flexDir="column" rowGap={6}>
        <Heading size="lg">Cup Bottomless</Heading>
        <Heading size="sm">Online photo gallery with user upload</Heading>
      </Flex>
    </Flex>
  );
};

export default PortfolioCard;
