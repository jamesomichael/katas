const toUnderscore = (string) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const converted = [...string.toString()]
		.map((char, idx) => {
			if (alphabet.includes(char) && idx !== 0) {
				return `_${char.toLowerCase()}`;
			}
			return char.toLowerCase();
		})
		.join('');
	return converted;
};
