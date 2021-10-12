import PeopleManager from '../services/peopleManager';

const actions = {
	patchState: ({ data }) => data,

	addPeople: (context) => ({
		people: PeopleManager.addPeople(context),
	}),

	resetInput: ({ seed, state: { people }}) => ({
		...seed,
		people,
	}),
};

export default actions;
