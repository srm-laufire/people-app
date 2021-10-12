import { React } from 'react';
import { render } from '@testing-library/react';
import { map } from '@laufire/utils/collection';
import context from './core/context';
import * as Name from './components/name';
import * as Age from './components/age';
import * as Gender from './components/gender';
import * as MaritalStatus from './components/maritalStatus';
import * as AddButton from './components/addButton';
import * as Peoples from './components/peoples';
import App from './App';

describe('App', () => {
	const childComponents = {
		name: Name,
		age: Age,
		gender: Gender,
		addButton: AddButton,
		maritalStatus: MaritalStatus,
		peoples: Peoples,
	};

	beforeEach(() => map(childComponents, (value, key) => {
		jest.spyOn(value, 'default')
			.mockImplementation(() => <div role={ key }/>);
	}));

	test('renders the component appropriately', () => {
		const { getByRole } = render(App(context));

		const component = getByRole('App');

		const textContents = ['Name', 'Age', 'Gender', 'MaritalStatus'];

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('App');
		textContents.forEach((text) =>
			expect(component).toHaveTextContent(text));
	});

	test('renders the child components appropriately', () => {
		const { getByRole } = render(App(context));

		map(childComponents, (value, key) => {
			expect(getByRole(key)).toBeInTheDocument();
			expect(value.default).toHaveBeenCalledWith(context);
		});
	});
});
