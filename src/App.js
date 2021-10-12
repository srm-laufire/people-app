import { React } from 'react';
import './App.scss';
import Name from './components/name';
import Age from './components/age';
import Gender from './components/gender';

const App = (context) =>
	<div role="App" className="App">
		Name { Name(context) }
		Age { Age(context) }
		Gender { Gender(context) }
	</div>;

export default App;
