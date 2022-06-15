import React from 'react';
import Faq from 'react-faq-component';
import './faq.scss';
import faqImage from '../../assets/faq.png';

const data = {
	rows: [
		{
			title: 'Athena',
			content: (
				<ul>
					<li>Nunc maximus, magna at ultricies elementum,Nunc maximus, magna at ultricies elementum </li>
					<ul>
						<li>Nunc maximus, magna at ultricies elementum </li>
						<li>Nunc maximus, magna at ultricies elementum </li>
						<li>Nunc maximus, magna at ultricies elementum </li>
						<li>Nunc maximus, magna at ultricies elementum </li>
						<li>Nunc maximus, magna at ultricies elementum </li>
					</ul>
				</ul>
			)
		},
		{
			title: 'Nunc maximus, magna at ultricies elementum',
			content:
				'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.'
		},
		{
			title: 'Curabitur laoreet, mauris vel blandit fringilla',
			content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
			Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
			Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
			Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `
		},
		{
			title: 'What is the package version',
			content: <p>current version is 1.2.1</p>
		}
	]
};

const styles = {
	//  bgColor: 'white',
	// titleTextColor: "blue",
	//  titleTextSize: '48px',
	// rowTitleColor: "blue",
	//  rowTitleTextSize: 'medium',
	//  rowContentColor: 'grey',
	rowContentTextSize: '16px',
	//  rowContentPaddingTop: '10px',
	// rowContentPaddingBottom: "10px",
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
