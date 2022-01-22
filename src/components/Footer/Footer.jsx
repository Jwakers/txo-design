import React from 'react';
import * as style from './footer.module.scss';
import logo from '../../assets/images/logo/thirdway_logo.svg';

const Footer = () => (
	<footer className={style.footer}>
		<div className={style.footer_logo}>
			<img src={logo} alt='Thirdway logo' />
		</div>
		<div className={style.footer_links}>
			<a href='#'>
				Terms <span data-type='amp'>&amp;</span>
				<span data-type='text'>and</span> Conditions
			</a>
			<a href='#'>Privacy Policy</a>
			<a href='#'>Cookie Policy</a>
			<a href='#'>Accessibility</a>
		</div>
	</footer>
);

export default Footer;
