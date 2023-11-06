import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from '../Card/MediaCard';
import "./Trending.css";


const DiscoverTv = () => {
    const [content, setContent] = useState([]);
    let itemsToDisplay;

    if (window.innerWidth <= 768) {
        itemsToDisplay = 3; // Show fewer items on smaller screens
      } else{
        itemsToDisplay = 4;
      }

    const fetchDiscoverTv = async () => {
        try {
            const { data } = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=51b95b8126fd6eae45211822bde4a855');
            setContent(data.results.slice(0, itemsToDisplay));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDiscoverTv();
         // eslint-disable-next-line 
    }, [])

    return (
        <div className="popularMovies">
            <h2 className="page-heading">Discover Series</h2>
            <div className="Trending">
                {content && content.map((content) =>
                    <MediaCard
                        key={content.id}
                        id={content.id}
                        type="tv"
                        poster={content.poster_path}
                        title={content.name}
                        overview={content.overview}
                        released={content.first_air_date}
                        rating={content.vote_average}
                    />)}
            </div>
        </div>
    );
}

export default DiscoverTv;