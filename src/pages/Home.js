import React from 'react'
import "./Home.css"
import MiniEntry from '../components/MiniEntry'
import MiniArticle from '../components/MiniArticle'

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
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/174/174854.png' />
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
                <img className='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png' />
                <img className='fieldIcon' src='https://i.imgur.com/Fl5f1oQ.png' />
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
                <img className='fieldIcon' src='https://icons.iconarchive.com/icons/xenatt/the-circle/256/App-Blender-icon.png' />
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
                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/wip2.gif"
                      title="Repainting Creation"
                      desc="A computer vision & generative art project using Unity and its Visual Effect Graph Package."
                      link="/About/repaintingcreation"
                    />
                  </div>
                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1hZ2UvMTMzMjU3OC83NzUxMzI3LmdpZg==/original/RKPL5Q.gif"
                      title="Doriano"
                      desc="A 3D Platformer about finding hidden treasures in a unknown island,  made for FEUP's Digital Games Curricular Unit."
                      link="/About/Doriano"
                    />
                  </div>

                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1nLzMyMjczNjkuZ2lm/347x500/Cgy2jp.gif"
                      title="LifeSwing"
                      desc="A 2D 1-bit Puzzle/Platformer. Also known as the winner entry for Level Up Game Jam 2019!"
                      link="/About/lifeswing"
                    />
                  </div>

                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/Soundtor/raw/main/ReadmeFiles/guipreview.gif  "
                      title="Soundtor"
                      desc="A generative audio system using Electron.js, Wekinator and Pure Data."
                      link="/About/soundtor"
                    />
                  </div>

                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/Improvitouch/raw/main/readmeAssets/demoVideo.gif"
                      title="Improvitouch"
                      desc="A Computer Audition & Generative Music Project made for mobile devices."
                      link="/About/doriano"
                    />
                  </div>


                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/LumiSynth/blob/main/ReadmeFiles/wip2.gif?raw=true"
                      title="Lumisynth"
                      desc="A 2D 1-bit Puzzle/Platformer. Also known as the winner entry for Level Up Game Jam 2019! 😁"
                      link="/About/Lumisynth"
                    />
                  </div>


                  <div className="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1nLzMyMjczNjkuZ2lm/347x500/Cgy2jp.gif"
                      title="SpaceDroid"
                      desc="A 2D 1-bit Puzzle/Platformer. Also known as the winner entry for Level Up Game Jam 2019! 😁"
                      link="/About/SpaceDroid"
                    />
                  </div>
                </div>
              </section>

            </div>
            <div className="col-12">

              <section>
                <header className="major">
                  <h2 className="bodyHeader">The Blog</h2>
                </header>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <MiniArticle
                      title="Aba"
                      date="31st Jan 2019"
                      desc="lorem ipsu danim dare tipo das judate dsa sda"
                      link="/About/repaintingrecreation"
                    />
                  </div>
                  <div className="col-6 col-12-small">
                    <section className="box">
                      <a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
                      <header>
                        <h3>Aptent veroeros aliquam</h3>
                        <p>Posted 45 minutes ago</p>
                      </header>
                      <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros
                        lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae
                        mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos lorem ipsum dolor sit amet.</p>
                      <footer>
                        <ul className="actions">
                          <li><a href="#" className="button icon solid fa-file-alt">Continue
                            Reading</a></li>
                          <li><a href="#" className="button alt icon solid fa-comment">33 comments</a>
                          </li>
                        </ul>
                      </footer>
                    </section>
                  </div>
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