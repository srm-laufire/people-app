import { render, fireEvent } from '@testing-library/react';
import AddButton from './addButton';

describe('AddButton', () => {
	const context = {
		actions: {
			addPeople: jest.fn(),
		},
	};

	test('renders the components as expected', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('+');
	});

	test('triggers the action addPeople', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addPeople).toHaveBeenCalledWith(context);
	});
});
