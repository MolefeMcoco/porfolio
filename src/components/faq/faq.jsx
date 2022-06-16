import React from 'react';
import Faq from 'react-faq-component';
import './faq.scss';
import faqImage from '../../assets/faq.png';
import '../../global.scss';

const data = {
	rows: [
		{
			title: 'How much is a website?',
			content:
				'this completely Depends on the size , pages and functionality of the website.I have packages I offer for popular website like online stores, informative and one page website or you can ask for a quote?'
		},
		{
			title: 'How long does it take to build website?',
			content: 'just like the cost . it  Depends on the size , pages and functionality of the website.'
		},
		{
			title: 'Can you help me with social media?',
			content: `afraid not. I specialise in web design and development. `
		},
		{
			title: 'What happens if I move my website to another web designer or agency?',
			content: 'Your website is yours and you can freely move it if you like.'
		},
		{
			title: 'what are terms of payment for designs and development of website?',
			content:
				'I like to work on a 30% upfront deposit and the outstanding 70% when the development has been completed and approved by client.'
		}
	]
};

const styles = {
	//  bgColor: 'white',
	// titleTextColor: "blue",
	//  titleTextSize: '48px',
	rowTitleColor: '#39b54a',
	//  rowTitleTextSize: 'medium',
	//  rowContentColor: 'grey',
	rowContentTextSize: '16px',
	rowContentPaddingTop: '20px',
	rowContentPaddingBottom: '20px',
	// rowContentPaddingLeft: "10px",
	// rowContentPaddingRight: "10px"
	// arrowColor: "red",
	transitionDuration: '1s',
	timingFunc: 'ease'
};

const config = {
	animate: true
	// arrowIcon: "V",
	// tabFocus: true
};

const Faqs = () => {
	return (
		<div className="faq" id="faq">
			<div className="left">
				<img src={faqImage} alt="" />
			</div>
			<div className="right">
				<Faq data={data} styles={styles} config={config} className="faq" />
			</div>
		</div>
	);
};

export default Faqs;
