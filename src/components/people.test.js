import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import People from './people';
import { map } from '@laufire/utils/collection';

describe('People', () => {
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
		const { getByRole } = render(People(context.state));

		const component = getByRole('people');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('people-style');
	});

	test('renders the children with appropraite text content', () => {
		const { getByRole } = render(People(context.state));

		const { name, age, gender, maritalStatus } = state;

		map({ name, age, gender, maritalStatus }, (value, key) => {
			expect(getByRole(key)).toHaveTextContent(value);
		});
	});
});
