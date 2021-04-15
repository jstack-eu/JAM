import theme from "../styles/theme";
import Navbar from "../organisms/navbar";
import SideNavbar from "../organisms/sideNavbar";

export const Layout = ({ children, ...props }) => {
  const type = "SIDE-NAV"; // TOP-NAV
  return (
    <div className="container">
      {type === "SIDE-NAV" && <SideNavbar pages={props.pages}></SideNavbar>}
      {type === "TOP-NAV" && <Navbar pages={props.pages}></Navbar>}

      {children}

      <style jsx>{`
        .container {
          margin-left: 300px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
