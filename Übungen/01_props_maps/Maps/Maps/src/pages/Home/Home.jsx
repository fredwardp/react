import "./Home.css";
import "../../components/MovieData/MovieData";
import movies from "../../components/MovieData/MovieData";
import Movie from "../../components/Movie/Movie";

const Home = () => {
  return (
    <section>
      {movies.map((singleMovie, index) => (
        <Movie key={index} item={singleMovie} />
      ))}
    </section>
  );
};

export default Home;
