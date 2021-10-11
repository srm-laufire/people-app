import actions from './actions';

describe('actions', () => {
	const { patchState } = actions;

	test('patchState', () => {
		const data = Symbol('data');

		const result = patchState({ data });

		expect(result).toEqual(data);
	});
});
