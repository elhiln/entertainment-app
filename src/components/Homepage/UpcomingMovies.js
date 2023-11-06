import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../Card/MediaCard";
import "./Trending.css";

const UpcomingMovies = () => {
  const [content, setContent] = useState([]);
  let itemsToDisplay;

  if (window.innerWidth <= 768) {
    itemsToDisplay = 3; // Show fewer items on smaller screens
  } else {
    itemsToDisplay = 4;
  }

  const fetchUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=51b95b8126fd6eae45211822bde4a855"
      );
      setContent(data.results.slice(0, itemsToDisplay));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="popularMovies">
      <h2 className="page-heading">Upcoming Movies</h2>
      <div className="Trending">
        {content &&
          content.map((content) => (
            <MediaCard
              id={content.id}
              type="Movie"
              poster={content.poster_path}
              title={content.title}
              overview={content.overview}
              released={content.release_date}
              rating={content.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
