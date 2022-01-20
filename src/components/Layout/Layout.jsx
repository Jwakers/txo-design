import React from 'react';
import * as style from './layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
	return (
		<main className={style.layout}>
			<Header />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
