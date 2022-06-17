import './testimonials.scss';

const Testimonials = () => {
	const data = [
		{
			id: 1,
			name: 'Siyabonga Mtshali',
			title: 'Founder of Brain Space ',
			img: '	https://www.mmwebdesign.co.za/assets/images/siyabonga.jpg',
			icon: '../../assets/twitter.png',
			desc: " I love their creativity in designing and tailoring according to one's needs."
		},
		{
			id: 2,
			name: 'Eugen Buthelezi',
			title: 'CEO of Awe Dawg Connection',
			img: 'https://www.brainspacecreativity.co.za/assets/images/siyabonga.png',
			icon: 'assets/linkedin.png',
			desc: 'His one of the best in Heidelberg.',
			featured: true
		},
		{
			id: 3,
			name: 'Mpho',
			title: 'Co-Founder of Eco Compounds',
			img:
				'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/youtube.png',
			desc: 'We happy as Eco Compounds with your services. Thank you for treating us with outmost respect. '
		}
	];
	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<div className="container">
				{data.map((d) => (
					<div className={d.featured ? 'card featured' : 'card'}>
						<div className="image">
							<img src={d.img} alt="" />
						</div>
						<div className="top">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
						</div>
						<div className="bottom">{d.desc}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
