import React, { useReducer } from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH } from '../types';

const GuestState = (props) => {
	const initialState = {
		filterGuest: false,
		search: null,
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

	const searchGuest = (guest) => {
		dispatch({ type: SEARCH_GUEST, payload: guest });
	};
	const clearSearch = () => {
		dispatch({ type: CLEAR_SEARCH });
	};
	return (
		<GuestContext.Provider
			value={{
				toggleFilter,
				guests: state.guests,
				filterGuest: state.filterGuest,
				searchGuest,
				clearSearch,
				search: state.search
			}}
		>
			{props.children}
		</GuestContext.Provider>
	);
};
export default GuestState;
