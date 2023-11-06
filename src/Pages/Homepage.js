import Hero from '../components/Header/Hero';
import { Container } from '@mui/material';
import TrendingMovies from '../components/Homepage/Trending';
import TrendingSeries from '../components/Homepage/TrendingSeries';
import TopRatedMovies from '../components/Homepage/TopRatedMovies';
import DiscoverTv from '../components/Homepage/DiscoverTv';
import UpcomingMovies from '../components/Homepage/UpcomingMovies'

const Homepage = () => {
    return <><Hero></Hero>
    <Container>
     <UpcomingMovies />
      <TrendingMovies />
      <TrendingSeries />
      <TopRatedMovies />
      <DiscoverTv />
    </Container>

</>
  };
  export default Homepage;