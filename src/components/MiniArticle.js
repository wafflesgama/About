import React from 'react'
import { Link as Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MiniArticle(props) {
    let navigate = useNavigate();
    return (
        <section className="box entry" >
            {/* <a href="#" className="image featured" > < img className="mini-thumb" src="images/pic08.jpg" alt="" /> </a> */}
            <header>
                <h3 > {props.title} </h3>
                <p > Posted {props.date} </p>
            </header> <p > {props.desc} </p> <footer>
                <ul className="actions" >
                    <li> <Link to={props.link}
                        className="button alt icon solid fa-file-alt" > Continue Reading </Link></li>
                </ul>
            </footer>
        </section>
    )
}

export default MiniArticle