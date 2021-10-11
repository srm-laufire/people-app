import { rndString } from '@laufire/utils/random';
import testInput from '../test/helpers';
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
	const component = {
		Component: Name,
		type: 'name',
		context: context,
	};

	testInput(component);
});
