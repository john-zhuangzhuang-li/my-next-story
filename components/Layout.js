import { chakra, useDisclosure } from "@chakra-ui/react";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Container = chakra("div", {
  baseStyle: {
    minH: "100vh",
    display: "grid",
    rowGap: 6,
    columnGap: 6,
    gridTemplateColumns:
      "minmax(0, 1fr) [center-start] minmax(min-content, 75rem) [center-end] minmax(0, 1fr)",
    gridAutoFlow: "column",
  },
});

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;