import React from 'react'
import { Link as Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png

function MiniEntry(props) {
    let navigate = useNavigate();
    return (
        <div className="col-4 col-6-medium col-12-small">
            <section className="entry box" onClick={() => navigate(props.link)}>
                <a className="image featured"><img className="mini-thumb"
                    src={props.thumbnail} alt="" /></a>
                <header>
                    <h3>{props.title}</h3>
                </header>
                <p>{props.desc}</p>
                {/* <footer>
                <ul className="actions">
                    <li><Link to={props.link} className="button alt">Find out more</Link></li>
                </ul>
            </footer> */}
            </section>
        </div>
    )
}



export default MiniEntry