import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import Home from './Headercompo/Home';
import Beamember from './Headercompo/Beamember';
import Adoptacow from './Headercompo/Adoptacow';
import AboutUs from './Headercompo/AboutUs';
import Events from './Headercompo/Events';
import Gallery from './Headercompo/Gallery';
import ContactUs from './Headercompo/ContactUs';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import GomathaLogo from './assets/LOGO.jpg';
// import Image from 'react-bootstrap/Image';

const Header = () => {
	return (
		<BrowserRouter>
			<div className="Header">
				<div className="children">
					<div className="container-fluid">
						<div className="text-center">
							<Navbar collapseOnSelect expand="lg" bg="white" variant="white">
								<Navbar.Brand href="#home">
									<img width="17%" src="./assets/LOGO.jpg" />
									<span style={{ color: 'black' }}>Goshala</span>
								</Navbar.Brand>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									{/* <Nav className="mr-auto" /> */}
									<Nav>
										<Nav.Link>
											{' '}
											<Link to="/Home">
												{' '}
												<span style={{ color: 'black' }}>HOME </span>
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/Beamember">
												<span style={{ color: 'black' }}> BE A MEMBER</span>
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/Adoptacow">
												<span style={{ color: 'black' }}>ADOPT A COW</span>
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/AboutUs">
												<span style={{ color: 'black' }}>ABOUTUS</span>
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/Events">
												<span style={{ color: 'black' }}>EVENTS</span>
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/Gallery">
												<span style={{ color: 'black', marginLeft: '10%' }}> GALLERY </span>
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/ContactUs">
												<span style={{ color: 'black', marginLeft: '10%' }}> CONTACTUS </span>
											</Link>
										</Nav.Link>
										<button
											style={{
												backgroundColor: 'rgb(132, 195, 80)',
												borderRadius: '30px',
												marginLeft: '10%',
												border: '2px solid rgb(132, 195, 80)',
												padding: '14px 50px',
												color: 'white'
											}}
										>
											DONATE NOW
										</button>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
							<hr />
							<Route path="/Home" component={Home} />
							<Route path="/Beamember" component={Beamember} />
							<Route path="/Adoptacow" component={Adoptacow} />
							<Route path="/AboutUs" component={AboutUs} />
							<Route path="/Events" component={Events} />
							<Route path="/Gallery" component={Gallery} />
							<Route path="/ContactUs" component={ContactUs} />
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};
export default Header;
