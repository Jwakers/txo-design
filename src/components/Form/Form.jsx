import React from 'react';
import * as style from './form.module.scss';
import FormInput from './FormInput';
import Button from '../Button/Button';

const Form = () => {
	return (
		<>
			<form className={style.form}>
				<div className={style.form_top}>Stay updated</div>
				<div className={[style.form_item, style.form_item___head].join(' ')}>
					Newsletter
				</div>
				<FormInput type='text' placeholder='Full name' />
				<FormInput type='text' placeholder='Company' />
				<FormInput type='email' placeholder='Email Address' />
				<Button type='submit' className={style.form_btn}>
					Submit
				</Button>
			</form>
		</>
	);
};

export default Form;
