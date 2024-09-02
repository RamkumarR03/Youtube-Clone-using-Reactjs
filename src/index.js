import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header.js';
import Sidebar from './Components/side.js';
import Content from './Components/content';
import './index.css';

function Main() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
    </div>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));