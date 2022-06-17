import './contact.scss';
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
			label: 'Name *',
			errorMessage: 'Name should be atleast 3 characters and no special characters',
			required: true,
			pattern: '[A-Za-z0-9]{3,16}$'
		},
		{
			id: 2,
			name: 'e-mail',
			placeholder: 'E-mail',
			type: 'email',
			label: 'E-mail *',
			errorMessage: 'Invalid email address',
			required: true,
			pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
		},
		{
			id: 3,
			name: 'message',
			placeholder: 'Tell me about your website? e.g goals,specific features , budget ...',
			type: 'textarea',
			label: 'Message *',
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
							<img src="https://www.mmwebdesign.co.za/images/phone.png" alt="" className="c-icon" />
							066266013
						</div>
						<div className="c-info-item">
							<img className="c-icon" src="https://www.mmwebdesign.co.za/images/email.png" alt="" />
							molefe@mmwebdesign.co.za
						</div>
						<div className="c-info-item">
							<img className="c-icon" src="https://www.mmwebdesign.co.za/images/address.png" alt="" />
							1056 Ngwenya Street, Heidelberg Gauteng 1441
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						For inquiries or quotations please contact me by email at <b>molefe@mmwebdesign.co.za</b> or
						fill out the form below.
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
						{done && <p className="done">Message sent successfully</p>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
