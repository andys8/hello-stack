// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Apps
import ReactApp from './react/App';
import Elm from './elm/App';
import './reasonml/init';
import './purescript/Init.purs';
import './vue/App';
import './angular/init.ts';


// React init
ReactDOM.render(<ReactApp />, document.getElementById('app__react'));

// Elm init
Elm.App.embed(document.getElementById('app__elm'));

