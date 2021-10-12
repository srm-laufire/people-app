import { React } from 'react';
import './App.scss';
import Name from './components/name';
import Age from './components/age';
import Gender from './components/gender';
import MaritalStatus from './components/maritalStatus';
import AddButton from './components/addButton';
import People from './components/people';

const App = (context) =>
	<div role="App" className="App">
		Name { Name(context) }
		Age { Age(context) }
		Gender { Gender(context) }
		MaritalStatus { MaritalStatus(context) }
		{ AddButton(context) }
		{ People(context) }
	</div>;

export default App;
