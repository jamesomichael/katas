const topThreeWords = (text) => {
	const wordMap = {};
	const cleanedText = text.replace(/[^A-Za-z'\-\s]/g, '');
	const words = cleanedText.match(/\S+/g);
	words?.forEach((word) => {
		const cleanedWord = word.toLowerCase().replace(/[^a-z'\-\s]/g, '');
		if (cleanedWord === "'") return;
		wordMap[cleanedWord] = wordMap[cleanedWord]
			? (wordMap[cleanedWord] += 1)
			: 1;
	});
	const sortedArray = Object.entries(wordMap).sort(([, a], [, b]) => b - a);
	const topWords = sortedArray.slice(0, 3).map(([word]) => word);
	return topWords;
};
