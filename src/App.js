import { React } from 'react';
import './App.scss';
import Name from './components/name';

const App = (context) =>
	<div role="App" className="App">Name { Name(context) }</div>;

export default App;
