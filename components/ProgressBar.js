import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, useScroll, useSpring } from "framer-motion";

const ProgressBox = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <ProgressBox
      style={{ scaleX }}
      gridColumn="1 / -1"
      gridRow="1 / span 1"
      zIndex="150"
      opacity="0.3"
      transformOrigin="0%"
      bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
    ></ProgressBox>
  );
};

export default ProgressBar;
