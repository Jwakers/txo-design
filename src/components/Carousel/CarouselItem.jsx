import React from 'react';
import * as style from './carousel.module.scss';

const CarouselItem = ({ data }) => (
	<img
		className={style.carousel_wrapper_inner_img}
		src={data.src}
		alt={data.desc}
	/>
);

export default CarouselItem;
