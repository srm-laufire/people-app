import { React } from 'react';

const People = ({ id, name, age, gender, maritalStatus }) =>
	<div key={ id } role="people" className="people-style">
		<span role="name">{ name }</span>
		<span role="age">{ age }</span>
		<span role="gender">{ gender }</span>
		<span role="maritalStatus">{ maritalStatus }</span>
	</div>;

export default People;
