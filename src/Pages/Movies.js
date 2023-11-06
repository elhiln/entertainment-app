import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../components/Card/MediaCard";
import "../components/Homepage/Trending.css";
import { Container } from "@mui/material";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres";
import useGenre from "../hooks/useGenre";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=51b95b8126fd6eae45211822bde4a855&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchMovies();
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, [genreforURL, page]);

  return (
    <>
      <Container>
        <div className="popularMovies">
          <h2 className="page-heading">Movies</h2>
          <Genres
            type="movie"
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
                  type={content.media_type}
                  poster={content.poster_path}
                  title={content.title}
                  overview={content.overview}
                  released={content.release_date}
                  rating={content.vote_average}
                />
              ))}
          </div>
        </div>
        <CustomPagination setPage={setPage} />
      </Container>
    </>
  );
};
export default Movies;
