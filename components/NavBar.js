import { Grid, Flex, Icon, Text } from "@chakra-ui/react";
import { BiGlassesAlt } from "react-icons/bi";

const NavBar = () => {
  return (
    <Grid
      as="nav"
      gridColumn="center"
      templateColumns="[left-start] minmax(0, 1fr) [left-end logo-start] minmax(min-content, 15rem) [logo-end right-start] minmax(0, 1fr) [right-end]"
      py={3}
      columnGap={3}
      zIndex={9}
    >
      <Flex gridColumn="left" justifyContent="flex-end" alignItems="center">
        <Text noOfLines={1}>This is left</Text>
      </Flex>
      <Flex gridColumn="logo" justifyContent="center" alignItems="center">
        <Icon as={BiGlassesAlt} w={5} h={5} color="pink.300" />
      </Flex>
      <Flex gridColumn="right" justifyContent="flex-start" alignItems="center">
        <Text noOfLines={1}>This is right</Text>
      </Flex>
    </Grid>
  );
};

export default NavBar;
