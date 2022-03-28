function TopLine() {
	return (
		<div className="bg-black py-3">
			<div className="container mx-auto flex justify-between items-center gap-x-3 px-3">
				<h2 className="text-white text-xl font-bold">Movies</h2>
				<button className="rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1">GitHub</button>
			</div>
		</div>
	);
}

export { TopLine };
