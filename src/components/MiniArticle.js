import React from 'react'
import { Link as Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MiniArticle(props) {
  let navigate=useNavigate();
  return (
    <section class="box">
    <a href="#" class="image featured"><img class="mini-thumb" src="images/pic08.jpg" alt="" /></a>
    <header>
      <h3>{props.title}</h3>
      <p>Posted {props.date}</p>
    </header>
    <p>{props.desc}</p>
    <footer>
      <ul class="actions">
        <li><Link to={props.link} class="button alt icon solid fa-file-alt">Continue Reading</Link></li>
      </ul>
    </footer>
  </section>
  )
}

export default MiniArticle