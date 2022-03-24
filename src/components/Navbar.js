import React, { Component } from 'react'
import { Link as Link } from 'react-router-dom';
import '../Logo.scss'

export class Navbar extends Component {
	render() {
		return (
			<section id="header">

				{/* <h1><Link to="About/">Guilherme Gama</Link></h1> */}
				{/* <h1 class="headline headline--float">Guilherme Gama</h1> */}
				<div class="content">
					<div className='d-flex-inline content__container'>

						<p class="content__container__text">Guilherme Gama  |</p>
						<div class="listHider">
							<ul class="content__container__list">
								<li>Portefolio</li>
								<li>Articles</li>
								<li>Assets</li>
								<li>Tutorials</li>
							</ul>
						</div>
					</div>
				</div>
				<nav id="nav">
					<ul>
						<li><Link to="About/">Home</Link></li>
						<li>
							<a href="#">Dropdown</a>
							<ul>
								<li><a href="#">Lorem ipsum dolor</a></li>
								<li><a href="#">Magna phasellus</a></li>
								<li><a href="#">Etiam dolore nisl</a></li>
								<li>
									<a href="#">Phasellus consequat</a>
									<ul>
										<li><a href="#">Magna phasellus</a></li>
										<li><a href="#">Etiam dolore nisl</a></li>
										<li><a href="#">Veroeros feugiat</a></li>
										<li><a href="#">Nisl sed aliquam</a></li>
										<li><a href="#">Dolore adipiscing</a></li>
									</ul>
								</li>
								<li><a href="#">Veroeros feugiat</a></li>
							</ul>
						</li>
						<li><a href="left-sidebar.html">Left Sidebar</a></li>
						<li><a href="right-sidebar.html">Right Sidebar</a></li>
						<li><a href="no-sidebar.html">No Sidebar</a></li>
					</ul>
				</nav>

			</section>
		)
	}
}

export default Navbar