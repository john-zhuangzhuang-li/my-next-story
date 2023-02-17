import {
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  Button,
  Stack,
  Icon,
  Circle,
  Link,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";
import testImg from "../../public/port-imgs/story-02.webp";

import { RiExternalLinkLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaCode, FaGlasses } from "react-icons/fa";
import { MdAnimation, MdUpdate } from "react-icons/md";

// CURRENT SCR SHOT SIZE: 1800 X 1200

const PortfolioItem = chakra(motion.li, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PortfolioImage = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const FeatureItem = chakra(motion.li, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const portfolio = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const image = {
  visible: {
    y: "0%",
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: { y: "115%" },
};

const feature = {
  visible: { opacity: 1, y: "0" },
  hidden: { opacity: 0, y: "-20px" },
};

const ItemMyStory = () => {
  return (
    <PortfolioItem
      display="flex"
      overflow="hidden"
      columnGap={16}
      rowGap={9}
      initial="hidden"
      whileInView="visible"
      variants={portfolio}
      viewport={{ once: true }}
      minH="30rem"
    >
      {/* IMAGE AREA */}
      <Flex
        width={{ base: "auto", lg: "55%" }}
        // bg="purple.300"
        bgGradient="linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
        justifyContent="center"
        alignItems="center"
        p={{ base: 3, md: 9 }}
        borderRadius="lg"
        overflow="hidden"
      >
        {/* IMAGE WRAP */}
        <PortfolioImage
          display="flex"
          borderRadius="lg"
          variants={image}
          overflow="hidden"
        >
          <NextImage src={testImg} alt="Portfolio image" />
        </PortfolioImage>
      </Flex>
      {/* TITLE AREA */}
      <Flex flex="1" flexDir="column" rowGap={8} justify="center">
        <Stack direction="column" spacing={2}>
          <Heading size="xl" color="purple.500">
            My story
          </Heading>
          <Text fontSize={{ base: "md", sm: "xl" }}>
            My latest portfolio page
          </Text>
        </Stack>
        {/* LIST COMPONENT */}
        <Stack as="ul" direction="column" rowGap={3} listStyleType="none">
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="purple.500">
              <Icon as={FaGlasses} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize={{ base: "md", sm: "xl" }}>Responsive design</Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="purple.500">
              <Icon as={MdUpdate} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize={{ base: "md", sm: "xl" }}>
              Upgraded from a vanilla prototype and an alternative retro version
            </Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="purple.500">
              <Icon as={MdAnimation} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize={{ base: "md", sm: "xl" }}>
              Coordinated, layered, and scroll-related animation for components
            </Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="purple.500">
              <Icon as={FaCode} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize={{ base: "md", sm: "xl" }}>
              Built with JavaScript, Next.js, Chakra UI, and Framer motion
            </Text>
          </FeatureItem>
        </Stack>
        {/* ACTION AREA */}
        <Stack direction="row" spacing={3} align="center">
          <Link
            href="https://john-li-frontend-dev.vercel.app/"
            _hover={{ textDecoration: "none" }}
            isExternal
          >
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
            _hover={{ textDecoration: "none" }}
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
    </PortfolioItem>
  );
};

export default ItemMyStory;
