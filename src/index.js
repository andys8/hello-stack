// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Apps
import App from './react/App';
import Elm from './elm/App';

// React init
ReactDOM.render(<App />, document.getElementById('app__react'));

// Elm init
Elm.App.embed(document.getElementById('app__elm'));