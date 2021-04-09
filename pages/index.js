import theme from '../styles/theme';

const Home = () => {
  console.log('1: ', process.env.CF_SPACE_ID);
  // console.log('2: ', CF_SPACE_ID);

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
          font-family: 'Source Serif Pro, serif';
          font-size: ${theme.fontSize.catchphrase};
        }
      `}</style>
    </div>
  );
};

export default Home;
