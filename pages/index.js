import theme from "../styles/theme";

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-inner">
          <div className="catchphrase">Hello world.</div>
        </div>
      </div>

      <style jsx>{`
        .catchphrase {
          margin-top: 180px;
          font-family: "Source Serif Pro, serif";
          font-size: ${theme.fontSize.catchphrase};
        }
      `}</style>
    </div>
  );
};

export default Home;
