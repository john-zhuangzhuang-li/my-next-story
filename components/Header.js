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
  textDecoration,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";

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

import HeaderImg from "./HeaderImg";

const EmojiWrapper = chakra(motion.span, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = ({ onScrollTo }) => {
  return (
    <Flex
      gridColumn="center"
      // h={{ base: "auto", lg: "50vh" }}
      minH="35rem"
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignItems="center"
      // gap={{ base: 12, lg: 12 }}
      gap={12}
      flexDir={{ base: "column-reverse", lg: "row" }}
      // mb={12}
      // bg="gray.700"
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
        <Heading size={{ base: "xl", sm: "2xl" }}>Front-End Developer</Heading>
        <Text fontSize={{ base: "md", sm: "xl" }}>
          I like to make things easy and enjoyable. That applies to building
          interfaces for web applications.
        </Text>
        {/* ACTIONS */}
        <Stack
          direction="row"
          spacing={3}
          align="center"
          // justify={{ base: "center", sm: "flex-start" }}
        >
          <Button
            // rightIcon={<Icon as={FaChevronDown} />}
            // flex="1"
            colorScheme="purple"
            variant="solid"
            textTransform="uppercase"
            data-scroll-id="about"
            onClick={onScrollTo}
          >
            learn more
          </Button>
          <Link
            // display="flex"
            // flex="1"
            href="https://github.com/john-zhuangzhuang-li/my-next-story"
            isExternal
          >
            <Button
              // rightIcon={<Icon as={TfiEmail} />}
              // flex="1"
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
      <HeaderImg />
    </Flex>
  );
};

export default Header;
