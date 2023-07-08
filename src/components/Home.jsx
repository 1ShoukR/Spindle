/* eslint-disable no-unused-vars */
import React from 'react'
import '../css/home.css'
import WritingComponent from './WritingComponent';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import theme from '../constants/theme';

const Home = () => {

	return (
		<div className="homepage-container">
			<div className="top-title-section-container">
				<Card
					style={{
						backgroundColor: theme.palette.primary.main,
						boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
						borderRadius: '0.375rem',
					}}
					className="p-4">
					<CardContent>
						<Typography variant="h2" style={{ color: theme.palette.text.secondary }} className="text-4xl">
							Welcome to Spindle
						</Typography>
						<Typography variant="h3" style={{ color: theme.palette.text.secondary }} className="text-2xl">
							A seamless platform for creating longform Threads posts.
						</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="px-5">
				<h3 className="underline">What is Threads?</h3>
				<p>
					Threads is a new way to write and read longform posts. a platform that allows you to create a post that is broken up into multiple sections, or . This allows you to create a post that is
					more easily digestible for your readers, and allows you to create a more organized post.
				</p>
			</div>
			<div>
				<WritingComponent />
			</div>
		</div>
	);
}

export default Home