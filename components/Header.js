import {
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  Button,
  Stack,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import HeaderImg from "./HeaderImg";

const EmojiWrapper = chakra(motion.span, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = ({ onScrollTo, onContactModalOpen }) => {
  return (
    <Flex
      gridColumn="center"
      minH="35rem"
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignItems="center"
      gap={24}
      flexDir={{ base: "column-reverse", lg: "row" }}
      mt={{ base: 0, "2xl": 8 }}
    >
      {/* CONTENT BOX */}
      <Flex
        flex="1"
        maxW={{ base: "100%", lg: "50%" }}
        flexDir="column"
        justifyContent={{ base: "flex-start", lg: "center" }}
        rowGap={6}
        // bg="pink.300"
      >
        <Heading size="lg">
          {`Hi! I'm John Li `}
          <EmojiWrapper
            display="inline-block"
            animate={{ rotate: [-5, 15, -5, 15, -5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            transformOrigin="bottom right"
          >
            {`👋`}
          </EmojiWrapper>
        </Heading>
        <Heading size={{ base: "xl", sm: "2xl" }}>Front-End Developer</Heading>
        <Text fontSize={{ base: "md", sm: "xl" }}>
          {`My passion is crafting visually appealing and easy-to-use web
          interfaces. Let's work together to create something special!`}
        </Text>
        {/* ACTIONS */}
        <Stack direction="row" spacing={3} align="center">
          <Button
            colorScheme="purple"
            variant="solid"
            textTransform="uppercase"
            data-scroll-id="about"
            onClick={onScrollTo}
          >
            learn more
          </Button>
          <Button
            colorScheme="purple"
            variant="ghost"
            textTransform="uppercase"
            onClick={onContactModalOpen}
          >
            contact me
          </Button>
        </Stack>
      </Flex>
      <HeaderImg />
    </Flex>
  );
};

export default Header;
