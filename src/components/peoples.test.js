import { render } from '@testing-library/react';
import { React } from 'react';
import Peoples from './peoples';
import People from './people';

describe('Peoples', () => {
	const peoples = [];
	const context = {
		state: {
			peoples,
		},
	};

	test('renders the component as expected', () => {
		const component = render(Peoples(context)).getByRole('peoples');

		expect(component).toBeInTheDocument();
	});

	test('peoples are passed into people', () => {
		jest.spyOn(peoples, 'map').mockReturnValue(<div role="mock"/>);

		const component = render(Peoples(context)).getByRole('mock');

		expect(component).toBeInTheDocument();
		expect(peoples.map).toHaveBeenCalledWith(People);
	});
});
