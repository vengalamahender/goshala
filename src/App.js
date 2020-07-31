import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export const App = () => {
	return (
		<div>
			<div class="topbar1">
				<div class="container">
					<ul class="tb-br-cnt1">
						<li>
							<i class="fa fa-envelope-square" style={{ color: '#84c350' }} />{' '}
							<a href="#" title="" itemprop="url">
								info@yourdomain.com
							</a>
						</li>
						<li>
							<i class="fa fa-phone" style={{ color: '#84c350' }} />{' '}
							<span style={{ color: '#84c350' }}>Call Us At:</span> 1800-222-222
						</li>
					</ul>
					<div class="tb-br-scl1">
						<strong>Follow Us At:</strong>
						<ul class="scl-shr1">
							<li>
								<a href="#" title="" itemprop="url" target="_blank">
									<i class="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a href="#" title="" itemprop="url" target="_blank">
									<i class="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a href="#" title="" itemprop="url" target="_blank">
									<i class="fa fa-flickr" />
								</a>
							</li>
							<li>
								<a href="#" title="" itemprop="url" target="_blank">
									<i class="fa fa-skype" />
								</a>
							</li>
							<li>
								<a href="#" title="" itemprop="url" target="_blank">
									<i class="fa fa-vimeo-square" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<BrowserRouter>
				<div className="App">
					<div className="children">
						<div className="container-fluid">
							{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
								<Navbar.Brand href="#home" />
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto" />

									<Nav>
										<Nav.Link>
											{' '}
											<Link to="/ContactUs" style={{ color: 'white' }}>
												{' '}
												<i class="fas fa-phone-alt" />Call Us At: 1800-222-222
											</Link>
										</Nav.Link>
										<Nav.Link>
											{' '}
											<Link to="/Email" style={{ color: 'white' }}>
												{' '}
												<i class="fas fa-envelope-square" /> info@yourdomain.com
											</Link>
										</Nav.Link>
										<Nav.Link>
											<Link to="/FOLLOW US AT:" style={{ color: 'white' }}>
												{' '}
												FOLLOW US AT:
												<i class="fab fa-facebook-square" />
												<i class="fab fa-twitter" />
												<i class="fab fa-skype" />
												<i class="fab fa-vimeo" />
											</Link>
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar> */}

							<Route path="/Header" component={Header} />
						</div>
					</div>
				</div>
			</BrowserRouter>
			<Header />
		</div>
	);
};

export default App;
