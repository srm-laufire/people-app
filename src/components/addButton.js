import { React } from 'react';

const AddButton = (context) =>
	<button
		role="addButton"
		onClick={ () => context.actions.addPeople(context) }
	> +
	</button>;

export default AddButton;
