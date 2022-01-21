import React from 'react';
import * as style from './button.module.scss';

const Button = (props) => (
	<button
		className={`${style.button} ${Boolean(props.className) && props.className}`}
		onClick={props.onClick}
	>
		{props.children}
	</button>
);

export default Button;
