import {
  Flex,
  Heading,
  Text,
  Grid,
  chakra,
  shouldForwardProp,
  Box,
  Container,
  Button,
  IconButton,
  Stack,
  Icon,
  Circle,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";

import altImage from "../public/header-imgs/header-02-SQ.webp";

const wrapper = {
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0,
      // type: "tween",
      // duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    y: "-20px",
    transition: {
      when: "afterChildren",
    },
  },
};

const image = {
  visible: {
    x: "-10px",
    y: "-10px",
  },
  hidden: {
    x: "0px",
    y: "0px",
  },
};

const bg = {
  visible: {
    x: "10px",
    y: "10px",
  },
  hidden: {
    x: "0px",
    y: "0px",
  },
};

const HeaderImgAlt = () => {
  return (
    <Grid
      as={motion.div}
      variants={wrapper}
      mb={6}
      justifyContent="center"
      alignContent="center"
    >
      <Flex
        as={motion.figure}
        variants={bg}
        gridRow="1 / span 1"
        gridColumn="1 / span 1"
        w="10rem"
        h="10rem"
        borderRadius="xl"
        bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
        // transform="translateX(10px) translateY(10px)"
      ></Flex>
      <Flex
        as={motion.figure}
        variants={image}
        gridRow="1 / span 1"
        gridColumn="1 / span 1"
        w="10rem"
        h="10rem"
        borderRadius="xl"
        overflow="hidden"
        // transform="translateX(-10px) translateY(-10px)"
      >
        <NextImage src={altImage} alt="Header image alt" />
      </Flex>
    </Grid>
  );
};

export default HeaderImgAlt;
