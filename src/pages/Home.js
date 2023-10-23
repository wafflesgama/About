import React from 'react'
import "./Home.css"
import MiniEntry from '../components/MiniEntry'
import data_tools from '../assets/minientries_tools.json'
import data_games from '../assets/minientries_games.json'
let mergedData = [...data_tools, ...data_games];

function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const shuffledData = shuffleArray(mergedData);
const firstSixItems = shuffledData.slice(0, 6);

function Home() {
  return (
    <div>
      <section id="banner"></section>
      <section id="intro" className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <section className="field first animate__animated animate__fadeInUp">
              <i className="icon solid featured fa-code"></i>
              <header>
                <h2>Software Developer</h2>
              </header>
              <p>As Software Dev & Full-stack Engineer I enjoy blueprinting and implementing Web/Desktop Apps using C#, JS/TS and C++</p>
              <div>
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/6132/6132221.png' />
                <img className='fieldIcon' src='https://i.imgur.com/Fl5f1oQ.png' />
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png' />
                <img className='fieldIcon' src='https://cdn.bodanius.com/media/1/Z2I134749_arduino_x.png' />
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/174/174854.png' />
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
              </div>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="field middle animate__animated animate__fadeInUp">
              <i className="icon solid featured alt fa-gamepad" a="/about"></i>
              <header>
                <h2>Game Developer</h2>
              </header>
              <p>As a passionate Game Dev &  Designer I enjoy designing Video-Games, Game-Engine Tools and Interactive Experiences, using Unity and Unreal Engine</p>
              <div>
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5969/5969346.png' />
                <img className='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F134-1340346_transparent-unreal-logo-png-unreal-engine-icon-png.png&f=1&nofb=1  ' />
                <img className='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fopengl-1-logo-png-transparent.png&f=1&nofb=1' />
                <img className='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3uwib8iif8w1p.cloudfront.net%2Fmegascans%2Ficons%2Fmixer_icon_2048_preview.png&f=1&nofb=1' />
                <img className='fieldIcon' src='https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Audacity-icon.png' />
              </div>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="field last animate__animated animate__fadeInUp">
              <i className="icon solid featured alt2 fa-paint-brush"></i>
              <header>
                <h2>Technical Artist</h2>
              </header>
              <p>As a Graphic Designer & Technical Artist I enjoy creating aesthetic content for my professional and personal projects using Figma, Photoshop, Blender and many other tools</p>
              <div>
                <img className='fieldIcon' src='https://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/256/Adobe-Ps-icon.png ' />
                <img className='fieldIcon' src='https://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/256/Adobe-Ai-icon.png' />
                <img className='fieldIcon' src='https://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/256/Adobe-Ae-icon.png' />
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' />
                <img className='fieldIcon' src='https://icons.iconarchive.com/icons/xenatt/the-circle/256/App-Blender-icon.png' />
                <img className='fieldIcon' src='https://upload.wikimedia.org/wikipedia/commons/1/15/Houdini3D_icon.png' />
              </div>
            </section>
          </div>
        </div>

      </section>


      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <section>
                <header className="major">
                  <h2 className="bodyHeader">Recent Works</h2>
                </header>
                <div className="row">

                </div>
              </section>

            </div>
            <div className="col-12">

              <section>
                <div className="row">
                  {/* {data_games.map((x, i) => <MiniEntry thumbnail={x.thumbnail} title={x.title} desc={x.desc} link={x.link} />)} */}
                  {firstSixItems.map((x, i) => 
                  <MiniEntry thumbnail={x.thumbnail} title={x.title} desc={x.desc} link={x.link} />
                )}
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home