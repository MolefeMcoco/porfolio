import './contact.scss';
import Phone from '../../assets/phone.png';
import Email from '../../assets/email.png';
import Address from '../../assets/address.png';
import FormInput from '../form-input/form-input.component';
import TextArea from '../form-input/form-textArea';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();
	const [ done, setDone ] = useState(false);
	const [ values, setValues ] = useState({
		name: '',
		email: '',
		message: ''
	});

	const inputs = [
		{
			id: 1,
			name: 'name',
			placeholder: 'Name',
			type: 'text',
			label: 'Name',
			errorMessage: 'Name should be atleast 3 characters and no special characters',
			required: true,
			pattern: '[A-Za-z0-9]{3,16}$'
		},
		{
			id: 2,
			name: 'e-mail',
			placeholder: 'E-mail',
			type: 'email',
			label: 'E-mail',
			errorMessage: 'Invalid email address',
			required: true,
			pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
		},
		{
			id: 3,
			name: 'message',
			placeholder: 'message',
			type: 'textarea',
			label: 'Message',
			errorMessage: 'message should contain atleast 3 characters',
			required: true,
			pattern: '{3,16}$',
			rows: '4'
		}
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_vlhqige', 'template_ceubmaj', form.current, 'Ra7scSsSPyfITKy5h').then(
			(result) => {
				console.log(result.text);
				setDone(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.values });
	};

	return (
		<div className="c" id="contact">
			<div className="c-bg" />
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">Let's discuss your project</h1>
					<div className="c-info">
						<div className="c-info-item">
							<img src={Phone} alt="" className="c-icon" />
							066266013
						</div>
						<div className="c-info-item">
							<img className="c-icon" src={Email} alt="" />
							molefe@mmwebdesign.co.za
						</div>
						<div className="c-info-item">
							<img className="c-icon" src={Address} alt="" />
							1056 Ngwenya Street, Heidelberg Gauteng 1441
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						<b>What’s your story?</b> Get in touch. Always available for freelancing if the right project
						comes along. me.
					</p>
					<form ref={form} onSubmit={handleSubmit}>
						{inputs.map(
							(input) =>
								input.type === 'textarea' ? (
									<TextArea
										key={input.id}
										{...input}
										value={values[input.name]}
										onChange={onChange}
										row={input.rows}
									/>
								) : (
									<FormInput
										key={input.id}
										{...input}
										value={values[input.name]}
										onChange={onChange}
									/>
								)
						)}
						<button>Submit</button>
						{done && 'Thank you...'}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
