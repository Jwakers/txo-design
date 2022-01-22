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
	const cursorRef = useRef(null);
	useEffect(() => {
		// Set the offset width of carousel used for calculations
		setWrapperWidth(wrapperRef.current.offsetWidth);
	}, []);
	const handleMouseMove = (e) => {
		// Align psuedo cursor element to actual cursor position
		const { x, y } = getPosition(e);
		calcDirection(e, x);
		cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
	};
	const handleClick = (e) => {
		if (direction === 'next') {
			if (activeImage < imageData.length - 1) {
				setActiveImage(activeImage + 1);
			}
		} else {
			if (activeImage > 0) {
				setActiveImage(activeImage - 1);
			}
		}
	};
	const handleMouseLeave = () => {
		setDirection('');
	};
	const getPosition = (e) => {
		// Get logical mouse position relative to element
		const rect = e.currentTarget.getBoundingClientRect();
		return { x: e.clientX - rect.left, y: e.clientY - rect.top };
	};
	const calcDirection = (e, x) => {
		const rect = e.currentTarget.getBoundingClientRect();
		// Convert position to percentage value
		const position = Math.round((x / rect.width) * 100);
		if (position >= 50 && direction !== 'next') return setDirection('next');
		if (position < 50 && direction !== 'prev') return setDirection('prev');
	};

	return (
		<section className={style.carousel}>
			<div
				ref={wrapperRef}
				className={style.carousel_wrapper}
				onMouseMove={(e) => handleMouseMove(e)}
				onClick={(e) => handleClick(e)}
				onMouseLeave={handleMouseLeave}
			>
				<div ref={cursorRef} className={style.carousel_wrapper_cursor}>
					{direction}
				</div>
				<div
					className={style.carousel_wrapper_inner}
					style={{
						transform: `translateX(${-(wrapperWidth * activeImage)}px)`,
					}}
				>
					{imageData.map((img) => (
						<CarouselItem data={img} key={img.id} />
					))}
				</div>
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
