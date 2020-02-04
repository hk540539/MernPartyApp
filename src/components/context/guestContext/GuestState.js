import React, { useReducer } from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER } from '../types';

const GuestState = (props) => {
	const initialState = {
		filterGuest: false,
		guests: [
			{
				id: 1,
				name: 'Hemanth Kumar',
				phone: '123 456 789',
				dietary: 'Vegan',
				isConfirmed: false
			},
			{
				id: 2,
				name: 'A Kumar',
				phone: '123 456 789',
				dietary: 'Non-Veg',
				isConfirmed: true
			},
			{
				id: 3,
				name: 'B Kumar',
				phone: '123 456 789',
				dietary: 'Pascatarain',
				isConfirmed: false
			}
		]
	};
	const [ state, dispatch ] = useReducer(guestReducer, initialState);
	const toggleFilter = () => {
		dispatch({ type: TOGGLE_FILTER });
	};
	return (
		<GuestContext.Provider value={{ toggleFilter, guests: state.guests }}>{props.children}</GuestContext.Provider>
	);
};
export default GuestState;
