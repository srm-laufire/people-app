import { React } from 'react';

const AddButton = (context) =>
	<button
		role="addButton"
		onClick={ () => context.actions.addUser(context) }
	> +
	</button>;

export default AddButton;
