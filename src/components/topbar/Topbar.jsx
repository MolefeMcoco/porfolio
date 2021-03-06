import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

const Topbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={'topbar ' + (menuOpen && 'active')}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						<img
							src={
								menuOpen && 'active' ? (
									'https://mmwebdesign.co.za/images/logo-inverted.png'
								) : (
									'https://mmwebdesign.co.za/images/logo.png'
								)
							}
							alt="MM Web Design Logo"
						/>
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>0662660513</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>molefe@mmwebdesign.co.za</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1" />
						<span className="line2" />
						<span className="line3" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
