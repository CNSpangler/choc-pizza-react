import React from 'react';
import './App.css';
import Head from './Head.js';
import Header from './Header.js';
import Body from './Body.js';

const welcomeObject = {
  date: String(new Date()),
  name: 'You Guys'
}

function App() {
  return (
    <div>
      <Head />
      <Header />
      <Body welcomeObject = {welcomeObject} />
    </div>
  );
}

export default App;