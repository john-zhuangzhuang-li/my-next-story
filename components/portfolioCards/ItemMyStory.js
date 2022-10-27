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
import testImg from "../../public/port-imgs/test-02.webp";

import {
  RiCodeSSlashFill,
  RiExternalLinkLine,
  RiGithubFill,
  RiUser5Line,
} from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaCoffee, FaUser, FaCode, FaSearch, FaGlasses } from "react-icons/fa";
import { BiUserCheck, BiImage, BiImageAdd, BiGlasses } from "react-icons/bi";
import {
  MdCake,
  MdShoppingCart,
  MdUpgrade,
  MdAnimation,
  MdUpdate,
} from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { BsEyeglasses } from "react-icons/bs";

// CURRENT SCR SHOT SIZE: 1800 X 1200

// CONSIDER STILL INCLUDE CHIPS IN - TEXT ONLY?

const ItemMyStory = () => {
  return (
    <Flex
      as="li"
      gap={16}
      // sx={{
      //   flexDirection: { base: "column", lg: "row" },
      //   "&:nth-child(even)": {
      //     flexDirection: { base: "column", lg: "row-reverse" },
      //   },
      // }}
    >
      {/* IMAGE AREA */}
      <Flex
        width={{ base: "auto", lg: "55%" }}
        bg="purple.300"
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
        <Stack direction="column" rowGap={2}>
          <Heading size="2xl">My story</Heading>
          <Text fontSize="xl">My latest portfolio page</Text>
        </Stack>

        {/* LIST COMPONENT */}
        <Stack direction="column" rowGap={3}>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="purple.400">
              <Icon as={FaGlasses} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Responsive design</Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="purple.400">
              <Icon as={MdUpdate} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Upgraded from a vanilla prototype and an alternative retro version
            </Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="purple.400">
              <Icon as={MdAnimation} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Coordinated, layered, and scroll-related animation for components
            </Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="purple.400">
              <Icon as={FaCode} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Built with JavaScript, Next.js, Chakra UI, and Framer motion
            </Text>
          </Stack>
        </Stack>

        {/* ACTION AREA */}
        <Stack direction="row" spacing={3} align="center">
          <Link href="https://treat-or-treat.web.app" isExternal>
            <Button
              rightIcon={<Icon as={RiExternalLinkLine} />}
              colorScheme="purple"
              variant="solid"
              textTransform="uppercase"
            >
              demo
            </Button>
          </Link>
          <Link
            href="https://github.com/john-zhuangzhuang-li/my-next-story"
            isExternal
          >
            <Button
              rightIcon={<Icon as={SiGithub} />}
              colorScheme="purple"
              variant="outline"
              textTransform="uppercase"
            >
              code
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default ItemMyStory;
