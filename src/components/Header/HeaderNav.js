import "./css/Header.css";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const HeaderNav = () => {
  return (
    <nav className="navbar">
      <LiveTvIcon style={{ fontSize: 50, color: '#cac7ff', padding: 5 }}></LiveTvIcon>
        <div className="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tv-series">TV Shows</a></li>
                {/* <li><a href="/watch-list">Watch List</a></li> */}
            </ul>
        </div>
    </nav>
  );
};

export default HeaderNav;
