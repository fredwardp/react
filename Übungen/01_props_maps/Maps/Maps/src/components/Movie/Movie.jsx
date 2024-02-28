import "./Movie.css";
import "../MovieData/MovieData.jsx";
import Stars from "../Stars/Stars.jsx";

const Movie = (props) => {
  let starRating = Number(props.item.rate);
  return (
    <article>
      <h2>{props.item.title}</h2>
      <p>{props.item.year}</p>
      <p>{props.item.director}</p>
      <p>{props.item.duration}</p>
      {props.item.genre.map((genre, index) => (
        <p key={index}>{genre}</p>
      ))}
      <Stars rating={starRating} />
    </article>
  );
};

export default Movie;
