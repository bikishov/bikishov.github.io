import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
	"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
	console.log(movie);

	const poster =
		movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
	return (
		<div className="movie">
			<a target="_blank" href={`https://www.imdb.com/title/${movie.imdbID}/`}>
				<h2>{movie.Title}</h2>
				<div>
					<img width="200" src={poster} alt={movie.title} />
				</div>
				<p>({movie.Year})</p>
			</a>
		</div>
	);
};
export default Movie;
