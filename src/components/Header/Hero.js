import "./css/Header.css";
import AppTitle from './AppTitle';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <>
      <section className="hero">
      <AppTitle></AppTitle>
      <SearchBar></SearchBar>
      </section>
    </>
  );
};
export default Hero;
