import {
  Text,
  Button,
  Stack,
  Icon,
  Link,
  // Progress,
} from "@chakra-ui/react";

import { VscCircleFilled } from "react-icons/vsc";

const SOTag = ({ title, score, posts, badge }) => {
  // const value = Math.floor((score / posts) * 100) || 80;
  return (
    <Stack spacing={4}>
      <Stack direction="row" justify="space-between">
        <Stack direction="row" align="center">
          <Link
            href={`https://stackoverflow.com/search?q=user:20436957+[${title}]`}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              colorScheme="gray"
              variant="solid"
              size="sm"
              //   rightIcon={<Icon as={VscCircleFilled} />}
            >
              {title}
            </Button>
          </Link>
          {badge && <Icon as={VscCircleFilled} color="#d1a684" />}
        </Stack>
        <Stack direction="row" align="center">
          <Text color="purple.600" fontSize="lg">
            {score}
          </Text>
          <Text fontSize="xs">score</Text>
          <Text color="purple.600" fontSize="lg">
            {posts}
          </Text>
          <Text fontSize="xs">posts</Text>
        </Stack>
      </Stack>
      {/* <Progress value={value} colorScheme="purple" size="sm" /> */}
    </Stack>
  );
};

export default SOTag;
