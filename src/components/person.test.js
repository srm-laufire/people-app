import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import Person from './person';
import { map } from '@laufire/utils/collection';

describe('Person', () => {
	const state = {
		id: rndString(),
		name: rndString(),
		age: rndString(),
		gender: rndString(),
		maritalStatus: rndString(),
	};
	const context = {
		state,
	};

	test('renders the component as expected', () => {
		const { getByRole } = render(Person(context.state));

		const component = getByRole('person');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('person');
	});

	test('renders the children with appropraite text content', () => {
		const { getByRole } = render(Person(context.state));

		const { name, age, gender, maritalStatus } = state;

		map({ name, age, gender, maritalStatus }, (value, key) => {
			expect(getByRole(key)).toHaveTextContent(value);
		});
	});
});
