import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as style from './header.module.scss';
import * as heroStyle from '../Hero/hero.module.scss';
import logo from '../../assets/images/logo/txo_logo_2.svg';

import Hamburger from './Hamburger/Hamburger';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const logoRef = useRef(null);
	const headerRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const { current: logo } = logoRef;
		const scrollT = {
			trigger: `.${heroStyle.hero}`,
			end: 'top 0',
			scrub: true,
		};
		gsap.from(logo, {
			scale: 2,
			y: window.innerHeight - logo.offsetHeight * 3,
			scrollTrigger: scrollT,
		});

		gsap.utils
			.toArray([headerRef.current, `.${heroStyle.hero}`])
			.forEach((el) => {
				gsap.from(el, {
					opacity: 0,
					scrollTrigger: scrollT,
				});
			});
	}, []);

	const handleMenu = () => {
		// Toggle menu state
		setMenuOpen(!menuOpen);
	};
	return (
		<header className={style.header}>
			<div className={style.header_logo} ref={logoRef}>
				<img src={logo} alt='TXO logo' />
			</div>

			<div
				ref={headerRef}
				className={`${style.header_content} ${
					menuOpen ? style.header_content___open : ''
				}`}
			>
				<div className={style.header_content_item}>
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
