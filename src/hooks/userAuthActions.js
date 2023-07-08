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
		} else {
            console.log(validate);
        }
};
