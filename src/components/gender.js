import { React } from 'react';

const Gender = (context) => {
	const { config: { genderOptions }, actions, state: { gender }} = context;

	return (
		<select
			type="text"
			role="gender"
			value={ gender }
			onChange={ (evt) =>
				actions.patchState({ gender: evt.target.value }) }
		>
			{ genderOptions.map((genderOption) =>
				<option
					key={ genderOption }
					role={ genderOption }
					value={ genderOption }
				>{ genderOption }
				</option>)}
		</select>);
};

export default Gender;
