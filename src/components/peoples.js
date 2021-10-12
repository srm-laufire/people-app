import { React } from 'react';
import People from './people';

const Peoples = ({ state: { peoples }}) =>
	<div role="peoples">{ peoples.map(People) }</div>;

export default Peoples;
