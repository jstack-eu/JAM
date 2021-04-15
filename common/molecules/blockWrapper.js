import theme from "../styles/theme";
import Navbar from "../organisms/navbar";

export const Layout = ({ children, ...props }) => {
  return (
    <div className="container">
      {children}

      <style jsx>{`
        .container {
          width: ${theme.layout.containerWidth};
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
