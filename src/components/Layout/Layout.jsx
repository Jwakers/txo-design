import React, { useEffect } from 'react';
import * as style from './layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
	useEffect(() => {
		// Function to add utililty class allowing us to
		// remove the css outline property for mouse users
		// but retain it for tab targeting.
		// Combine with removeOutline() mixin
		const { body } = document;
		body.addEventListener('mousedown', () => {
			body.classList.add('using-mouse');
		});
		body.addEventListener('keydown', (event) => {
			if (event.key === 'Tab') {
				body.classList.remove('using-mouse');
			}
		});
	});
	return (
		<main className={style.layout}>
			<Header />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
