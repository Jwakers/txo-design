import React, { useState, useEffect, useRef } from 'react';
import * as style from './carousel.module.scss';
import CarouselItem from './CarouselItem';
import imageData from './carousel-data';
import Button from '../Button/Button';

const Carousel = () => {
	const [activeImage, setActiveImage] = useState(0);
	const [wrapperWidth, setWrapperWidth] = useState(0);
	const [direction, setDirection] = useState('');
	const [readMore, setReadMore] = useState(false);
	const wrapperRef = useRef(null);
	useEffect(() => {
		setWrapperWidth(wrapperRef.current.offsetWidth);
	}, []);
	const handleMouseMove = (e) => {
		calcDirection(e);
	};
	const handleMouseDown = (e) => {
		if (direction === 'right') {
			if (activeImage < imageData.length - 1) {
				setActiveImage(activeImage + 1);
			}
		} else {
			if (activeImage > 0) {
				setActiveImage(activeImage - 1);
			}
		}
	};
	const calcDirection = (e) => {
		// Get logical mouse position relative to element
		const rect = e.target.getBoundingClientRect();
		const position = Math.round(((e.clientX - rect.left) / rect.width) * 100);
		if (position >= 50 && direction !== 'right') return setDirection('right');
		if (position < 50 && direction !== 'left') return setDirection('left');
	};

	return (
		<section className={style.carousel}>
			<div
				ref={wrapperRef}
				className={`${style.carousel_wrapper} ${
					direction === 'left' ? style.carousel_wrapper___left : ''
				}`}
				onMouseMove={(e) => handleMouseMove(e)}
				onMouseDown={(e) => handleMouseDown(e)}
				style={{ transform: `translateX(${-(wrapperWidth * activeImage)}px)` }}
			>
				{imageData.map((img) => (
					<CarouselItem data={img} key={img.id} />
				))}
			</div>
			<div className={style.carousel_infoBar}>
				<div className={style.carousel_infoBar_top}>
					<div>Name: {imageData[activeImage].name}</div>
					<div>Availablity: {imageData[activeImage].available}</div>
				</div>
				<div
					className={`${style.carousel_infoBar_desc} ${
						readMore ? style.carousel_infoBar_desc___open : ''
					}`}
				>
					<p>{imageData[activeImage].desc}</p>
				</div>
			</div>
			<Button onClick={() => setReadMore(!readMore)}>
				{readMore ? 'Hide Text' : 'Read More'}
			</Button>
		</section>
	);
};

export default Carousel;
