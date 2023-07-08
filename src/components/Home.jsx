import React from 'react'
import '../css/home.css'
import WritingComponent from './WritingComponent';

const Home = () => {
  return (
		<div className='homepage-container'>
			<div className='top-title-section-container'>
				<h1>Welcome to Spindle</h1>
				<h2>A seamless platform for creating longform Threads posts. </h2>
			</div>
			<div className="px-5">
                <h3 className="underline">What is Threads?</h3>
                <p>Threads is a new way to write and read longform posts.  a platform that allows you to create a post that is broken up into multiple sections, or . This allows you to create a post that is more easily digestible for your readers, and allows you to create a more organized post.</p>
			</div>
            <div>
                <WritingComponent />
            </div>
		</div>
	);
}

export default Home