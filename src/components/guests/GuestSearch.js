import React, { useContext, useRef } from 'react';
import GuestContext from '../context/guestContext/guestContext';

const GuestSearch = () => {
	const { searchGuest, clearSearch } = useContext(GuestContext);
	const searchvalue = useRef('');
	const handleChange = (e) => {
		if (searchvalue.current.value !== '') {
			searchGuest(e.target.value);
		} else {
			clearSearch();
		}
	};
	return (
		<div>
			<input
				ref={searchvalue}
				type="text"
				className="search"
				onChange={handleChange}
				placeholder=" Search Guest by name ..."
			/>
			<i className="fas fa-search search-icon" />
		</div>
	);
};

export default GuestSearch;
