import { rndString } from '@laufire/utils/random';

const UserManager = {
	getUser: ({ state: { name, age, gender, maritalStatus }}) => ({
		id: rndString(),
		name: name,
		age: age,
		gender: gender,
		maritalStatus: maritalStatus,
	}),

	addUser: (context) =>
		[
			...context.state.users,
			UserManager.getUser(context),
		],
};

export default UserManager;
