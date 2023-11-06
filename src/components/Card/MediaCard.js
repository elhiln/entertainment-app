import { img_300, unavailable } from "../../Config/Config";
import "./MediaCard.css";
import { Badge } from '@mui/material';

const ContentCard = ({ type, id, poster, title, overview, released, rating }) => {
  return (
      <div className="media-card">
        <Badge badgeContent={rating} color={rating > 6.8 ? 'primary' : 'secondary'} />
        <img
          className="media-image"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={`${title}`} />
        <h3 className="media-title">{title}</h3>
        <p className="desc"> {overview} </p>
        <span className="release-date">{type}
          <span> Release: {released}</span>
        </span>
      </div>
  );
};
export default ContentCard;
