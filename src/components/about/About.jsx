import './about.scss';

const About = () => {
	return (
		<div className="a" id="about">
			<div className="a-left">
				<div className="a-card">
					<img
						src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="a-img"
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">Hi this is Molefe Mcoco</p>
				<p className="a-desc">
					I'm a professional and highly skilled Web developer with more than 4 years of experience in the
					field. I bring a range of skills from visual design, interaction design and UI. I focus on creating
					user friendly design layouts and rich seamless experiences between the product and the user.
				</p>
				<div className="a-award">
					<a href="https://www.bark.com/en/za/company/mm-web-design/mDeP8/">
						<img src="https://www.mmwebdesign.co.za/images/award.png" alt="" className="a-award-img" />
					</a>
				</div>
				<a href="#contact" className="a-hire">
					<button>Hire Me Now</button>
				</a>
			</div>
		</div>
	);
};

export default About;
