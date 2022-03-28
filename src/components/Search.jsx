import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			category: 'all',
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.buttonHandler = this.buttonHandler.bind(this);
	}

	handleSearch(event) {
		this.setState({ search: event.target.value });
	}

	handleFilter(event) {
		this.setState(
			() => ({ category: event.target.value }),
			() => {
				this.props.searchMovies(this.state.search, this.state.category);
			},
		);
	}

	handleKey(event) {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.category);
		}
	}

	buttonHandler() {
		this.props.searchMovies(this.state.search, this.state.category);
	}

	render() {
		const { search, category } = this.state;

		return (
			<div className="mb-8">
				<div className="flex gap-x-3">
					<input
						type="text"
						className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 max-w-sm w-full p-2"
						placeholder="Input movie"
						name="search"
						value={search}
						onChange={this.handleSearch}
						onKeyDown={this.handleKey}
					/>

					<button className="rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4" onClick={this.buttonHandler}>
						Search
					</button>
				</div>
				<div className="flex gap-x-3 mt-5">
					<div className="flex items-center">
						<input
							id="category-option-1"
							className="w-4 h-4 border-gray-300"
							type="radio"
							name="category"
							value="all"
							checked={category === 'all'}
							onChange={this.handleFilter}
						/>
						<label htmlFor="category-option-1" className="ml-2">
							All
						</label>
					</div>
					<div className="flex items-center">
						<input
							id="category-option-2"
							className="w-4 h-4 border-gray-300"
							type="radio"
							name="category"
							value="movie"
							checked={category === 'movie'}
							onChange={this.handleFilter}
						/>
						<label htmlFor="category-option-2" className="ml-2">
							Movies
						</label>
					</div>
					<div className="flex items-center">
						<input
							id="category-option-3"
							className="w-4 h-4 border-gray-300"
							type="radio"
							name="category"
							value="series"
							checked={category === 'series'}
							onChange={this.handleFilter}
						/>
						<label htmlFor="category-option-3" className="ml-2">
							Series
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export { Search };
