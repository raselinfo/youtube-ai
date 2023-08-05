import Header from "@components/header/header";
import logo from "@public/assets/images/logo.png";
import InputField from "@components/inputField/inputField";
import ResultBox from "@components/resultBox/ResultBox";

const Home = () => {
  return (
    <>
      {/*Header component*/}
      <Header title="YouTube Summarizer AI" logo={logo} alt="Brand Logo" />
      {/*InputField component*/}
      <InputField />
      {/*  Generated result Box*/}
      <ResultBox />
    </>
  );
};

export default Home;
