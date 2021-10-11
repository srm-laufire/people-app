import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import App from './App';
import { React } from 'react';
import * as Name from './components/name';
import context from './core/context';

describe('App', () => {
	test('renders the component appropriately', () => {
		const name = rndString();

		jest.spyOn(Name, 'default')
			.mockImplementation(() => <div role={ name }/>);

		const { getByRole } = render(App(context));

		const component = getByRole('App');
		const nameComponent = getByRole(name);

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('App');
		expect(component).toHaveTextContent('Name');
		expect(nameComponent).toBeInTheDocument();
		expect(Name.default).toHaveBeenCalledWith(context);
	});
});
