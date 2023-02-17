import {
  Flex,
  Heading,
  Grid,
  Box,
  Button,
  IconButton,
  Icon,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaGlasses } from "react-icons/fa";

import ProgressBar from "./ProgressBar";

// Logo color: #805ad5

const NavBar = ({ onScrollTo, onContactModalOpen }) => {
  return (
    <Grid
      as="nav"
      pos="sticky"
      top={-6}
      gridColumn="1 / -1"
      backdropFilter="auto"
      backdropBlur="10px"
      templateColumns="minmax(0, 1fr) [center-start] minmax(min-content, 75em) [center-end] minmax(0, 1fr)"
      zIndex="100"
      pt={6}
      columnGap={6}
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
        <Button
          variant="ghost"
          data-scroll-id="about"
          onClick={onScrollTo}
          display={{ base: "none", md: "flex" }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          data-scroll-id="skills"
          onClick={onScrollTo}
          display={{ base: "none", md: "flex" }}
        >
          Skills
        </Button>
        <Button
          variant="ghost"
          data-scroll-id="port"
          onClick={onScrollTo}
          display={{ base: "none", md: "flex" }}
        >
          Projects
        </Button>
        <Button
          variant="ghost"
          data-scroll-id="cert"
          onClick={onScrollTo}
          display={{ base: "none", md: "flex" }}
        >
          Courses
        </Button>
        <Button
          // variant="ghost"
          colorScheme="purple"
          onClick={onContactModalOpen}
          display={{ base: "none", md: "flex" }}
        >
          Contact
        </Button>
        <Box display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton as={IconButton} aria-label="menu" icon={<FiMenu />} />
            <MenuList>
              <MenuItem data-scroll-id="about" onClick={onScrollTo}>
                About
              </MenuItem>
              <MenuItem data-scroll-id="skills" onClick={onScrollTo}>
                Skills
              </MenuItem>
              <MenuItem data-scroll-id="port" onClick={onScrollTo}>
                Projects
              </MenuItem>
              <MenuItem data-scroll-id="cert" onClick={onScrollTo}>
                Courses
              </MenuItem>
              <MenuItem onClick={onContactModalOpen}>Contact</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Grid>
  );
};

export default NavBar;
