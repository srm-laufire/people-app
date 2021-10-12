import PeopleManager from '../services/peopleManager';
import actions from './actions';

describe('actions', () => {
	const { patchState, addPeople, resetInput } = actions;

	test('patchState', () => {
		const data = Symbol('data');

		const result = patchState({ data });

		expect(result).toEqual(data);
	});

	test('addPeople', () => {
		const context = Symbol('context');
		const peoples = Symbol('peoples');

		jest.spyOn(PeopleManager, 'addPeople').mockReturnValue(peoples);

		const result = addPeople(context);

		expect(result).toEqual({ peoples });
	});

	test('resetInput', () => {
		const seed = Symbol('seed');
		const peoples = Symbol('peoples');

		const context = {
			seed: seed,
			state: {
				peoples,
			},
		};

		const expected = {
			...seed,
			peoples,
		};

		const result = resetInput(context);

		expect(result).toEqual(expected);
	});
});
