import {
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  Box,
  Button,
  IconButton,
  Stack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";
import { MdCheck } from "react-icons/md";

import HeaderImgAlt from "./HeaderImgAlt";

const BtnBorder = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const FooterCard = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const card = {
  visible: {
    opacity: 1,
    y: "-60px",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
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

const Footer = ({ onContactModalOpen }) => {
  return (
    <Flex
      as="footer"
      gridColumn="1 / -1"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      pb={12}
      bgGradient="linear-gradient(to bottom, #fff 0%, #fff 15%, gray.700 15.1%, gray.700 100%)"
    >
      <FooterCard
        display="flex"
        initial="hidden"
        whileInView="visible"
        variants={card}
        //  viewport={{ once: true }}
        w={{ base: "auto", sm: "25rem", md: "35rem", lg: "50rem" }}
        minH="15rem"
        flexDir="column"
        bg="#fff"
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        position="relative"
        py={12}
        px={{ base: 3, lg: 12 }}
        rowGap={6}
        // transform="translateY(-60px)"
        _before={{
          content: '""',
          position: "absolute",
          inset: "10px -5px -12px",
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
          bg: "#fff",
          border: "1px",
          borderColor: "gray.200",
          boxShadow: "base",
          borderRadius: "2xl",
        }}
      >
        <HeaderImgAlt />
        <Stack direction="column" spacing={6} alignItems="center">
          <Heading
            size="2xl"
            bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
            bgClip="text"
            lineHeight="1.3"
          >
            Ready to start
          </Heading>
          <Box maxW={{ base: "17.5rem", sm: "25rem", lg: "38rem" }} px={6}>
            <Text fontSize={{ base: "sm", sm: "md" }} textStyle="content">
              {`...and contribute to your team's success!`}
            </Text>
            {/* <Text fontSize={{ base: "sm", sm: "md" }} textStyle="content">
              I am ready to showcase my skills and contribute to your team's
              success! Please don't hesitate to reach out if you're interested
              in learning more about what I can offer.
            </Text> */}
          </Box>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 1, md: 3 }}
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
            Adaptable and quick learner
          </Button>
        </Stack>
        <Box position="relative" overflow="hidden" borderRadius="xl">
          <BtnBorder
            position="absolute"
            bgGradient={`conic-gradient(from 0turn, #4158D0 10%, #C850C0 35%, #FFCC70 65%, #4158D0 90%)`}
            inset="0"
            initial={{ rotate: 0, scale: 150 }}
            animate={{ rotate: 360, scale: 150 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              type: "tween",
              bounce: 0,
              ease: "linear",
            }}
          ></BtnBorder>
          <Button
            m="6px"
            textTransform="uppercase"
            size="lg"
            onClick={onContactModalOpen}
          >
            Say Hello
          </Button>
        </Box>
      </FooterCard>
      <Stack dir="column" spacing={3} align="center">
        <Link
          href="https://github.com/john-zhuangzhuang-li/my-next-story"
          isExternal
        >
          <IconButton
            aria-label="View github repo"
            colorScheme="whiteAlpha"
            variant="ghost"
            size="lg"
            icon={<Icon as={RiGithubFill} w={8} h={8} color="#fff" />}
          />
        </Link>
        <Heading as="h6" size="sm" color="#fff">
          {`Built by John Li, Seeker of jobs 🕵️‍♂️`}
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Footer;
