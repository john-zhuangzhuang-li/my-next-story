import { Flex, Heading } from "@chakra-ui/react";

import ItemCupBottomless from "./portfolioCards/ItemCupBottomless";
import ItemTreat from "./portfolioCards/ItemTreat";
import ItemMyStory from "./portfolioCards/ItemMyStory";

const PortfolioSection = () => {
  return (
    <Flex
      as="main"
      gridColumn="center"
      alignItems="center"
      flexDir="column"
      rowGap={{ base: 12, sm: 24 }}
    >
      <Heading as="h3" size={{ base: "xl", sm: "xl" }}>
        Practice projects
      </Heading>
      <Flex
        as="ul"
        flexDir="column"
        rowGap={{ base: 24, sm: 44 }}
        listStyleType="none"
        sx={{
          "& > li": {
            flexDirection: { base: "column", lg: "row" },
          },
          "& > li:nth-of-type(even)": {
            flexDirection: { base: "column", lg: "row-reverse" },
          },
        }}
      >
        <ItemCupBottomless />
        <ItemTreat />
        <ItemMyStory />
      </Flex>
    </Flex>
  );
};

export default PortfolioSection;
