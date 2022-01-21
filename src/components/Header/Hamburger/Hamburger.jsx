import React from 'react';

import * as style from './hamburger.module.scss';

const Hamburger = ({ isOpen, onClick }) => {
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			onClick();
		}
	};
	const sections = [
		style.hamburger_bar___top,
		style.hamburger_bar___middle,
		style.hamburger_bar___bottom,
	];
	return (
		<div
			className={`${style.hamburger} ${isOpen ? style.hamburger___open : ''}`}
			onClick={onClick}
			onKeyPress={handleKeyPress}
		>
			{sections.map((bar, i) => (
				<div className={`${style.hamburger_bar} ${bar}`} key={i}></div>
			))}
		</div>
	);
};

export default Hamburger;
