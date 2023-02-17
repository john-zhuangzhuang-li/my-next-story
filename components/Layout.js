import { chakra } from "@chakra-ui/react";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Container = chakra("div", {
  baseStyle: {
    minH: "100vh",
    display: "grid",
    rowGap: 6,
    columnGap: 6,
    gridTemplateColumns:
      "minmax(0, 1fr) [center-start] minmax(min-content, 75em) [center-end] minmax(0, 1fr)",
    gridAutoFlow: "column",
  },
});

const Layout = ({ onScrollTo, onContactModalOpen, children }) => {
  return (
    <Container>
      <NavBar onScrollTo={onScrollTo} onContactModalOpen={onContactModalOpen} />
      {children}
      <Footer onContactModalOpen={onContactModalOpen} />
    </Container>
  );
};

export default Layout;
