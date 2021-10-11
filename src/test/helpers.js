import { render, fireEvent } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';

const testInput = ({ Component, type, context }) => {
	const { state } = context;

	test('renders the component as expected', () => {
		const result = render(Component(context)).getByRole(type);

		expect(result).toBeInTheDocument();
		expect(result.value).toEqual(state[type]);
	});

	test('triggers the action patchState', () => {
		const value = rndString();
		const result = render(Component(context)).getByRole(type);

		fireEvent.change(result, { target: { value }});

		expect(context.actions.patchState)
			.toHaveBeenCalledWith({ name: value });
	});
};

export default testInput;
