import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../components/Card/MediaCard";
import "../components/Homepage/Trending.css";
import { Container } from '@mui/material';
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres";
import useGenre from "../hooks/useGenre";

const Series = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=51b95b8126fd6eae45211822bde4a855&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line 
  }, [genreforURL, page]);

  return <>
    <Container>
      <div className="popularMovies">
        <h2 className="page-heading">TV Series</h2>
        <Genres
            type="tv"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
          />
        <div className="Trending">
          {content &&
            content.map((content) => (
              <MediaCard
                key={content.id}
                id={content.id}
                type="tv"
                poster={content.poster_path}
                title={content.name}
                overview={content.overview}
                released={content.first_air_date}
                rating={content.vote_average}
              />
            ))}
        </div>
      </div>
      <CustomPagination className="" setPage={setPage} />
    </Container>
  </>
};
export default Series;