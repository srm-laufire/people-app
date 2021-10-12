import { render } from '@testing-library/react';
import { React } from 'react';
import People from './people';
import Person from './person';

describe('People', () => {
	const people = [];
	const context = {
		state: {
			people,
		},
	};

	test('renders the component as expected', () => {
		const component = render(People(context)).getByRole('people');

		expect(component).toBeInTheDocument();
	});

	test('people are passed into person', () => {
		jest.spyOn(people, 'map').mockReturnValue(<div role="mock"/>);

		const component = render(People(context)).getByRole('mock');

		expect(component).toBeInTheDocument();
		expect(people.map).toHaveBeenCalledWith(Person);
	});
});
