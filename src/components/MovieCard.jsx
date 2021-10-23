import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
        <Link to={'/movies/'+movie.id}>
        <img
        src={imgUrl}
        alt={movie.title}
        className={styles.movieImage}
        width={230}
        height={350}
      />
      <div> {movie.title}</div>
        </Link>
     
    </li>
  );
}
