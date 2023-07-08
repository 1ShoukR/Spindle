const passwordValidation = (user) => {
	const { password, confirmPassword } = user;

	if (password !== confirmPassword) {
		return 'Passwords do not match';
	}

	if (password.length < 8) {
		return 'Password must be at least 8 characters long';
	}

	if (!/[A-Z]/.test(password)) {
		return 'Password must contain at least one uppercase letter';
	}

	if (!/[a-z]/.test(password)) {
		return 'Password must contain at least one lowercase letter';
	}

	if (!/[0-9]/.test(password)) {
		return 'Password must contain at least one digit';
	}

	return true; // Password is valid
};

export const sendCreateAccountInfo = async (disaptch, user) => {
	console.log(user);
	const validate = passwordValidation(user);
	if (validate === true) {
		console.log('password is valid');
		try {
			const response = await fetch(`http://localhost:5000/api/auth/create-account`, {
				method: 'POST',
				mode: 'cors', // no-cors, *cors, same-origin
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin', // include, *same-origin, omit
				headers: {
					'Content-Type': 'application/json',
					redirect: 'follow', // manual, *follow, error
					referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
				},
				body: JSON.stringify(user), // body data type must match "Content-Type" header
			});
			const data = await response.json();
			console.log('data', data);
		} catch (error) {
			console.log('error', error);
		}
	} else {
		console.log(validate);
	}
};
