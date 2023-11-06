import "./css/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return <>
  <div className="search">
    <form className="search-form" action="" method="get">
        <input name="query" type="text" placeholder="search..." />
      <button className="search-button" type="submit" value="Search"><SearchIcon style={{ color: '#cac7ff', fontSize: 26 }}></SearchIcon> </button>
    </form>
  </div>
  </>
};
export default SearchBar;