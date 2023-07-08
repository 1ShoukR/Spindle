import React from 'react';
import theme from '../constants/theme';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const CreateAccount = () => {
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
							<TextField id="name" label="Name" variant="outlined" fullWidth className="mb-4" />
							<TextField id="email" label="Email" variant="outlined" fullWidth className="mb-4" />
							<TextField id="password" label="Password" variant="outlined" fullWidth className="mb-4" />
							<TextField id="confirm-password" label="Confirm Password" variant="outlined" fullWidth className="mb-4" />
							<Button variant="contained" color="primary" fullWidth size="large">
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
