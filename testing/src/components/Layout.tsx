import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Scroll from "./Scroll";

interface props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <Scroll>
      <Header />
      <main>{children}</main>
      <Footer />
    </Scroll>
  );
};

export default Layout;
