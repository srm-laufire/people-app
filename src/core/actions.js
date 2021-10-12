import PeopleManager from '../services/peopleManager';

const actions = {
	patchState: ({ data }) => data,

	addPeople: (context) => ({
		peoples: PeopleManager.addPeople(context),
	}),
};

export default actions;
