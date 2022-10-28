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

const ItemTreat = () => {
  return (
    <Flex as="li" gap={16}>
      {/* IMAGE AREA */}
      <Flex
        width={{ base: "auto", lg: "55%" }}
        bg="pink.300"
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
          <Heading size="2xl">Treat or treat</Heading>
          <Text fontSize="xl">Fictional store for delicious desserts</Text>
        </Stack>

        {/* LIST COMPONENT */}
        <Stack direction="column" rowGap={3}>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="pink.400">
              <Icon as={MdCake} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Responsive design</Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="pink.400">
              <Icon as={FaSearch} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Search, filter, and sorting of products</Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="pink.400">
              <Icon as={MdShoppingCart} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Cart integrated as a side drawer for convenience
            </Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="pink.400">
              <Icon as={FaCode} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Built with React, JavaScript, MUI, React router, and Firebase
            </Text>
          </Stack>
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
    </Flex>
  );
};

export default ItemTreat;
