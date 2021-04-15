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
        @media screen and (max-width: ${theme.layout.containerWidth}) {
            .container {
              width: 100% !important;
            }
          }
      `}</style>
    </div>
  );
};

export default Layout;
