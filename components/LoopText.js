import { chakra, shouldForwardProp } from "@chakra-ui/react";

import { motion, isValidMotionProp } from "framer-motion";

import { loopTextData } from "../store/dummy";

const TextBox = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LoopText = ({ dur, dir, variant, textColor }) => {
  const destination = dir === "right" ? -100 : 100;

  return (
    <>
      {["initial", "loop-1", "loop-2"].map((item, index, arr) => {
        return (
          <TextBox
            key={item}
            initial={{ x: item === "initial" ? 0 : `${destination}%` }}
            animate={{
              x:
                item === "initial"
                  ? `${destination * -2}%`
                  : `${destination * -1}%`,
            }}
            // initial={{ x: "100vw" }}
            // animate={{ x: "calc(-100% + calc(100vw - 100%))" }}
            transition={{
              repeat: item === "initial" ? 0 : Infinity,
              duration: dur,
              delay: index === arr.length - 1 ? dur / 2 : 0,
              type: "tween",
              ease: "linear",
            }}
            gridArea="1/1/1/1"
            color={textColor}
            fontSize="6xl"
            textTransform="uppercase"
            whiteSpace="nowrap"
            fontWeight="bold"
            textStyle="code"
            pointerEvents="none"
          >
            {loopTextData[variant]}
          </TextBox>
        );
      })}
      {/* <TextBox
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          type: "tween",
          ease: "linear",
        }}
        gridArea="1/1/1/1"
        border="2px"
        borderColor="teal.500"
        color="teal.500"
        fontSize="6xl"
        textTransform="uppercase"
        whiteSpace="nowrap"
        fontWeight="bold"
        textStyle="code"
      >
        {`html{box-sizing:border-box;scroll-behavior:smooth;font-size:62.5%}body{font-family:var(--font-primary);}`}
      </TextBox>
      <TextBox
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          delay: 10,
          type: "tween",
          ease: "linear",
        }}
        gridArea="1/1/1/1"
        border="2px"
        borderColor="purple.500"
        color="purple.500"
        fontSize="6xl"
        textTransform="uppercase"
        whiteSpace="nowrap"
        fontWeight="bold"
        textStyle="code"
      >
        {`html{box-sizing:border-box;scroll-behavior:smooth;font-size:62.5%}body{font-family:var(--font-primary);}`}
      </TextBox> */}
    </>
  );
};

export default LoopText;
