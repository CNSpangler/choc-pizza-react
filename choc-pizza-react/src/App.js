import React from 'react';
import './App.css';
import Head from './Head.js';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import PostFooter from './PostFooter.js';

const welcomeObject = {
  date: String(new Date()),
  name: 'You Guys'
}

const authorInfo = {
  id: 'headshot',
  source: 'van-pic.png',
  alt: 'Ready-to-eat chocolate pizza',
  bio: `Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.`
}

const smallLogo = './small-logo.png';

function App() {
  return (
    <div>
      <Head />
      <Header />
      <Body welcome={welcomeObject} />
      <Footer author={authorInfo} />
      <PostFooter image={smallLogo} />
    </div>
  );
}

export default App;