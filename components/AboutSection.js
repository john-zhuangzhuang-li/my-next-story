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
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";

const Section = chakra(motion.section, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AboutSection = () => {
  return (
    <Section gridColumn="center" display="flex">
      <Flex flex="1" bg="purple.200">
        IMG BOX
      </Flex>
      <Flex
        width="40%"
        flexDir="column"
        justifyContent="center"
        // alignItems="center"
        p={3}
        rowGap={6}
      >
        <Heading size="2xl">About me</Heading>
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
