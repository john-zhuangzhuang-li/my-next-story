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

import { RiExternalLinkLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaCode, FaSearch } from "react-icons/fa";
import { MdCake, MdShoppingCart } from "react-icons/md";

// CURRENT SCR SHOT SIZE: 1800 X 1200

// CONSIDER STILL INCLUDE CHIPS IN - TEXT ONLY?

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
  hidden: { x: "115%" },
};

const feature = {
  visible: { opacity: 1, y: "0" },
  hidden: { opacity: 0, y: "-20px" },
};

const ItemTreat = () => {
  return (
    <PortfolioItem
      display="flex"
      overflow="hidden"
      gap={16}
      initial="hidden"
      whileInView="visible"
      variants={portfolio}
      // viewport={{ once: true }}
    >
      {/* IMAGE AREA */}
      <Flex
        width={{ base: "auto", lg: "55%" }}
        // bg="pink.300"
        bgGradient="linear-gradient(104.9deg,  rgba(255,95,162,1) 2.3%, rgba(254,201,154,1) 92.7% )"
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
        <Stack direction="column" rowGap={2}>
          <Heading size="2xl" color="pink.500">
            Treat or treat
          </Heading>
          <Text fontSize="xl">Fictional store for delicious desserts</Text>
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
            <Circle size={10} bg="pink.500">
              <Icon as={MdCake} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Responsive design</Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="pink.500">
              <Icon as={FaSearch} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Search, filter, and sorting of products</Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="pink.500">
              <Icon as={MdShoppingCart} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Cart integrated as a side drawer for convenience
            </Text>
          </FeatureItem>
          <FeatureItem
            display="flex"
            flexDir="row"
            columnGap={3}
            alignItems="center"
            variants={feature}
          >
            <Circle size={10} bg="pink.500">
              <Icon as={FaCode} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Built with React, JavaScript, MUI, React router, and Firebase
            </Text>
          </FeatureItem>
        </Stack>

        {/* ACTION AREA */}
        <Stack direction="row" spacing={3} align="center">
          <Link href="https://treat-or-treat.web.app" isExternal>
            <Button
              rightIcon={<Icon as={RiExternalLinkLine} />}
              colorScheme="pink"
              variant="solid"
              textTransform="uppercase"
            >
              demo
            </Button>
          </Link>
          <Link
            href="https://github.com/john-zhuangzhuang-li/treat-or-treat"
            isExternal
          >
            <Button
              rightIcon={<Icon as={SiGithub} />}
              colorScheme="pink"
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

export default ItemTreat;
