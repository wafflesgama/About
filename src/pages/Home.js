import React from 'react'
import "./Home.css"
import MiniEntry from '../components/MiniEntry'
import MiniArticle from '../components/MiniArticle'

function Home() {
  return (
    <div>
      <section id="banner"></section>
      <section id="intro" class="container">
        <div class="row">
          <div class="col-4 col-12-medium">
            <section class="field first animate__animated animate__fadeInUp">
              <i class="icon solid featured fa-code"></i>
              <header>
                <h2>Software Developer</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
              <div>
                <img class='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/6132/6132221.png' />
                <img class='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/174/174854.png' />
                <img class='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
                <img class='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png' />
                <img class='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffile.wikipediam.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa3%2F.NET_Logo.svg%2F1200px-.NET_Logo.svg.png&f=1&nofb=1' />
              </div>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            <section class="field middle animate__animated animate__fadeInUp">
              <i class="icon solid featured alt fa-gamepad" a="/about"></i>
              <header>
                <h2>Game Developer</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
              <div>
                <img class='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5969/5969346.png' />
                <img class='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F134-1340346_transparent-unreal-logo-png-unreal-engine-icon-png.png&f=1&nofb=1  ' />
                <img class='fieldIcon' src='https://icons.iconarchive.com/icons/xenatt/the-circle/256/App-Blender-icon.png' />
                  <img class='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fopengl-1-logo-png-transparent.png&f=1&nofb=1' />
                  <img class='fieldIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3uwib8iif8w1p.cloudfront.net%2Fmegascans%2Ficons%2Fmixer_icon_2048_preview.png&f=1&nofb=1' />
                <img class='fieldIcon' src='https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Audacity-icon.png' />
              </div>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            <section class="field last animate__animated animate__fadeInUp">
              <i class="icon solid featured alt2 fa-paint-brush"></i>
              <header>
                <h2>Technical Artist</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
              <div>
                <img class='fieldIcon' src='https://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/256/Adobe-Ps-icon.png ' />
                <img class='fieldIcon' src='https://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/256/Adobe-Ai-icon.png' />
                <img class='fieldIcon' src='https://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/256/Adobe-Ae-icon.png' />
                <img class='fieldIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' />
              </div>
            </section>
          </div>
        </div>

      </section>


      <section id="main">
        <div class="container">
          <div class="row">
            <div class="col-12">

              <section>
                <header class="major">
                  <h2 class="bodyHeader">Recent Works</h2>
                </header>
                <div class="row">
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png"
                      title="Repainting Creation"
                      desc="A computer vision & generative art project using Unity and its Visual Effect Graph Package."
                      link="/About/repaintingcreation"
                    />
                  </div>
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1hZ2UvMTMzMjU3OC83NzUxMzI3LmdpZg==/original/RKPL5Q.gif"
                      title="Doriano"
                      desc="A 3D Platformer about finding hidden treasures in a unkown island,  made for FEUP's Digital Games Curricular Unit."
                      link="/About/doriano"
                    />
                  </div>

                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1nLzMyMjczNjkuZ2lm/347x500/Cgy2jp.gif"
                      title="LifeSwing"
                      desc="A 2D 1-bit Puzzle/Platformer. Also known as the winner entry for Level Up Game Jam 2019!"
                      link="/About/doriano"
                    />
                  </div>

                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/Soundtor/raw/main/ReadmeFiles/guipreview.gif  "
                      title="Soundtor"
                      desc="A generative audio system using Electron.js, Wekinator and Pure Data."
                      link="/About/doriano"
                    />
                  </div>

                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://github.com/wafflesgama/Improvitouch/raw/main/readmeAssets/demoVideo.gif"
                      title="Improvitouch"
                      desc="A Computer Audition & Generative Music Project made for mobile devices."
                      link="/About/doriano"
                    />
                  </div>

                  
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1nLzMyMjczNjkuZ2lm/347x500/Cgy2jp.gif"
                      title="LifeSwing"
                      desc="A 2D 1-bit Puzzle/Platformer. Also known as the winner entry for Level Up Game Jam 2019! 😁"
                      link="/About/doriano"
                    />
                  </div>

                  
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniEntry
                      thumbnail="https://img.itch.zone/aW1nLzMyMjczNjkuZ2lm/347x500/Cgy2jp.gif"
                      title="LifeSwing"
                      desc="A 2D 1-bit Puzzle/Platformer. Also known as the winner entry for Level Up Game Jam 2019! 😁"
                      link="/About/doriano"
                    />
                  </div>

                  {/* <div class="col-4 col-6-medium col-12-small">
                    <MiniArticle></MiniArticle>
                  </div>
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniArticle></MiniArticle>
                  </div>
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniArticle></MiniArticle>
                  </div>
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniArticle></MiniArticle>
                  </div>
                  <div class="col-4 col-6-medium col-12-small">
                    <MiniArticle></MiniArticle>
                  </div> */}
                </div>
              </section>

            </div>
            <div class="col-12">

              <section>
                <header class="major">
                  <h2 class="bodyHeader">The Blog</h2>
                </header>
                <div class="row">
                  <div class="col-6 col-12-small">
                    <MiniArticle
                      title="Aba"
                      date="31st Jan 2019"
                      desc="lorem ipsu danim dare tipo das judate dsa sda"
                      link="/About/repaintingrecreation"
                    />
                  </div>
                  <div class="col-6 col-12-small">
                    <section class="box">
                      <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
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
                        <ul class="actions">
                          <li><a href="#" class="button icon solid fa-file-alt">Continue
                            Reading</a></li>
                          <li><a href="#" class="button alt icon solid fa-comment">33 comments</a>
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