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

import { FiDownload } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";

const AboutSectionAlt = () => {
  return (
    <Flex
      gridColumn="1 / -1"
      py={{ base: 6, sm: 12 }}
      bgGradient={`linear-gradient(120deg, rgba(224, 195, 252, 0.3) 0%, rgba(142, 197, 252, 0.3) 100%)`}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        maxW="65rem"
        flexDir="column"
        justifyContent="center"
        alignItems="flex-start"
        rowGap={{ base: 6, sm: 12 }}
        p={{ base: 6, sm: 12 }}
        // bg="gray.100"
        borderRadius="xl"
      >
        <Heading size={{ base: "xl", sm: "xl" }}>About me</Heading>
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={6}
        >
          <Stack dir="column" align="flex-start" spacing={6}>
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              It's been over a decade since I wrote out my first HTML page in
              middle school using Notepad, but the memory never fades for me.
            </Text>
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              While life directed me to become a sales manager for years, I
              upgraded my skills through online courses during the pandemic to
              adapt to the modern environment of front-end web development.
            </Text>
          </Stack>
          <Stack dir="column" align="flex-start" spacing={6}>
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              It's been over a decade since I wrote out my first HTML page in
              middle school using Notepad, but the memory never fades for me.
            </Text>
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              To me, a good business makes a customer's life happier at every
              touchpoint, and there is no better starting place than the web
              interface to make this happen!
            </Text>
          </Stack>
        </Grid>
        <Button
          rightIcon={<Icon as={MdFileDownload} />}
          colorScheme="purple"
          variant="solid"
          textTransform="uppercase"
        >
          resume
        </Button>
      </Flex>
    </Flex>
  );
};

export default AboutSectionAlt;
