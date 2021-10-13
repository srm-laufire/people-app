import { React } from 'react';

const Person = ({ id, name, age, gender, maritalStatus }) =>
	<div key={ id } role="person" className="person">
		<span role="name">{ name }</span>
		<span role="age">{ age }</span>
		<span role="gender">{ gender }</span>
		<span role="maritalStatus">{ maritalStatus }</span>
	</div>;

export default Person;
