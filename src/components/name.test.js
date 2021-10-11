import { render, fireEvent } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import Name from './name';

describe('Name', () => {
	const name = rndString();
	const context = {
		state: {
			name,
		},
		actions: {
			patchState: jest.fn(),
		},
	};

	test('renders the component as expected', () => {
		const component = render(Name(context)).getByRole('name');

		expect(component).toBeInTheDocument();
		expect(component.value).toEqual(name);
	});

	test('triggers the action patchState', () => {
		const value = rndString();
		const component = render(Name(context)).getByRole('name');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.patchState)
			.toHaveBeenCalledWith({ name: value });
	});
});
