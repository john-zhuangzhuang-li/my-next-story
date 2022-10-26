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
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";
import testImg from "../public/port-imgs/test-02.webp";

import {
  RiCodeSSlashFill,
  RiExternalLinkLine,
  RiGithubFill,
  RiUser5Line,
} from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaCoffee, FaUser } from "react-icons/fa";
import { BiUserCheck, BiImage, BiImageAdd } from "react-icons/bi";

// CURRENT SCR SHOT SIZE: 1800 X 1200

// CONSIDER STILL INCLUDE CHIPS IN - TEXT ONLY?

const PortfolioCard = () => {
  return (
    <Flex
      as="li"
      gap={9}
      sx={{
        flexDirection: { base: "column", lg: "row" },
        "&:nth-child(even)": {
          flexDirection: { base: "column", lg: "row-reverse" },
        },
      }}
    >
      {/* IMAGE AREA */}
      <Flex
        width={{ base: "auto", lg: "60%" }}
        bg="teal.300"
        justifyContent="center"
        alignItems="center"
        p={{ base: 3, md: 9 }}
        borderRadius="lg"
      >
        {/* IMAGE WRAP */}
        <Flex borderRadius="lg" overflow="hidden">
          <NextImage src={testImg} alt="Portfolio image" />
        </Flex>
      </Flex>
      {/* TITLE AREA */}
      <Flex flex="1" flexDir="column" rowGap={8} justify="center">
        <Stack direction="column" rowGap={3}>
          <Heading size="2xl">Cup Bottomless</Heading>
          <Text fontSize="lg">Online photo gallery with user upload</Text>
        </Stack>

        {/* LIST COMPONENT */}
        <Stack direction="column" rowGap={3}>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={8} bg="teal.400">
              <Icon as={FaCoffee} color="#fff" />
            </Circle>
            <Text fontSize="lg">
              A photo collection of stylish coffee makers
            </Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={8} bg="teal.400">
              <Icon as={FaUser} color="#fff" />
            </Circle>
            <Text fontSize="lg">
              User authentication and upload with image optimization
            </Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={8} bg="teal.400">
              <Icon as={BiImage} color="#fff" />
            </Circle>
            <Text fontSize="lg">
              Initial page loaded by static site generator, and load more
              content as you browse
            </Text>
          </Stack>
          {/* <Stack direction="row" columnGap={3} align="center">
            <Circle size={8} bg="teal.400">
              <Icon as={BiImageAdd} color="#fff" />
            </Circle>
            <Text fontSize="lg">Load more content as you browse</Text>
          </Stack> */}
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={8} bg="teal.400">
              <Icon as={RiCodeSSlashFill} color="#fff" />
            </Circle>
            <Text fontSize="lg">
              Built with Next.js, Typescript, Chakra UI, and Firebase
            </Text>
          </Stack>
        </Stack>

        {/* ACTION AREA */}
        <Stack direction="row" spacing={3} align="center">
          <Button
            rightIcon={<Icon as={RiExternalLinkLine} />}
            colorScheme="teal"
            variant="solid"
            textTransform="uppercase"
          >
            demo
          </Button>
          <Button
            rightIcon={<Icon as={SiGithub} />}
            colorScheme="teal"
            variant="outline"
            textTransform="uppercase"
          >
            code
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default PortfolioCard;
