import React, { Component } from 'react'
import { Link as Link } from 'react-router-dom';
import '../Logo.scss'
import { useNavigate } from 'react-router-dom';


function Navbar() {
	let navigate=useNavigate();
		return (
			<section id="header">

				{/* <h1><Link to="About/">Guilherme Gama</Link></h1> */}
				{/* <h1 class="headline headline--float">Guilherme Gama</h1> */}
				<div class="content non-interac no-mobile">
					<div className='d-flex-inline content__container' >
							<p class="content__container__text">Guilherme Gama  |</p>
							<div class="listHider">
								<ul class="content__container__list">
									<li>Portefolio</li>
									<li>Games</li>
									<li>Tools</li>
									<li>Tutorials</li>
								</ul>
							</div>
							<button class="hidden-navLink" onClick={()=> navigate("/About")}/>
					</div>
				</div>
					<h1 className='only-mobile font-big'>Guilherme Gama</h1>
				<nav id="nav">
					<ul>
					<li><Link to="About/">Home</Link></li>
					<li><Link to="About/Games">Games</Link></li>
					<li><Link to="About/Tools">Software/Tools</Link></li>
					<li><Link to="About/Tutorials">Tutorials</Link></li>
					<li><Link to="About/Resume">Resume</Link></li>
					</ul>
				</nav>

			</section>
		)
	}

export default Navbar