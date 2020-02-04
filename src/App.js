import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import GuestState from './components/context/guestContext/GuestState';

function App() {
	return (
		<GuestState>
			<div>
				<Navbar />
				<Home />
			</div>
		</GuestState>
	);
}

export default App;
