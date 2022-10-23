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
      w={{ base: "8rem", sm: "10rem" }}
      h={{ base: "8rem", sm: "10rem" }}
      whileHover={{ y: "-8px" }}
      flexDir="column"
      rowGap={3}
      justifyContent="center"
      alignItems="center"
      cursor="default"
      borderRadius="lg"
      bg="gray.700"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        inset: "5px -5px -12px",
        // transform: "translateY(10px)",
        // bg: "pink.500",
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        borderRadius: "lg",
        filter: "blur(18px)",
        zIndex: "-1",
        opacity: "0",
        transition: "all 0.2s",
      }}
      _after={{
        content: '""',
        position: "absolute",
        inset: "0",
        zIndex: "-1",
        bg: "gray.700",
        borderRadius: "lg",
      }}
      sx={{
        "&:hover::before": { opacity: "1" },
      }}
    >
      <Image
        src={src}
        w={{ base: "4rem", sm: "5rem" }}
        h={{ base: "4rem", sm: "5rem" }}
      />
      <Text>{title}</Text>
    </SkillItem>
  );
};

export default SkillCard;
