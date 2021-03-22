import theme from '../theme';

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-inner">
          <div className="catchphrase">Hello world.</div>
        </div>
      </div>

      <style jsx global>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Roboto', sans-serif;
            min-height: 100%;
          }

          .container {
            height: 100%;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>

      <style jsx>{`
        .catchphrase {
          margin-top: 180px;
          font-family: 'Source Serif Pro, serif';
          font-size: ${theme.fontSize.catchphrase};
        }
      `}</style>
    </div>
  );
};

export default Home;
