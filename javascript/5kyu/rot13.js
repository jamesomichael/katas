const rawAlphabet = 'abcdefghijklmnopqrstuvwxyz';

const rot13 = (message) => {
	const ciphertextArray = message.split('').map((char) => {
		let alphabet = rawAlphabet;
		let idx = alphabet.indexOf(char);
		if (idx === -1) {
			alphabet = rawAlphabet.toUpperCase();
			idx = alphabet.indexOf(char);
		}
		if (idx === -1) {
			return char;
		}
		const shiftedAlphabet =
			alphabet.slice(idx + 1) + alphabet.slice(0, idx);
		return shiftedAlphabet[12];
	});
	return ciphertextArray.join('');
};
