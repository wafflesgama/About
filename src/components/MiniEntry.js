import React from 'react'
import { Link as Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png

function MiniEntry(props) {
    let navigate=useNavigate();
    return (
        <section class="entry box" onClick={()=> navigate(props.link)}>
            <a class="image featured"><img class="mini-thumb"
                src={props.thumbnail} alt="" /></a>
            <header>
                <h3>{props.title}</h3>
            </header>
            <p>{props.desc}</p>
            {/* <footer>
                <ul class="actions">
                    <li><Link to={props.link} class="button alt">Find out more</Link></li>
                </ul>
            </footer> */}
        </section>
    )
}



export default MiniEntry