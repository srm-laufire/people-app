import PeopleManager from '../services/peopleManager';
import actions from './actions';

describe('actions', () => {
	const { patchState, addPeople } = actions;

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
});
