import React, { useState } from 'react';
import * as style from './carousel.module.scss';
import CarouselItem from './CarouselItem';
import imageData from './carousel-data';
import Button from '../Button/Button';

const Carousel = () => {
	const images = imageData;
	const [activeImage, setActiveImage] = useState(0);
	return (
		<section className={style.carousel}>
			<div className={style.carousel_wrapper}>
				{images.map((img) => (
					<CarouselItem data={img} key={img.id} />
				))}
			</div>
			<div className={style.carousel_infoBar}>
				<div className={style.carousel_infoBar_top}>
					<div>Name: {images[activeImage].name}</div>
					<div>Availablity: {images[activeImage].available}</div>
				</div>
				<div className={style.carousel_infoBar_desc}>
					<p>{images[activeImage].desc}</p>
				</div>
			</div>
			<Button>Read More</Button>
		</section>
	);
};

export default Carousel;
