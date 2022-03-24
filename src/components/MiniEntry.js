import React from 'react'
import { Link as Link } from 'react-router-dom';

// https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png

function MiniEntry(props) {
    return (
        <section class="entry box">
            <a href="articles/repainting.html" class="image featured"><img
                src={props.thumbnail} alt="" /></a>
            <header>
                <h3>{props.title}</h3>
            </header>
            <p>{props.desc}</p>
            <footer>
                <ul class="actions">
                    <li><Link to={props.link} class="button alt">Find out more</Link></li>
                </ul>
            </footer>
        </section>
    )
}



export default MiniEntry