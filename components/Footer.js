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
  IconButton,
  Stack,
  Icon,
  Circle,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";
import { MdCheck } from "react-icons/md";

import HeaderImgAlt from "./HeaderImgAlt";

const FooterCard = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

// const item = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };

const card = {
  visible: {
    opacity: 1,
    y: "-60px",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      // type: "tween",
      // duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    y: "20px",
    transition: {
      when: "afterChildren",
    },
  },
};

const Footer = () => {
  return (
    <Flex
      as="footer"
      gridColumn="1 / -1"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      // rowGap={3}
      pb={12}
      // bg="gray.700"
      // bgGradient="linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
      bgGradient="linear-gradient(to bottom, #fff 0%, #fff 15%, gray.700 15.1%, gray.700 100%)"
      // backgroundSize="100px"
      // backgroundPosition="top 200px"
    >
      <FooterCard
        display="flex"
        initial="hidden"
        whileInView="visible"
        variants={card}
        //  viewport={{ once: true }}
        w={{ base: "auto", lg: "50rem" }}
        minH="15rem"
        flexDir="column"
        bg="#fff"
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        position="relative"
        p={12}
        rowGap={6}
        // transform="translateY(-60px)"
        _before={{
          content: '""',
          position: "absolute",
          inset: "10px -5px -12px",
          // bg: "pink.500",

          // LIKELY TO USE
          // bgGradient: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,
          // bgGradient: `linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)`,
          bgGradient: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,

          transform: "scale(1)",

          borderRadius: "9xl",
          filter: "blur(18px)",
          zIndex: "-1",
          opacity: "0.8",
          transition: "all 0.3s",
        }}
        _after={{
          content: '""',
          position: "absolute",
          inset: "0",
          zIndex: "-1",
          // bg: "gray.700",
          bg: "#fff",
          border: "1px",
          borderColor: "gray.200",
          boxShadow: "base",
          // borderRadius: "lg",
          borderRadius: "2xl",
        }}
        // sx={{
        //   "&:hover::before": { opacity: "1", transform: "scale(1)" },
        // }}
      >
        <HeaderImgAlt />
        <Stack direction="column" spacing={3} alignItems="center">
          <Heading
            size="2xl"
            bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
            bgClip="text"
          >
            Hire me now
          </Heading>
          <Text size="lg">Please hire me right now</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 1, md: 3 }}
          // justify="center"
          // align="center"
        >
          <Button
            leftIcon={<Icon as={MdCheck} />}
            variant="ghost"
            cursor="default"
            colorScheme="purple"
          >
            Available immediately
          </Button>
          <Button
            leftIcon={<Icon as={MdCheck} />}
            variant="ghost"
            cursor="default"
            colorScheme="purple"
          >
            Work for free as intern
          </Button>
        </Stack>
        <Button colorScheme="purple" textTransform="uppercase" size="lg">
          contact me
        </Button>
      </FooterCard>
      <Stack dir="column" spacing={3} align="center">
        <Link
          href="https://github.com/john-zhuangzhuang-li/coffee-machines"
          isExternal
        >
          <IconButton
            aria-label="View github repo"
            colorScheme="gray"
            variant="ghost"
            size="lg"
            icon={<Icon as={RiGithubFill} w={8} h={8} color="#fff" />}
          />
        </Link>
        <Heading as="h6" size="sm" color="#fff">
          Built by John Li, Seeker of jobs 🕵️‍♂️
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Footer;
