const hello = (name) =>
	name
		? `Hello, ${name.charAt(0).toUpperCase()}${name
				.slice(1)
				.toLowerCase()}!`
		: 'Hello, World!';
