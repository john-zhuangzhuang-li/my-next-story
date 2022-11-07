import { Text, Image, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const SkillItem = chakra(motion.li, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const item = {
  visible: { opacity: 1, scale: 1, transition: { type: "spring", mass: 1.05 } },
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
      // borderRadius="lg"
      borderRadius="2xl"
      // bg="gray.700"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        inset: "10px -5px -12px",
        // bg: "pink.500",

        // LIKELY TO USE
        bgGradient: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,

        transform: "scale(0.55)",

        borderRadius: "9xl",
        filter: "blur(18px)",
        zIndex: "-1",
        opacity: "0",
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
      sx={{
        "&:hover::before": { opacity: "1", transform: "scale(1)" },
      }}
    >
      <Image
        src={src}
        w={{ base: "4rem", sm: "5rem" }}
        h={{ base: "4rem", sm: "5rem" }}
        alt="Skill icon"
      />
      <Text fontSize={{ base: "sm", sm: "md" }}>{title}</Text>
    </SkillItem>
  );
};

export default SkillCard;
