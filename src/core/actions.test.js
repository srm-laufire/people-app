import actions from './actions';

describe('actions', () => {
	const { patchState, addUser } = actions;

	test('patchState', () => {
		const data = Symbol('data');

		const result = patchState({ data });

		expect(result).toEqual(data);
	});

	test('addUser', () => {
		const expected = [];

		const result = addUser();

		expect(result).toEqual(expected);
	});
});
