import React from 'react';
import * as style from './layout.module.scss';
import Header from '../Header/Header';

const Layout = ({ children }) => {
	return (
		<main className={style.layout}>
			<Header />
			{children}
		</main>
	);
};

export default Layout;
