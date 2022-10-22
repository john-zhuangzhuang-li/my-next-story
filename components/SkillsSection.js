import { Flex, Heading, Text } from "@chakra-ui/react";

const SkillsSection = () => {
  return (
    <Flex
      as="section"
      gridColumn="center"
      minH="30rem"
      flexDir="column"
      rowGap={3}
    >
      <Heading as="h3" size="md">
        SKILLS
      </Heading>
      <Flex
        as="ul"
        listStyleType="none"
        gap={3}
        justifyContent="center"
        flexWrap="wrap"
      >
        <Flex
          as="li"
          w="10rem"
          h="10rem"
          flexDir="column"
          rowGap={3}
          justifyContent="center"
          alignItems="center"
          cursor="default"
          borderRadius="lg"
          bg="gray.200"
        >
          <Flex bg="yellow.500" w="5rem" h="5rem"></Flex>
          <Text>Something</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SkillsSection;
