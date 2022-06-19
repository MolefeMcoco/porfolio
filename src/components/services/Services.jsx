import React from 'react';
import './services.scss';

const Services = () => {
	return (
		<div className="services" id="services">
			<div className="left">
				<div className="left-container">
					<h1>Web Design</h1>
					<p>
						Easy to navigate professionally websites that represents your brand , showcases products or
						services and encourage customers to make a purchase.
					</p>
					<a href="#portfolio">
						<button>Projects</button>
					</a>
				</div>
			</div>
			<div className="right">
				<div className="right-container">
					<div className="item">
						<img src="https://www.mmwebdesign.co.za/images/code-solid.svg" alt="" className="icon" />
						<h3>Custom Coded</h3>
						<p>
							Unique custom coded websites which are SEO friendly, faster , secure and fully customizable.
						</p>
					</div>
					<div className="item">
						<div className="icon-container">
							<img
								src="https://www.mmwebdesign.co.za/images/wordpress-brands.svg"
								alt=""
								className="icon"
							/>
						</div>
						<h3>Wordpress </h3>
						<p>
							Theme based websites that take shorter time to build, and are cheaper to build with a huge
							library.
						</p>
					</div>
					<div className="item">
						<div className="icon-container">
							<img
								src="https://www.mmwebdesign.co.za/images/mobile-button-solid.svg"
								alt=""
								className="icon"
							/>
						</div>
						<h3>Mobile friendly</h3>
						<p>Responsive websites that are accessible across all devices with web and Internet access.</p>
					</div>
					<div className="item">
						<div className="icon-container">
							<img
								src="https://www.mmwebdesign.co.za/images/screwdriver-wrench-solid.svg"
								alt=""
								className="icon"
							/>
						</div>
						<h3>Website Maintenance </h3>
						<p>
							Regularly checking website for issues, mistakes and keeping it updated with the relevant and
							required changes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
