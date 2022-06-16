import { useState } from 'react';
import './form-input.styles.scss';

const TextArea = (props) => {
	const [ focused, setFocused ] = useState(false);
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div className="formInput">
			<label>{label}</label>
			<textarea
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};

export default TextArea;
