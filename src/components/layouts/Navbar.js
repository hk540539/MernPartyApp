import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<h1>
					<i className="fas fa-glass-cheers" />
					Party Come Lets Join
				</h1>
				<p>
					Made with <span>❤</span> by Hemanth
				</p>
			</div>
			<ul>
				<li>Hello, Hemanth</li>
				<span className="sm-hide">|</span>
				<li>
					<a href="#!">
						<span className="sm-hide">Logout</span>
						<i className="fas fa-sign-out-alt" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
