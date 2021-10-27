import React from 'react';
import './App.css';
import Stories, { WithSeeMore } from 'react-insta-stories'
const stories = [
	{
	  duration: 193200,
	  content: ({ action, isPaused }) => {
			  return (
				  <div style={{ background: '#1F2532', height: '100%', width: '100%' }}>
					  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k_dnKnbi3H0?controls=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				  </div>
			  );
		},
	},
	{
		duration: 81600,
		content: ({ action, isPaused }) => {
				return (
					<div style={{ background: '#1F2532', height: '100%', width: '100%' }}>
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/R5mG1nwPHS8?controls=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				);
		},
	},
	{
		duration: 81600,
		content: ({ action, isPaused }) => {
				return (
					<div style={{ background: '#1F2532', height: '100%', width: '100%' }}>
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UsAt4LgXWME?controls=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				);
		},
	}
  ];

function App() {
	return (
		<div className="App">
			<div className="stories">
				{/* <Stories
					loop
					keyboardNavigation
					defaultInterval={8000}
					stories={stories2}
					onStoryEnd={(s, st) => console.log('story ended', s, st)}
					onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
					onStoryStart={(s, st) => console.log('story started', s, st)}
					storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
				/> */}
				<Stories
					loop
					keyboardNavigation
					stories={stories}
					defaultInterval={1500}
					width={976}
					height={558}
					loop={true}
					subHeading={'Friends also looking for accommodation? Spread the word.'}
					shareIcon={'https://res.cloudinary.com/stanza-living/image/upload/v1633697034/Website/micro-site/share-button-removebg-preview.png'}
					onShareIconClick={() => alert('on onShareIconClick click')}
					leftArrow={'https://dev-venus-web.stanzaliving.com/assets/arrow_backward_ios_24px.png'}
					rightArrow={'https://dev-venus-web.stanzaliving.com/assets/arrow_forward_ios_24px.png'}
				></Stories>
			</div>
		</div>
	);
}

const Story2 = ({ action, isPaused }) => {
	return <div style={{ ...contentStyle, background: 'Aquamarine', color: '#333' }}>
		<h1>You get the control of the story.</h1>
		<p>Render your custom JSX by passing just a <code style={{ fontStyle: 'italic' }}>content</code> property inside your story object.</p>
		<p>You get a <code style={{ fontStyle: 'italic' }}>action</code> prop as an input to your content function, that can be used to play or pause the story.</p>
		<h1>{isPaused ? 'Paused' : 'Playing'}</h1>
		<h4>v2 is out 🎉</h4>
		<p>React Native version coming soon.</p>
	</div>
}

const stories2 = [
	{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>
				<h1>The new version is here.</h1>
				<p>This is the new story.</p>
				<p>Now render React components right into your stories.</p>
				<p>Possibilities are endless, like here - here's a code block!</p>
				<pre>
					<code style={code}>
						console.log('Hello, world!')
        			</code>
				</pre>
				<p>Or here, an image!</p>
				<br />
				<img style={image} src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
				<h3>Perfect. But there's more! →</h3>
			</div>
		}
	},
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: 'snow', padding: 20, height: '100%' }}>
				<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
				<h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}>A custom See More message →</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>,
		duration: 5000
	},
	{
		url: 'https://picsum.photos/1080/1920',
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	},
	{
		url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		type: 'video'
	},
	{
		content: Story2
	}
]

const image = {
	display: 'block',
	maxWidth: '100%',
	borderRadius: 4,
}

const code = {
	background: '#eee',
	padding: '5px 10px',
	borderRadius: '4px',
	color: '#333'
}

const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 20,
	color: 'white',
	height: '100%'
}

const customSeeMore = {
	textAlign: 'center',
	fontSize: 14,
	bottom: 20,
	position: 'relative'
}

export default App;
