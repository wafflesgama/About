import React, { Component } from 'react'
import "./Footer.css"

export class Footer extends Component {
	render() {
		return (
			<footer class="finalFooter">
				<div class="container">
					<div class="row">
						<div class="col-3 col-12-medium mr-8">
							<header>
								<h1 class="inv">About me</h1>
							</header>

							<ul class="footerDesc">
								I'm a 23y Software Engineer in Porto 🏙️
								I have also experience in Game Dev 🕹️ and UI/UX and Design 🎨
								<br/>
								If you like to partner up with me feel free to contact via E-mail or Linkedin 📡
								<br/>
								I'll be sure to respond! 😎
								{/* <li><a class="inv">Homepage</a></li>

								<li><a class="inv">Games</a></li>
								<li><a class="inv">Tools</a></li>
								<li><a class="inv">Tutorials</a></li>
								<li><a class="inv">Resume</a></li> */}
							</ul>
						
						</div>
						<div class="col-4 col-12-medium">
							<header>
								<h1 class="inv">Quick access</h1>
							</header>

							<ul class="footer-links">
								<li><a class="inv">Homepage</a></li>
								<li><a class="inv">Games</a></li>
								<li><a class="inv">Tools</a></li>
								<li><a class="inv">Tutorials</a></li>
								<li><a class="inv">Resume</a></li>
							</ul>
						
						</div>

						<div class="col-4 col-12-medium inv">
							<section>
								<header>
									<h1 class="inv">Contact</h1>
								</header>

								<ul class="contact ">
									<li class='d-flex-inline'>
										<h3 class="inv m-0">
											<i class="fa-solid fa-location-dot mr-1"></i>
											Location
										</h3>
										<p>
											Porto, Portugal<br />
										</p>
									</li>
									<li>
										<h3 class="inv m-0">
											<i class="fa-solid fa-envelope mr-1"></i>
											Mail
										</h3>
										<p><a href="#">guilherme_silva_gama@outlook.com</a></p>
									</li>
									{/* <li>
									<h3 class="inv m-0">Phone</h3>
									<p>(+351) 963487245</p>
								</li> */}

								</ul>
								<ul class="social">
									<li><a class="icon brands fa-twitter" target="_blank" href="https://twitter.com/dawn_upside"><span class="label">Twitter</span></a>
									</li>
									<li><a class="icon brands fa-unity" target="_blank" href="https://assetstore.unity.com/publishers/59786"><span class="label">Unity</span></a>
									</li>
									<li><a class="icon brands fa-itch-io" target="_blank" href="https://guilhermesgama.itch.io/"><span class="label">Itch.io</span></a></li>
									<li><a class="icon brands fa-github" target="_blank" href="https://github.com/wafflesgama"><span class="label">Github</span></a></li>
									<li><a class="icon brands fa-linkedin-in" target="_blank" href="https://www.linkedin.com/in/guilherme-gama-1ab564195"><span
										class="label">LinkedIn</span></a></li>
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