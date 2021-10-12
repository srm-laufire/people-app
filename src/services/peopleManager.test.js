import PeopleManager from './peopleManager';
import * as random from '@laufire/utils/random';

describe('PeopleManager', () => {
	const { getPeople, addPeople } = PeopleManager;

	test('getPeople', () => {
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

		const result = getPeople(context);

		expect(result).toEqual(expected);
	});

	test('addPeople', () => {
		const people = [Symbol('people')];
		const person = Symbol('person');

		const context = {
			state: {
				people,
			},
		};

		const expected = [
			...people,
			person,
		];

		jest.spyOn(PeopleManager, 'getPeople').mockReturnValue(person);

		const result = addPeople(context);

		expect(result).toEqual(expected);
	});
});
