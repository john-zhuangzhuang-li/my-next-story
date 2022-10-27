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

// CONSIDER STILL INCLUDE CHIPS IN - TEXT ONLY?

const ItemCupBottomless = () => {
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
        <Stack direction="column" rowGap={2}>
          <Heading size="2xl">Cup Bottomless</Heading>
          <Text fontSize="xl">Photo gallery of stylish coffee makers</Text>
        </Stack>

        {/* LIST COMPONENT */}
        <Stack direction="column" rowGap={3}>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="teal.400">
              <Icon as={FaCoffee} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">Responsive design with color modes</Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="teal.400">
              <Icon as={FaUser} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              User authentication and upload feature with image optimization
            </Text>
          </Stack>
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="teal.400">
              <Icon as={MdImage} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Initial page loaded by static site generator, and load more
              content as you browse
            </Text>
          </Stack>
          {/* <Stack direction="row" columnGap={3} align="center">
            <Circle size={8} bg="teal.400">
              <Icon as={BiImageAdd} color="#fff" />
            </Circle>
            <Text fontSize="xl">Load more content as you browse</Text>
          </Stack> */}
          <Stack direction="row" columnGap={3} align="center">
            <Circle size={10} bg="teal.400">
              <Icon as={FaCode} color="#fff" w={5} h={5} />
            </Circle>
            <Text fontSize="xl">
              Built with Next.js, TypeScript, Chakra UI, and Firebase
            </Text>
          </Stack>
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
    </Flex>
  );
};

export default ItemCupBottomless;
