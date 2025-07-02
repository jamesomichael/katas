const sumPositive = (numbers) =>
	numbers.reduce((acc, curr) => (curr > 0 ? (acc += curr) : acc), 0);
