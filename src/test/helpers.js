/* eslint-disable no-magic-numbers */
import { render, fireEvent } from '@testing-library/react';
import { rndString, rndBetween, rndValue } from '@laufire/utils/random';
import config from '../core/config';

const { genderOptions, maritalStatusOptions } = config;

const conversions = {
	name: (value) => value,
	age: (value) => Number(value),
	gender: (value) => value,
	maritalStatus: (value) => value,
};

const mockStateValues = {
	name: rndString(),
	age: rndBetween(0, 9),
	gender: rndValue(genderOptions),
	maritalStatus: rndValue(maritalStatusOptions),
};

const mockEventValues = {
	name: rndString(),
	age: String(rndBetween(10, 19)),
	gender: rndValue(genderOptions),
	maritalStatus: rndValue(maritalStatusOptions),
};

const inputTypes = {
	name: 'text',
	age: 'number',
	gender: 'select-one',
	maritalStatus: 'select-one',
};

// eslint-disable-next-line max-lines-per-function
const testInput = ({ Component, type }) => {
	const context = {
		config: {
			genderOptions,
			maritalStatusOptions,
		},
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
