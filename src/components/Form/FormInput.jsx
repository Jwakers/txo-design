import React from 'react';
import * as style from './form.module.scss';

const FormInput = (props) => {
	return (
		<input
			className={[style.form_item, style.form_item___input].join(' ')}
			{...props}
		/>
	);
};

export default FormInput;
