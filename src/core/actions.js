import UserManager from '../services/userManager';

const actions = {
	patchState: ({ data }) => data,

	addUser: (context) => ({
		users: UserManager.addUser(context),
	}),
};

export default actions;
