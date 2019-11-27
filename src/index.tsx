import {App} from 'App';
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(<App compiler="TypeScript" framework="React" />);
