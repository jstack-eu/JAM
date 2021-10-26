import React, { useState, useEffect } from "react";
import theme from "../../../styles/theme";
import NavigationBlock from "../organisms/navigation";
import Footer from "../organisms/footer";

export const Layout = ({ children, pages, locale, info, inversedHeader }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="layout-container">
      <NavigationBlock
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        inversed={inversedHeader}
        pages={pages}
        locale={locale}
      ></NavigationBlock>

      {!isMenuOpen && <div className="page-wrapper">{children}</div>}

      {!isMenuOpen && <Footer info={info}></Footer>}

      <style jsx>{`
        .layout-container {
        }
        .page-wrapper {
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
