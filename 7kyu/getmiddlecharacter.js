const getMiddle = (s) => {
	const isEven = s.length % 2 === 0;
	const middleIndex = Math.floor(s.length / 2);
	const endIndex = middleIndex + 1;
	return isEven
		? s.slice(middleIndex - 1, endIndex)
		: s.slice(middleIndex, endIndex);
};
