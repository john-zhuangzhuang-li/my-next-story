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

const HeaderImgAlt = () => {
  return (
    <Grid mb={6}>
      <Flex
        gridRow="1 / span 1"
        gridColumn="1 / span 1"
        w="10rem"
        h="10rem"
        borderRadius="xl"
        bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
        transform="translateX(10px) translateY(10px)"
      ></Flex>
      <Flex
        gridRow="1 / span 1"
        gridColumn="1 / span 1"
        w="10rem"
        h="10rem"
        borderRadius="xl"
        overflow="hidden"
        transform="translateX(-10px) translateY(-10px)"
      >
        <NextImage src={altImage} alt="Header image alt" />
      </Flex>
    </Grid>
  );
};

export default HeaderImgAlt;
