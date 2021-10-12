import UserManager from './userManager';
import * as random from '@laufire/utils/random';

describe('UserManager', () => {
	const { getUser, addUser } = UserManager;

	test('getUser', () => {
		const id = Symbol('id');
		const state = {
			name: Symbol('name'),
			age: Symbol('age'),
			gender: Symbol('gender'),
			maritalStatus: Symbol('maritalStatus'),
		};
		const context = {
			state,
		};

		const expected = {
			...state,
			id,
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = getUser(context);

		expect(result).toEqual(expected);
	});

	test('addUser', () => {
		const users = [Symbol('users')];
		const user = Symbol('user');

		const context = {
			state: {
				users,
			},
		};

		const expected = [
			...users,
			user,
		];

		jest.spyOn(UserManager, 'getUser').mockReturnValue(user);

		const result = addUser(context);

		expect(result).toEqual(expected);
	});
});
