import PeopleManager from '../services/peopleManager';

const actions = {
	patchState: ({ data }) => data,

	addPeople: (context) => ({
		peoples: PeopleManager.addPeople(context),
	}),

	resetInput: ({ seed, state: { peoples }}) => ({
		...seed,
		peoples,
	}),
};

export default actions;
