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

const Section = chakra(motion.section, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const FrameBg = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AboutSection = () => {
  const figureRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: figureRef,
    offset: ["end end", "center center"],
  });

  return (
    <Section
      gridColumn="center"
      display="flex"
      justifyContent="center"
      // style={{ opacity: scrollYProgress }}
    >
      {/* FIGURE AREA */}
      <Flex
        w="30rem"
        // bg="purple.200"
        ref={figureRef}
        py={6}
        justifyContent="center"
        alignItems="center"
      >
        {/* <FigureMain
          w="25rem"
          h="50rem"
          bg="teal.700"
        ></FigureMain> */}
        <Grid
          w="25em"
          h="40em"
          gridTemplateColumns="1.5em [screen-start] 22em [screen-end] 1.5em"
          gridTemplateRows="[full-start] 4em [screen-start] 32em [screen-end] 4em [full-end]"
          border="1px"
          borderColor="gray.500"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="dark-lg"
          // rounded="md"
        >
          <Flex
            gridColumn="1 / -1"
            gridRow="full"
            // bg="teal.400"
            // bgGradient={`linear-gradient( 109.6deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )`}
            // bgGradient={`linear-gradient( 180.3deg,  rgba(214,224,255,1) 37.2%, rgba(254,168,168,1) 137.3% )`}
            zIndex="25"
            // flexDir="column"
            // justifyContent="flex-start"
          >
            {/* MAYBE SHOULD KEEP THE WHITE LOOK!! ITS AMAZING!! */}
            {/* INSTEAD DO SOME ANIMATION ON OTHER STUFF */}
            <FrameBg
              flex="1"
              bgGradient={`linear-gradient( 180.3deg,  rgba(214,224,255,1) 37.2%, rgba(254,168,168,1) 137.3% )`}
              style={{ scaleY: scrollYProgress }}
              transformOrigin="top"
            ></FrameBg>
          </Flex>
          <Flex
            gridColumn="screen"
            gridRow="screen"
            bg="#fff"
            border="1px"
            borderColor="gray.500"
            borderRadius="lg"
            zIndex="50"
          ></Flex>
        </Grid>
      </Flex>
      {/* CONTENT AREA */}
      <Flex
        width="25rem"
        flexDir="column"
        justifyContent="center"
        // alignItems="center"
        p={3}
        rowGap={6}
      >
        <Heading size="2xl">About me</Heading>
        {/* <Progress value={scrollYProgress * 100} />
        <Button onClick={() => console.log(scrollYProgress)}>PRINT</Button> */}
        <Text fontSize="xl">
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
          touchpoint, and there is no better starting place than the web
          interface to make this happen!
        </Text>
      </Flex>
    </Section>
  );
};

export default AboutSection;
