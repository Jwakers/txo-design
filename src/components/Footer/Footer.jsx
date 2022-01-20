import React from 'react';
import * as style from './footer.module.scss';
import logo from '../../assets/images/logo/thirdway_logo.svg';

const Footer = () => (
	<footer className={style.footer}>
		<div className={style.footer_logo}>
			<img src={logo} alt='Thirdway logo' />
		</div>
		<div className={style.footer_links}>
			<a className={style.footer_links_link} href='#'>
				Terms and Conditions
			</a>
			<a className={style.footer_links_link} href='#'>
				Privacy Policy
			</a>
			<a className={style.footer_links_link} href='#'>
				Cookie Policy
			</a>
			<a className={style.footer_links_link} href='#'>
				Accessibility
			</a>
		</div>
	</footer>
);

export default Footer;
