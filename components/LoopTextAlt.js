import { chakra, shouldForwardProp } from "@chakra-ui/react";

import {
  motion,
  isValidMotionProp,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { loopTextData } from "../store/dummy";

const TextBox = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LoopTextAlt = ({ dir, variant, textColor }) => {
  const { scrollYProgress } = useScroll();
  // const x = useSpring(scrollYProgress);

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const destination = dir === "right" ? ["-30%", "70%"] : ["0%", "-100%"];

  const x = useTransform(springProgress, [0, 1], destination);

  return (
    <TextBox
      style={{ x }}
      //   position="absolute"
      //   inset={dir === "right" ? "0 0 0 auto" : "0 auto 0 0"}
      //   top="0"
      //   bottom="0"
      //   right={dir === "right" ? "0" : "auto"}
      color={textColor}
      fontSize="6xl"
      textTransform="uppercase"
      whiteSpace="nowrap"
      fontWeight="bold"
      textStyle="code"
      pointerEvents="none"
      position="relative"
      userSelect="none"
      _after={{
        content: '""',
        position: "absolute",
        inset: "0",
        bgGradient: `linear-gradient(to ${variant}, transparent 35%, #fff 100%)`,
      }}
    >
      {loopTextData[variant]}
    </TextBox>
  );
};

export default LoopTextAlt;
