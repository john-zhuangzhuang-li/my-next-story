import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Stack,
  Icon,
  Link,
  Image,
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

import NextImage from "next/image";

import { RiExternalLinkLine } from "react-icons/ri";

import SOTag from "./SOTag";
import { dummyUser, dummyTags } from "../store/dummy";
import altImage from "../public/header-imgs/header-02-SQ.webp";
import { VscCircleFilled } from "react-icons/vsc";

const SOCardAlt = ({ updatedUser, updatedTags, updated }) => {
  const { badgeCounts, reputation } = updatedUser || dummyUser;
  const myTags = updatedTags || dummyTags;

  return (
    <Stack align="center" spacing={6} justifySelf={{ base: "auto", lg: "end" }}>
      <Flex alignItems="center" gap={2}>
        <Heading size={{ base: "sm", sm: "md" }}>
          Activities on Stack Overflow
        </Heading>
        <Image
          src="/skill-icons/stackoverflow.svg"
          alt="stackoverflow-logo"
          w={5}
          h={5}
        />
      </Flex>
      <Card maxW={{ base: "xs", sm: "sm" }}>
        <CardBody>
          <Stack spacing={9}>
            <Flex alignSelf="stretch">
              <Flex flex="1" gap="4" alignItems="center">
                <Box w={12} h={12} overflow="hidden" borderRadius="100%">
                  <NextImage src={altImage} alt="my-so-avatar" />
                </Box>
                <Stack>
                  <Heading
                    size="sm"
                    lineHeight="1"
                    onClick={() => console.log(updated)}
                  >
                    John Li
                  </Heading>
                  {updated && (
                    <Text
                      fontSize="xs"
                      lineHeight="1"
                      noOfLines={1}
                      display={{ base: "none", sm: "flex" }}
                    >{`Updated: ${updated}`}</Text>
                  )}
                </Stack>
              </Flex>
              <Stack direction="row" align="center" spacing="0.5">
                <Icon as={VscCircleFilled} color="#ffcc01" />
                <Text color="#ffcc01" fontSize="lg">
                  {badgeCounts["gold"] || 2}
                </Text>
                <Icon as={VscCircleFilled} color="#b4b8bc" />
                <Text color="#b4b8bc" fontSize="lg">
                  {badgeCounts["silver"] || 3}
                </Text>
                <Icon as={VscCircleFilled} color="#d1a684" />
                <Text color="#d1a684" fontSize="lg">
                  {badgeCounts["bronze"] || 27}
                </Text>
              </Stack>
            </Flex>
            <Stack direction="row" h={10}>
              <Stack spacing="0" justify="center" align="center" flex="1">
                <Text color="purple.600" fontSize="2xl">
                  {reputation || 6371}
                </Text>
                <Text fontSize="xs">Reputation</Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack spacing="0" justify="center" align="center" flex="1">
                <Text color="purple.600" fontSize="2xl">
                  286
                </Text>
                <Text fontSize="xs">Answers</Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack spacing="0" justify="center" align="center" flex="1">
                <Text color="purple.600" fontSize="2xl">
                  {`~16k`}
                </Text>
                <Text fontSize="xs">Reached</Text>
              </Stack>
            </Stack>
            <Text size="md">
              I actively participate in the Stack Overflow community to keep my
              skills sharp. Here are my top topic tags:
            </Text>
            <Stack spacing={4}>
              {myTags.map((item) => (
                <SOTag key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex justifyContent="flex-end" w="100%">
            <Link
              href="https://stackoverflow.com/users/20436957/john-li"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button
                rightIcon={<Icon as={RiExternalLinkLine} />}
                colorScheme="purple"
                variant="ghost"
                textTransform="uppercase"
              >
                view profile
              </Button>
            </Link>
          </Flex>
        </CardFooter>
      </Card>
    </Stack>
  );
};

export default SOCardAlt;
