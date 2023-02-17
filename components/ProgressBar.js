import { chakra, shouldForwardProp } from "@chakra-ui/react";
import {
  motion,
  isValidMotionProp,
  useScroll,
  useTransform,
} from "framer-motion";

const ProgressLayer = chakra(motion.figure, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress);
  // const padding = useTransform(
  //   scrollYProgress,
  //   [0, 0.1, 0.15],
  //   ["3rem", "3rem", "0rem"]
  // );
  // const scaleY = useTransform(scrollYProgress, [0, 0.1], ["1.5", "1"]);

  const shrinkProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <ProgressLayer
        style={{ scaleX: shrinkProgress }}
        gridColumn="1 / -1"
        gridRow="1 / span 1"
        zIndex="125"
        opacity="0.8"
        transformOrigin="100%"
        bg="whiteAlpha.500"
      ></ProgressLayer>
      <ProgressLayer
        style={{ scaleX: scrollYProgress }}
        gridColumn="1 / -1"
        gridRow="1 / span 1"
        zIndex="150"
        opacity="0.3"
        transformOrigin="0%"
        bgGradient={`linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`}
      ></ProgressLayer>
    </>
  );
};

export default ProgressBar;
