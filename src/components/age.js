import { React } from 'react';

const Age = ({ actions: { patchState }, state: { age }}) =>
	<input
		type="number"
		role="age"
		value={ age }
		onChange={ (evt) => patchState({ age: Number(evt.target.value) }) }
	/>;

export default Age;
