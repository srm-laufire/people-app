import UserManager from '../services/userManager';
import actions from './actions';

describe('actions', () => {
	const { patchState, addUser } = actions;

	test('patchState', () => {
		const data = Symbol('data');

		const result = patchState({ data });

		expect(result).toEqual(data);
	});

	test('addUser', () => {
		const context = Symbol('context');
		const users = Symbol('users');

		jest.spyOn(UserManager, 'addUser').mockReturnValue(users);

		const result = addUser(context);

		expect(result).toEqual({ users });
	});
});
