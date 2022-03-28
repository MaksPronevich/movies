import React from 'react';

function MoviesItem(props) {
	const { Title: title, Year: year, Type: type, Poster: poster } = props;

	return (
		<div className="group relative ">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				{poster === 'N/V' ? (
					<img src={`https://via.placeholder.com/300x450?text=${title}`} alt={title} />
				) : (
					<img src={poster} alt={title} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
				)}
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<span aria-hidden="true" className="absolute inset-0" />
						{title}
					</h3>
					<p className="mt-1 text-sm text-gray-500">{year}</p>
				</div>
				<p className="text-sm font-medium text-gray-900">{type}</p>
			</div>
		</div>
	);
}

export { MoviesItem };
