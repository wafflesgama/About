import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer>
			<div class="container">
				<div class="row">
					<div class="col-8 col-12-medium">
						<section>
							<header>
								<h2>Blandit nisl adipiscing</h2>
							</header>
							<ul class="dates">
								<li>
									<span class="date">Jan <strong>27</strong></span>
									<h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
									<p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat
										etiam.</p>
								</li>
								<li>
									<span class="date">Jan <strong>23</strong></span>
									<h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
									<p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing
										feugiat lorem.</p>
								</li>
								<li>
									<span class="date">Jan <strong>15</strong></span>
									<h3><a href="#">Magna tempus lorem feugiat</a></h3>
									<p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit
										consequat.</p>
								</li>
								<li>
									<span class="date">Jan <strong>12</strong></span>
									<h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
									<p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam
										consequat.</p>
								</li>
								<li>
									<span class="date">Jan <strong>10</strong></span>
									<h3><a href="#">Blandit tempus aliquam?</a></h3>
									<p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet
										dolore.</p>
								</li>
							</ul>
						</section>
					</div>
					
					
					<div class="col-4 col-12-medium">
						<section>
							<header>
								<h2>Contacts</h2>
							</header>

							<ul class="contact">
								<li>
									<h3>Location</h3>
									<p>
										Porto, Portugal<br />
									</p>
								</li>
								<li>
									<h3>Mail</h3>
									<p><a href="#">guilherme.s.gam@gmail.com</a></p>
								</li>
								<li>
									<h3>Phone</h3>
									<p>(+351) 963487245</p>
								</li>

							</ul>
							<ul class="social">
								<li><a class="icon brands fa-facebook-f" href="#"><span
											class="label">Facebook</span></a></li>
								<li><a class="icon brands fa-twitter" href="#"><span class="label">Twitter</span></a>
								</li>
								<li><a class="icon brands fa-dribbble" href="#"><span class="label">Dribbble</span></a>
								</li>
								<li><a class="icon brands fa-tumblr" href="#"><span class="label">Tumblr</span></a></li>
								<li><a class="icon brands fa-linkedin-in" href="#"><span
											class="label">LinkedIn</span></a></li>
							</ul>
						</section>
					</div>
				</div>
			</div>

      </footer>
    )
  }
}

export default Footer