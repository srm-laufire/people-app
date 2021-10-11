/* eslint-disable no-magic-numbers */
import { render, fireEvent } from '@testing-library/react';
import { rndString, rndBetween } from '@laufire/utils/random';

const conversions = {
	name: (value) => value,
	age: (value) => Number(value),
};

const mockStateValues = {
	name: rndString(),
	age: rndBetween(0, 9),
};

const mockEventValues = {
	name: rndString(),
	age: String(rndBetween(10, 19)),
};

const inputTypes = {
	name: 'text',
	age: 'number',
};

// eslint-disable-next-line max-lines-per-function
const testInput = ({ Component, type }) => {
	const context = {
		state: {
			[type]: mockStateValues[type],
		},
		actions: {
			patchState: jest.fn(),
		},
	};

	test('renders the component as expected', () => {
		const rendered = render(Component(context)).getByRole(type);

		expect(rendered).toBeInTheDocument();
		expect(rendered.type).toEqual(inputTypes[type]);
		expect(rendered.value).toEqual(String(context.state[type]));
	});

	test('triggers the action patchState', () => {
		const value = mockEventValues[type];
		const rendered = render(Component(context)).getByRole(type);

		fireEvent.change(rendered, { target: { value }});

		expect(context.actions.patchState)
			.toHaveBeenCalledWith({ [type]: conversions[type](value) });
	});
};

export default testInput;
