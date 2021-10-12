import { React } from 'react';

const MaritalStatus = (context) => {
	const { config: { maritalStatusOptions },
		actions, state: { maritalStatus }} = context;

	return (
		<select
			role="maritalStatus"
			value={ maritalStatus }
			onChange={ (evt) =>
				actions.patchState({ maritalStatus: evt.target.value }) }
		>
			{ maritalStatusOptions.map((maritalStatusOption) =>
				<option
					key={ maritalStatusOption }
					role={ maritalStatusOption }
					value={ maritalStatusOption }
				>{ maritalStatusOption }
				</option>)}
		</select>);
};

export default MaritalStatus;
