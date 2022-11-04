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
import { FaCoffee, FaUser, FaCode } from "react-icons/fa";
import { BiUserCheck, BiImage, BiImageAdd } from "react-icons/bi";
import { MdImage } from "react-icons/md";

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
    x: "0%",
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: { x: "-115%" },
};

const feature = {
  visible: { opacity: 1, y: "0" },
  hidden: { opacity: 0, y: "-20px" },
};

const ItemCupBottomless = () => {
  return (
    <PortfolioItem
      display="flex"
      overflow="hidden"
      gap={16}
      initial="hidden"
      whileInView="visible"
      variants={portfolio}
      viewport={{ once: true }}
      minH="30rem"
      // bg="purple.100"
    >
      {/* IMAGE AREA */}
      <Flex
        width={{ base: "auto", lg: "55%" }}
        // bg="teal.300"
        bgGradient="linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)"
        justifyContent="center"
        alignItems="center"
        p={{ base: 3, md: 9 }}
        borderRadius="lg"
        overflow="hidden"
        // transition="padding 0.2s ease-in-out"
        // _hover={{ p: 3 }}
      >
        {/* IMAGE BOX */}
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
        <Stack direction="column" rowGap={2}>
          <Heading size="2xl" color="teal.500">
            Cup Bottomless
          </Heading>
          <Text fontSize="xl">Photo gallery of stylish coffee makers</Text>
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
            <Circle size={10} bg="teal.500">
              <Icon as={FaCoffee} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Responsive design with color modes</Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="teal.500">
              <Icon as={FaUser} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              User authentication and upload feature with image optimization
            </Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="teal.500">
              <Icon as={MdImage} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Initial page loaded by static site generator, and load more
              content as you browse
            </Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="teal.500">
              <Icon as={FaCode} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Built with Next.js, TypeScript, Chakra UI, and Firebase
            </Text>
          </FeatureItem>
        </Stack>

        {/* ACTION AREA */}
        <Stack direction="row" spacing={3} align="center">
          <Link href="https://coffee-machines.vercel.app/" isExternal>
            <Button
              rightIcon={<Icon as={RiExternalLinkLine} />}
              colorScheme="teal"
              variant="solid"
              textTransform="uppercase"
            >
              demo
            </Button>
          </Link>
          <Link
            href="https://github.com/john-zhuangzhuang-li/coffee-machines"
            isExternal
          >
            <Button
              rightIcon={<Icon as={SiGithub} />}
              colorScheme="teal"
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

export default ItemCupBottomless;
