import React from 'react';
import * as style from './hero.module.scss';

const Hero = () => (
	<section className={style.hero}>
		<p className={style.hero_center}>
			We’re hands-on and committed to evolving your business to strive for
			better.
		</p>
		<div className={style.hero_bottom}>
			<div className={style.hero_bottom_head}>Our offering</div>
			<p className={style.hero_bottom_content}>
				We provide physical, pragmatic and personal business guidance. Success
				is never static. Neither are we. We'll be your business partners for
				positive change.
			</p>
		</div>
	</section>
);

export default Hero;
