import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/client";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        get("/movie/" + movieID).then((data) => {
            setIsLoading(false)
            setMovie(data);
        });
    }, [movieID]);

    if (!movie) {
        return null;
    }

    if (isLoading) {
        return <div><Spinner></Spinner></div>
    }

    const imgUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;

    return (
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imgUrl}
                alt={movie.title}
            ></img>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
                <p>
                    <strong>Rate: </strong>
                    {movie.vote_average}
                </p>
            </div>
        </div>
    );
}
