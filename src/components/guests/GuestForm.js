import React, { useState, useContext } from 'react';
import GuestContext from '../context/guestContext/guestContext';

const GuestForm = () => {
	const { addGuest } = useContext(GuestContext);

	const [ guest, setGuest ] = useState({
		name: '',
		phone: '',
		dietary: 'Non-Veg'
	});

	const onSubmit = (e) => {
		e.preventDefault();
		addGuest(guest);
		setGuest({
			name: '',
			phone: '',
			dietary: 'Non-Veg'
		});
	};

	const handleChange = (e) => {
		setGuest({ ...guest, [e.target.name]: e.target.value });
	};

	const { name, phone, dietary } = guest;
	return (
		<div className="invite-section">
			<h1>Invite Someone</h1>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
				<input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
				<p className="options-label">Dietary</p>
				<div className="options">
					<label className="container">
						Non-veg
						<input
							type="radio"
							name="dietary"
							Value="Non-Veg"
							checked={dietary === 'Non-Veg'}
							onChange={handleChange}
						/>
						<span className="checkmark" />
					</label>
					<label className="container">
						Vegan
						<input type="radio" name="dietary" Value="Vegan" onChange={handleChange} />
						<span className="checkmark" />
					</label>
					<label className="container">
						Pascatarian
						<input type="radio" name="dietary" Value="Pesacatarian" onChange={handleChange} />
						<span className="checkmark" />
					</label>
				</div>
				<input type="submit" value="Add Guest" className="btn" />
			</form>
		</div>
	);
};

export default GuestForm;
