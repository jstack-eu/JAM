import theme from "../styles/theme";
import Navbar from "../organisms/navbar";

export const Layout = ({ children, ...props }) => {
  return (
    <div className="container">
      <Navbar></Navbar>
      {children}

      <style jsx>{`
      `}</style>
    </div>
  );
};

export default Layout;
