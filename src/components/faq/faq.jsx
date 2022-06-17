import React from 'react';
import Faq from 'react-faq-component';
import './faq.scss';
import { data, config, styles } from './data.js';
import '../../global.scss';

const Faqs = () => {
	return (
		<div className="faq" id="faq">
			<div className="left">
				<img src="https://www.mmwebdesign.co.za/images/faq.png" alt="" />
			</div>
			<div className="right">
				<Faq data={data} styles={styles} config={config} className="faq" />
			</div>
		</div>
	);
};

export default Faqs;
