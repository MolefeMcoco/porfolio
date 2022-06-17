import './intro.scss';

const Intro = () => {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="https://mmwebdesign.co.za/images/man.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Molefe Mcoco</h1>
					<h3>
						Freelance <span> Web Developer</span>
					</h3>
				</div>
				<a href="#services">
					<img src="https://mmwebdesign.co.za/images/down-arrow.png" alt="" />
				</a>
			</div>
		</div>
	);
};

export default Intro;
