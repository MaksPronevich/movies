import React from 'react';
import { MoviesItem } from './MoviesItem';

function MoviesList({ movies = [] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-6">
			{movies.length ? movies.map(movie => <MoviesItem key={movie.imdbID} {...movie} />) : <h4>Nothing found</h4>}
		</div>
	);
}

export { MoviesList };
