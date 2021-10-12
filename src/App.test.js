import { React } from 'react';
import { render } from '@testing-library/react';
import { rndString, rndValue } from '@laufire/utils/random';
import context from './core/context';
import * as Name from './components/name';
import * as Age from './components/age';
import * as Gender from './components/gender';
import App from './App';
import config from './core/config';

describe('App', () => {
	test('renders the component appropriately', () => {
		const name = rndString();
		const age = rndString();
		const gender = rndValue(config.genderOptions);

		jest.spyOn(Name, 'default')
			.mockImplementation(() => <div role={ name }/>);
		jest.spyOn(Age, 'default')
			.mockImplementation(() => <div role={ age }/>);
		jest.spyOn(Gender, 'default')
			.mockImplementation(() => <div role={ gender }/>);

		const { getByRole } = render(App(context));

		const component = getByRole('App');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('App');
		expect(component).toHaveTextContent('Name');
		expect(component).toHaveTextContent('Age');
		expect(component).toHaveTextContent('Gender');
		expect(getByRole(name)).toBeInTheDocument();
		expect(Name.default).toHaveBeenCalledWith(context);
		expect(getByRole(age)).toBeInTheDocument();
		expect(Age.default).toHaveBeenCalledWith(context);
		expect(getByRole(gender)).toBeInTheDocument();
		expect(Gender.default).toHaveBeenCalledWith(context);
	});
});
