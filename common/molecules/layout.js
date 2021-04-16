import theme from "../styles/theme";
import Navbar from "../organisms/navbar";
import SideNavbar from "../organisms/sideNavbar";

export const Layout = ({ children, ...props }) => {
  const config = props?.config?.fields || "top";

  const type = "SIDE-NAV"; // TOP-NAV
  return (
    <div className="layout-container">
      {config.navbarPlacement === "left" && (
        <SideNavbar pages={props.pages}></SideNavbar>
      )}
      {config.navbarPlacement === "top" && (
        <Navbar pages={props.pages}></Navbar>
      )}

      {children}

      <style jsx>{`
        .layout-container {
          margin-top: ${config.navbarPlacement === "left"
            ? theme.margin.xl
            : "0px"};
          margin-left: ${config.navbarPlacement === "left" ? "340px" : "0px"};
        }
      `}</style>
    </div>
  );
};

export default Layout;
