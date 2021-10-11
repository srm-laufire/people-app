import { React } from 'react';
import './App.scss';
import Name from './components/name';
import Age from './components/age';

const App = (context) =>
	<div role="App" className="App">
		Name { Name(context) }
		Age { Age(context) }
	</div>;

export default App;
