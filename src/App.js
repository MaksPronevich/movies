import React from 'react';

import { TopLine } from './layout/TopLine';
import { Main } from './layout/Main';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			loading: true,
		};

		this.searchMovies = this.searchMovies.bind(this);
	}

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=star`)
			.then(response => response.json())
			.then(result => this.setState({ data: result.Search, loading: false }));
	}

	searchMovies(query, category) {
		this.setState({ loading: true });
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${category !== 'all' ? `&type=${category}` : ''}`)
			.then(response => response.json())
			.then(result => this.setState({ data: result.Search, loading: false }));
	}

	render() {
		const { data, loading } = this.state;

		return (
			<>
				<TopLine />
				<Main movies={data} searchMovies={this.searchMovies} loading={loading} />
			</>
		);
	}
}

export default App;
