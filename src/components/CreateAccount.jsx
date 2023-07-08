import { useState } from 'react';
import theme from '../constants/theme';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendCreateAccountInfo } from '../hooks/userAuthActions';

const CreateAccount = () => {
	// useState Hooks
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmedPassword] = useState('');

  let user = {
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  }

  const dispatch = useDispatch()

	console.log(username, email, password, confirmPassword);

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="w-full px-4">
				<Card
					style={{
						backgroundColor: theme.palette.primary.main,
						boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
						borderRadius: '0.375rem',
					}}
					className="shadow-lg mx-auto max-w-md">
					<CardContent>
						<div className="flex justify-center mb-6">
							<img
								src="/path/to/your/logo.png" // Replace with your logo image path
								alt="Logo"
								className="h-12"
							/>
						</div>
						<Typography variant="h5" align="center" className="mb-6">
							Create an Account
						</Typography>
						<form>
							<TextField onChange={(e) => setUsername(e.target.value)} id="name" label="Username" variant="outlined" fullWidth className="mb-4" />
							<TextField onChange={(e) => setEmail(e.target.value)} id="email" label="Email" variant="outlined" fullWidth className="mb-4" />
							<TextField onChange={(e) => setPassword(e.target.value)} id="password" label="Password" variant="outlined" fullWidth className="mb-4" />
							<TextField onChange={(e) => setConfirmedPassword(e.target.value)} id="confirm-password" label="Confirm Password" variant="outlined" fullWidth className="mb-4" />
							<Button onClick={() => sendCreateAccountInfo(dispatch, user)} variant="contained" color="primary" fullWidth size="large">
								Create Account
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default CreateAccount;
