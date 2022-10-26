import {
  Flex,
  Heading,
  Grid,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <Flex
      as="section"
      gridColumn="center"
      flexDir="column"
      rowGap={3}
      //   bgGradient="linear(to-r, #fff, gray.100)"
    >
      <Heading as="h3" size="md">
        Portfolio
      </Heading>
      {/* <Flex h="30rem" alignItems="stretch">
        <Flex width="60%" bg="teal.300"></Flex>
        <Flex flex="1" bg="yellow.700"></Flex>
      </Flex> */}
      <Flex as="ul" flexDir="column" rowGap={32} listStyleType="none">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </Flex>
    </Flex>
  );
};

export default PortfolioSection;
