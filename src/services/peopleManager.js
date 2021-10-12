import { rndString } from '@laufire/utils/random';

const PeopleManager = {
	getPeople: ({ state: { name, age, gender, maritalStatus }}) => ({
		id: rndString(),
		name: name,
		age: age,
		gender: gender,
		maritalStatus: maritalStatus,
	}),

	addPeople: (context) =>
		[
			...context.state.people,
			PeopleManager.getPeople(context),
		],
};

export default PeopleManager;
