import { React } from 'react';

const Name = ({ actions: { patchState }, state: { name }}) =>
	<input
		role="name"
		value={ name }
		onChange={ (evt) => patchState({ name: evt.target.value }) }
	/>;

export default Name;
