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

const Header = ({ onScrollTo }) => {
  return (
    <Flex
      gridColumn="center"
      h="50vh"
      minH="35rem"
      justifyContent="center"
      alignItems="center"
      gap={12}
      mb={12}
    >
      {/* CONTENT BOX */}
      <Flex
        flex="1"
        maxW="50%"
        flexDir="column"
        justifyContent="center"
        rowGap={6}
      >
        <Heading size="lg">Hi, I'm John Li &nbsp;👋</Heading>
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
      <Flex justifyContent="center" alignItems="center" pb="2.5rem">
        <Flex
          w="15rem"
          h="17.5rem"
          borderRadius="0 0 1000em 1000em"
          // bg="purple.400"
          justifyContent="center"
          alignItems="flex-end"
          overflow="hidden"
        >
          <Circle
            size="15rem"
            bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
          ></Circle>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
