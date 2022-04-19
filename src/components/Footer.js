import React, { Component } from 'react'
import "./Footer.css"

export class Footer extends Component {
	render() {
		return (
			<footer className="finalFooter">
				<div className="container">
					<div className="row">
						<div className="col-3 col-12-medium mr-8">
							<header>
								<h1 className="inv">About me</h1>
							</header>

							<ul className="footerDesc">
								I'm a 23y Software Engineer in Porto 🏙️
								I have also experience in Game Dev 🕹️ and UI/UX and Design 🎨
								<br/>
								If you like to partner up with me feel free to contact via E-mail or Linkedin 📡
								<br/>
								I'll be sure to respond! 😎
								{/* <li><a className="inv">Homepage</a></li>

								<li><a className="inv">Games</a></li>
								<li><a className="inv">Tools</a></li>
								<li><a className="inv">Tutorials</a></li>
								<li><a className="inv">Resume</a></li> */}
							</ul>
						
						</div>
						<div className="col-4 col-12-medium">
							<header>
								<h1 className="inv">Quick access</h1>
							</header>

							<ul className="footer-links">
								<li><a className="inv">Homepage</a></li>
								<li><a className="inv">Games</a></li>
								<li><a className="inv">Tools</a></li>
								<li><a className="inv">Tutorials</a></li>
								<li><a className="inv">Resume</a></li>
							</ul>
						
						</div>

						<div className="col-4 col-12-medium inv">
							<section>
								<header>
									<h1 className="inv">Contact</h1>
								</header>

								<ul className="contact ">
									<li className='d-flex-inline'>
										<h3 className="inv m-0">
											<i className="fa-solid fa-location-dot mr-1"></i>
											Location
										</h3>
										<p>
											Porto, Portugal<br />
										</p>
									</li>
									<li>
										<h3 className="inv m-0">
											<i className="fa-solid fa-envelope mr-1"></i>
											Mail
										</h3>
										<p><a href = "mailto: guilherme_silva_gama@outlook.com">guilherme_silva_gama@outlook.com</a></p>
									</li>
									{/* <li>
									<h3 className="inv m-0">Phone</h3>
									<p>(+351) 963487245</p>
								</li> */}

								</ul>
								<ul className="social">
									<li><a className="icon brands fa-twitter" target="_blank" href="https://twitter.com/dawn_upside"><span className="label">Twitter</span></a>
									</li>
									<li><a className="icon brands fa-unity" target="_blank" href="https://assetstore.unity.com/publishers/59786"><span className="label">Unity</span></a>
									</li>
									<li><a className="icon brands fa-itch-io" target="_blank" href="https://guilhermesgama.itch.io/"><span className="label">Itch.io</span></a></li>
									<li><a className="icon brands fa-github" target="_blank" href="https://github.com/wafflesgama"><span className="label">Github</span></a></li>
									<li><a className="icon brands fa-linkedin-in" target="_blank" href="https://www.linkedin.com/in/guilherme-gama-1ab564195"><span
										className="label">LinkedIn</span></a></li>
								</ul>
							</section>
						</div>
					</div>

					<section>
						All rights reserved to Guilherme Gama 
					</section>
				</div>

			</footer>
		)
	}
}

export default Footer