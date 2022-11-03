import { useRef } from "react";

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
  Stack,
  Icon,
  Circle,
  Link,
  Progress,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, useScroll } from "framer-motion";

import NextImage from "next/image";

// const Section = chakra(motion.section, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

// const FrameBg = chakra(motion.figure, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

const AboutSectionAlt = () => {
  return (
    <Flex
      gridColumn="center"
      justifyContent="center"
      flexDir="column"
      rowGap={6}
      bg="gray.100"
      p={12}
    >
      <Heading size="xl">About me</Heading>

      <Grid gridTemplateColumns="repeat(2, 1fr)" columnGap={6}>
        <Stack dir="column" spacing={6}>
          <Text fontSize="xl" textStyle="content">
            It's been over a decade since I wrote out my first HTML page in
            middle school using Notepad, but the memory never fades for me.
          </Text>
          <Text fontSize="xl" textStyle="content">
            While life directed me to become a sales manager for years, I
            upgraded my skills through online courses during the pandemic to
            adapt to the modern environment of front-end web development.
          </Text>
        </Stack>
        <Stack dir="column" spacing={6}>
          {/* <Heading size="xl">About me</Heading> */}
          <Text fontSize="xl" textStyle="content">
            It's been over a decade since I wrote out my first HTML page in
            middle school using Notepad, but the memory never fades for me.
          </Text>
          {/* <Text fontSize="xl" textStyle="content">
            While life directed me to become a sales manager for years, I
            upgraded my skills through online courses during the pandemic to
            adapt to the modern environment of front-end web development.
          </Text> */}
          <Text fontSize="xl" textStyle="content">
            To me, a good business makes a customer's life happier at every
            touchpoint, and there is no better starting place than the web
            interface to make this happen!
          </Text>
        </Stack>
      </Grid>

      {/* <Text fontSize="xl">
        It's been over a decade since I wrote out my first HTML page in middle
        school using Notepad, but the memory never fades for me.
      </Text>
      <Text fontSize="xl">
        While life directed me to become a sales manager for years, I upgraded
        my skills through online courses during the pandemic to adapt to the
        modern environment of front-end web development.
      </Text>
      <Text fontSize="xl">
        To me, a good business makes a customer's life happier at every
        touchpoint, and there is no better starting place than the web interface
        to make this happen!
      </Text> */}
    </Flex>
  );
};

export default AboutSectionAlt;
