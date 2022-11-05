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
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Flex
      as="footer"
      gridColumn="1 / -1"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH="10rem"
      rowGap={24}
      p={12}
      bg="gray.700"
      // bgGradient="linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
    >
      <Flex
        w="40rem"
        minH="15rem"
        flexDir="column"
        bg="#fff"
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        p={6}
      >
        <Button textTransform="uppercase">contact me</Button>
      </Flex>
      <Stack dir="column" spacing={3} align="center">
        <Link
          href="https://github.com/john-zhuangzhuang-li/coffee-machines"
          isExternal
        >
          <IconButton
            aria-label="View github repo"
            colorScheme="gray"
            variant="ghost"
            size="lg"
            icon={<Icon as={RiGithubFill} w={8} h={8} color="#fff" />}
          />
        </Link>
        <Heading as="h6" size="sm" color="#fff">
          Built by John Li, Seeker of jobs 🕵️‍♂️
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Footer;
