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
		const peoples = [Symbol('peoples')];
		const people = Symbol('people');

		const context = {
			state: {
				peoples,
			},
		};

		const expected = [
			...peoples,
			people,
		];

		jest.spyOn(PeopleManager, 'getPeople').mockReturnValue(people);

		const result = addPeople(context);

		expect(result).toEqual(expected);
	});
});
