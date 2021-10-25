import theme from "../styles/theme";
import Navbar from "../organisms/navbar";
import SideNavbar from "../organisms/sideNavbar";

export const Layout = ({ children, ...props }) => {
  const config = props?.config?.fields || "left";

  return (
    <div className="layout-container">
      <SideNavbar pages={props.pages}></SideNavbar>

      {children}

      <style jsx>{`
        .layout-container {
          margin-top: ${config === "left"
            ? theme.margin.xl
            : "0px"};
          margin-left: ${config === "left" ? "340px" : "0px"};
        }
      `}</style>
    </div>
  );
};

export default Layout;
