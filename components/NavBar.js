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
  Stack,
  Icon,
  Circle,
  Link,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { BiGlassesAlt } from "react-icons/bi";

import ProgressBar from "./ProgressBar";

const NavBar = () => {
  return (
    <Grid
      as="nav"
      pos="sticky"
      top="0"
      gridColumn="1 / -1"
      bg="whiteAlpha.500"
      backdropFilter="auto"
      backdropBlur="10px"
      templateColumns="[left-start] minmax(0, 1fr) [left-end logo-start] min-content [logo-end right-start] minmax(0, 1fr) [right-end]"
      columnGap={6}
      zIndex="100"
    >
      <ProgressBar />
      <Flex
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
        <Icon as={BiGlassesAlt} w={5} h={5} color="pink.300" />
      </Flex>
      <Flex
        gridColumn="right"
        gridRow="1 / span 1"
        justifyContent="flex-start"
        alignItems="center"
        zIndex="200"
      >
        <Text noOfLines={1}>This is right</Text>
      </Flex>
    </Grid>
  );
};

export default NavBar;
