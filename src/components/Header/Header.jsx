import React, { useState } from 'react';
import * as style from './header.module.scss';
import logo from '../../assets/images/logo/txo_logo_2.svg';

import Hamburger from './Hamburger/Hamburger';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenu = () => {
		// Toggle menu state
		setMenuOpen(!menuOpen);
	};
	return (
		<header className={style.header}>
			<div className={style.header_logo}>
				<img src={logo} alt='TXO logo' />
			</div>

			<div
				className={`${style.header_content} ${
					menuOpen ? style.header_content___open : ''
				}`}
			>
				<div
					className={[
						style.header_content_item,
						// style.header_content_item___grow,
					].join(' ')}
				>
					<div className={style.header_content_head}>Enquiries</div>
					<div className={style.header_content_inner}>
						<ul>
							<li>General</li>
							<li>
								<a href='tel:0 020 3613 4733'>+44 (0) 020 3613 4733</a>
							</li>
							<li>
								<a href='mailto:Info@txowork.com'>Info@txowork.com</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.header_content_item}>
					<div className={style.header_content_inner}>
						<ul>
							<li>Sales</li>
							<li>
								<a href='tel:0 020 3613 4733'>+44 (0) 020 3613 4733</a>
							</li>
							<li>
								<a href='mailto:Info@txowork.com'>Info@txowork.com</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.header_content_item}>
					<div className={style.header_content_head}>Address</div>
					<div className={style.header_content_inner}>
						<ul>
							<li>Morlands</li>
							<li>5-23 Old Street</li>
							<li>London EC1V 9HL</li>
						</ul>
					</div>
				</div>
				<div className={style.header_content_item}>
					<div className={style.header_content_head}>Connect</div>
					<div className={style.header_content_inner}>
						<ul>
							<li>
								<a href='#'>Instagram</a>
							</li>
							<li>
								<a href='#'>linkedin</a>
							</li>
							<li>
								<a href='#'>Facebook</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<Hamburger isOpen={menuOpen} onClick={handleMenu} />
		</header>
	);
};

export default Header;
