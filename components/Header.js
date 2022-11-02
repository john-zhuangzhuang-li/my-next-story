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
import imgW from "../public/header-imgs/header-01-T01-W.webp";
import imgCW from "../public/header-imgs/header-01-T01-CW.webp";

import {
  RiCodeSSlashFill,
  RiExternalLinkLine,
  RiGithubFill,
  RiUser5Line,
} from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaCoffee, FaUser, FaCode, FaChevronDown } from "react-icons/fa";
import { BiUserCheck, BiImage, BiImageAdd } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FiArrowDown } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const EmojiWrapper = chakra(motion.span, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const FigureBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ImgWrapper = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const background = {
  visible: {
    opacity: 1,
    scale: 1,
    // rotate: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
    // rotate: 180,
    transition: {
      when: "afterChildren",
    },
  },
};

const image = {
  visible: {
    scale: 1.2,
    y: "-1rem",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  hidden: { scale: 1.2, y: "17.5rem" },
};

const Header = ({ onScrollTo }) => {
  return (
    <Flex
      gridColumn="center"
      h={{ base: "auto", lg: "50vh" }}
      minH="35rem"
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignItems="center"
      // gap={{ base: 12, lg: 12 }}
      gap={12}
      flexDir={{ base: "column-reverse", lg: "row" }}
      // mb={12}
    >
      {/* CONTENT BOX */}
      <Flex
        flex="1"
        maxW={{ base: "100%", lg: "50%" }}
        flexDir="column"
        justifyContent={{ base: "flex-start", lg: "center" }}
        rowGap={6}
        // bg="pink.300"
      >
        <Heading size="lg">
          Hi, I'm John Li &nbsp;
          <EmojiWrapper
            // animate={{ scale: [0.1, 0.5, 1, 0.5, 0.1] }}
            display="inline-block"
            animate={{ rotate: [-5, 15, -5, 15, -5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            transformOrigin="bottom right"
          >
            👋
          </EmojiWrapper>
        </Heading>
        <Heading size="2xl">Front-End Developer</Heading>
        <Text fontSize="xl">
          I like to make things easy and enjoyable. That applies to building
          interfaces for web applications.
        </Text>
        {/* ACTIONS */}
        <Stack direction="row" spacing={3} align="center">
          <Button
            rightIcon={<Icon as={FaChevronDown} />}
            colorScheme="purple"
            variant="solid"
            textTransform="uppercase"
            onClick={onScrollTo}
          >
            learn more
          </Button>

          <Link
            href="https://github.com/john-zhuangzhuang-li/my-next-story"
            isExternal
          >
            <Button
              // rightIcon={<Icon as={TfiEmail} />}
              colorScheme="purple"
              // variant="outline"
              variant="ghost"
              textTransform="uppercase"
            >
              contact me
            </Button>
          </Link>
        </Stack>
      </Flex>
      {/* IMG BOX */}
      <Flex
        justifyContent="center"
        alignItems="center"
        pb={{ base: "0rem", lg: "1rem" }}
        // bg="teal.300"
      >
        {/* <Flex */}
        <FigureBox
          display="flex"
          initial="hidden"
          animate="visible"
          variants={background}
          w={{ base: "12rem", lg: "15rem" }}
          h={{ base: "16rem", lg: "17.5rem" }}
          // h="17.5rem"
          borderRadius="0 0 1000em 1000em"
          // bg="purple.400"
          justifyContent="center"
          alignItems="flex-end"
          overflow="hidden"
          position="relative"
        >
          <Circle
            position="absolute"
            bottom="0"
            // zIndex="25"
            size={{ base: "12rem", lg: "15rem" }}
            bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
          ></Circle>
          {/* <Flex transform="scale(1.2) translateY(-1em)"> */}
          <ImgWrapper display="flex" variants={image}>
            <NextImage src={imgCW} alt="Header image" />
          </ImgWrapper>
          {/* </Flex> */}
        </FigureBox>
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
};

export default Header;
