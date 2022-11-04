import {
  Flex,
  Heading,
  Text,
  Grid,
  chakra,
  shouldForwardProp,
  Box,
  Container,
  Button,
  IconButton,
  Stack,
  Icon,
  Circle,
  Link,
  Spacer,
} from "@chakra-ui/react";
import {
  motion,
  isValidMotionProp,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { BiGlassesAlt } from "react-icons/bi";
import { FaGlasses } from "react-icons/fa";

import ProgressBar from "./ProgressBar";

const NavBar = ({ onScrollTo }) => {
  // const handleReturnToTop = () =>
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });

  return (
    <Grid
      as="nav"
      pos="sticky"
      top={-6}
      gridColumn="1 / -1"
      bg="whiteAlpha.500"
      backdropFilter="auto"
      backdropBlur="10px"
      templateColumns="minmax(0, 1fr) [center-start] minmax(min-content, 75em) [center-end] minmax(0, 1fr)"
      // templateColumns="[left-start] minmax(0, 1fr) [left-end logo-start] min-content [logo-end right-start] minmax(0, 1fr) [right-end]"
      // columnGap={6}
      zIndex="100"
      pt={6}
      // transition="all 0.2s ease-in-out"
    >
      <ProgressBar />
      <Flex
        gridColumn="center"
        columnGap={3}
        gridRow="1 / span 1"
        zIndex="200"
        py={3}
      >
        <IconButton
          variant="ghost"
          aria-label="Logo"
          icon={<Icon as={FaGlasses} w={6} h={6} color="purple.500" />}
          display={{ base: "flex", sm: "none" }}
          data-scroll-id="top"
          onClick={onScrollTo}
        />
        <Button
          leftIcon={<Icon as={FaGlasses} w={6} h={6} color="purple.500" />}
          variant="ghost"
          display={{ base: "none", sm: "flex" }}
          data-scroll-id="top"
          onClick={onScrollTo}
        >
          <Heading size="md" noOfLines={1}>
            John Li
          </Heading>
        </Button>
        <Spacer />
        <Button variant="ghost" data-scroll-id="about" onClick={onScrollTo}>
          About
        </Button>
        <Button variant="ghost" data-scroll-id="skills" onClick={onScrollTo}>
          Skills
        </Button>
        <Button variant="ghost" data-scroll-id="port" onClick={onScrollTo}>
          Projects
        </Button>
        <Button variant="ghost" data-scroll-id="cert" onClick={onScrollTo}>
          Courses
        </Button>
      </Flex>

      {/* <Flex
        gridColumn="left"
        gridRow="1 / span 1"
        justifyContent="flex-end"
        alignItems="center"
        zIndex="200"
      >
        <Text noOfLines={1}>This is left</Text>
      </Flex>
      <Flex
        gridColumn="logo"
        gridRow="1 / span 1"
        justifyContent="center"
        alignItems="center"
        zIndex="200"
        py={3}
      >
        <Icon as={FaGlasses} w={6} h={6} color="purple.500" />
      </Flex>
      <Flex
        gridColumn="right"
        gridRow="1 / span 1"
        justifyContent="flex-start"
        alignItems="center"
        zIndex="200"
      >
        <Text noOfLines={1}>This is right</Text>
      </Flex> */}
    </Grid>
  );
};

export default NavBar;
