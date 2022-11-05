import { Flex, chakra, shouldForwardProp, Box } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import NextImage from "next/image";

import mainImage from "../public/header-imgs/header-01-T01-CW.webp";

import useDisplayToggle from "../util/useDisplayToggle";

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
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      type: "tween",
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
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

const HeaderImg = () => {
  const { toToggle, displayToggled, handleToToggle, handleToggleOnLeave } =
    useDisplayToggle();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      pb={{ base: "0rem", lg: "1rem" }}
    >
      <FigureBox
        display="flex"
        initial="hidden"
        animate="visible"
        variants={background}
        w={{ base: "12rem", lg: "15rem" }}
        h={{ base: "16rem", lg: "17.5rem" }}
        borderRadius={displayToggled ? "0 0 24px 24px" : "0 0 128px 128px"}
        justifyContent="center"
        alignItems="flex-end"
        overflow="hidden"
        position="relative"
        cursor={toToggle ? "default" : "pointer"}
        onMouseLeave={handleToggleOnLeave}
        onClick={handleToToggle}
        sx={{
          transition: "border-radius 0.3s ease-in-out",
          "&:hover": {
            borderRadius: displayToggled ? "0 0 128px 128px" : "0 0 24px 24px",
          },
          "&:hover > div": {
            borderRadius: displayToggled ? "128px" : "24px",
          },
        }}
      >
        <Box
          position="absolute"
          bottom="0"
          borderRadius={displayToggled ? "24px" : "128px"}
          transition="all 0.3s ease-in-out"
          w={{ base: "12rem", lg: "15rem" }}
          h={{ base: "12rem", lg: "15rem" }}
          bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
        ></Box>
        <ImgWrapper display="flex" variants={image}>
          <NextImage src={mainImage} alt="Header image" />
        </ImgWrapper>
      </FigureBox>
    </Flex>
  );
};

export default HeaderImg;
