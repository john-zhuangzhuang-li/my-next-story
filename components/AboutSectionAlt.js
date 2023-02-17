import {
  Flex,
  Heading,
  Text,
  // Box,
  // Button,
  Stack,
  // Icon,
  // Link,
} from "@chakra-ui/react";

// import { MdFileDownload } from "react-icons/md";

import LoopTextAlt from "./LoopTextAlt";
import SOCardAlt from "./SOCardAlt";

const AboutSectionAlt = ({ updatedUser, updatedTags, updated }) => {
  return (
    <Flex
      gridColumn="1 / -1"
      bgGradient={`linear-gradient(to bottom, rgba(224, 195, 252, 0.3) 0%, rgba(142, 197, 252, 0.3) 100%)`}
      justifyContent="center"
      alignItems="center"
      direction="column"
      pos="relative"
      gap={{ base: 6, sm: 6 }}
    >
      <Flex
        alignSelf="stretch"
        bg="#fff"
        overflow="hidden"
        zIndex="25"
        sx={{ backfaceVisibility: "hidden" }}
      >
        <LoopTextAlt
          dir="left"
          variant="top"
          textColor="rgba(224, 195, 252, 0.3)"
        />
      </Flex>
      <Flex
        maxW="65rem"
        flexDir="column"
        justifyContent="center"
        alignItems="flex-start"
        rowGap={{ base: 6, sm: 12 }}
        p={{ base: 6, sm: 12 }}
        borderRadius="xl"
        zIndex="50"
      >
        <Heading size={{ base: "xl", sm: "xl" }}>About me</Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          columnGap={16}
          rowGap={12}
        >
          <Stack spacing={6} flex="1">
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              My journey as a developer began over a decade ago with my first
              HTML page written in middle school using Notepad. While I have had
              the chance to explore other fields as a product consultant and
              sales manager, my passion for web development never wavered.
            </Text>
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              To stay current in the field, I took advantage of the opportunity
              during the pandemic to upgrade my skills through online courses,
              focused on expanding my knowledge of HTML, CSS, JavaScript, and
              the latest front-end frameworks.
            </Text>
            <Text fontSize={{ base: "md", sm: "xl" }} textStyle="content">
              In my opinion, the key to a successful business is ensuring
              positive customer experiences at every touchpoint, and the web
              interface is the perfect place to begin.
            </Text>
            {/* Resume download */}
            {/* <Box pt={{ base: 0, lg: 6 }}>
              <Link
                href="/Resume_JL.pdf"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  rightIcon={<Icon as={MdFileDownload} />}
                  colorScheme="purple"
                  variant="solid"
                  textTransform="uppercase"
                  alignSelf="flex-start"
                >
                  resume
                </Button>
              </Link>
            </Box> */}
          </Stack>
          <SOCardAlt {...{ updatedUser, updatedTags, updated }} />
        </Flex>
      </Flex>
      <Flex
        alignSelf="stretch"
        bg="#fff"
        overflow="hidden"
        zIndex="25"
        sx={{ backfaceVisibility: "hidden" }}
      >
        <LoopTextAlt
          dir="right"
          variant="bottom"
          textColor="rgba(142, 197, 252, 0.3)"
        />
      </Flex>
    </Flex>
  );
};

export default AboutSectionAlt;
