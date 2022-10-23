import { Text, Image, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const SkillItem = chakra(motion.li, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const item = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.1 },
};

const SkillCard = ({ iconSrc: src, title }) => {
  return (
    <SkillItem
      variants={item}
      display="flex"
      w="10rem"
      h="10rem"
      flexDir="column"
      rowGap={3}
      justifyContent="center"
      alignItems="center"
      cursor="default"
      borderRadius="lg"
      bg="gray.700"
    >
      <Image src={src} w="5rem" h="5rem" />
      <Text>{title}</Text>
    </SkillItem>
  );
};

export default SkillCard;
