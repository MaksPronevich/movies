import { MoviesList } from '../components/MoviesList';
import { Search } from '../components/Search';
import { Preloader } from './Preloader';

function Main({ movies, searchMovies, loading }) {
	return (
		<div className="container mx-auto px-3 my-10">
			<Search searchMovies={searchMovies} />
			{loading ? <Preloader /> : <MoviesList movies={movies} />}
		</div>
	);
}

export { Main };
