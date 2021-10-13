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
		const people = Symbol('people');

		jest.spyOn(PeopleManager, 'addPeople').mockReturnValue(people);

		const result = addPeople(context);

		expect(result).toEqual({ people });
	});

	test('resetInput', () => {
		const data = { seed: Symbol('seed') };
		const people = Symbol('people');

		const { seed } = data;
		const context = {
			seed: {
				seed,
			},
			state: {
				people,
			},
		};

		const expected = {
			...data,
			people,
		};

		const result = resetInput(context);

		expect(result).toEqual(expected);
	});
});
