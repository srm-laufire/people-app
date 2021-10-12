import { React } from 'react';

const AddButton = ({ actions }) =>
	<button
		role="addButton"
		onClick={ () => actions.addUser() }
	> +
	</button>;

export default AddButton;
