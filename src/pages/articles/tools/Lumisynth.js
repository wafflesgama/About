import React from 'react'
import MiniEntry from '../../../components/MiniEntry'


import data from '../../../assets/minientries_tools.json'
import {removeItemsWithMatchingLink, shuffleArray} from '../../../assets/utils.js'

function Lumisynth() {
    const filteredData = removeItemsWithMatchingLink(data,window.location.href);
    const shuffledData = shuffleArray(filteredData);
    const firstSixItems = shuffledData.slice(0, 3);
    return (
        <div className="container mt-3">
            <div className="row">

            <div className="col-4 col-12-medium">
                    <header className="major">
                        <h2 className="bodyHeader">Related Works</h2>
                    </header>
                    {firstSixItems.map((x, i) => <MiniEntry thumbnail={x.thumbnail} title={x.title} desc={x.desc} link={x.link} />)}

                </div>

                <div className="col-8 col-12-medium imp-medium">

                    <article className="box post">
                        <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                        <header>
                            <img className="halfWidth roundCorners back-black shadow-light " src="https://github.com/wafflesgama/LumiSynth/blob/main/ReadmeFiles/Logo2.png?raw=true" />
                            <p>A MIDI note-visualizer using Unity Visual Effects Graph</p>
                        </header>


                        <h2>About</h2>
                        <p>
                            This project was created with the intention of simulating the experience of people
                            who suffer from a neurological condition called synesthesia. By definition, synesthesia is the
                            condition whereby one can experience the same sensation through more than one sense. So a
                            person who hears a sound will automatically associate it with an image, colour, or shape. It
                            may be that other senses are related to this condition, such as people who associate the taste
                            of a specific food with a geometric shape.
                            <br />
                            In the human experience, almost everyone is capable of associating senses with
                            memories. It is common to hear testimonials of subjects associating the taste of food with a
                            loved one, for example. The difference between the association of the senses with affective
                            memories and the association of the synesthesia senses lies in the way images are created in
                            human consciousness.
                            <br />
                            The main object of this project is the correlation between the visual and auditory
                            senses through the association between colours and sounds. Its development consists of a
                            direct correlation between the musical language (musical notes) and human visual systems.
                            This theme is relevant not only because it shows how vision and hearing can be connected,
                            but it also brings up issues such as the accessibility of the music medium. By allowing users
                            to experience a musical piece through a new visual perspective, including people who do not
                            suffer from synesthesia in the synesthetic world view.

                        </p>

                        <img className='fullWidth roundCorners'
                            src="https://github.com/wafflesgama/LumiSynth/blob/main/ReadmeFiles/inaction.png?raw=true" />


                        <br />
                        <h2>Demo</h2>
                        Available for Windows x86/x64

                        <iframe className='fullWidth roundCorners' src="https://player.vimeo.com/video/675682809" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <p>
                            Although this project cannot translate in a literal way the experience of someone who
                            has synesthetic conditions, since it projects the images associated with sounds in an interface
                            that will be perceived and processed by the human eye through the retina, it fulfils its
                            function in the sense of providing an experience as close as possible to the association
                            between colours and sounds in the human brain.
                            <br />
                            Thus, when watching the demonstration of the project, it is possible to notice that
                            when the notes are played, the colours are presented softly, at an appropriate time. It is also
                            possible to notice that we chose to use pastel colours to represent the notes played on the
                            piano. These details were thought of so that the audience watching the presentation would not
                            be flooded with information, both visual and audible. The idea is to immerse the spectators in
                            the experience little by little so that even without realising it they are totally immersed.
                        </p>
                        <h2>Technical Overview</h2>
                        <p>
                            This project makes use of Unity’s graphical capabilities.
                            This multi-platform game development tool (Unity Technologies, 2022), also commonly
                            referred to as a "Game Engine", is software that allows high-end developers to create games
                            and non-gaming interactive interfaces, using the C# programming language. The choice of
                            using this software to develop our project was based on the fact that it is easy to understand
                            and quite versatile. Moreover, in the context of the Masters in Multimedia, it is important to
                            develop skills focused on the use of Unity, so this project is also connected to the other
                            projects we developed in other disciplines of the referred Masters.
                            It is important to note that additional libraries were used such as the built-in “Visual
                            Effect Graph” package (Unity Technologies, 2022) for the visual generation and the
                            open-source framework “Minis” (Takahashi, 2021) for MIDI input processing and
                            management. These resources were used in order to create an experience that was smooth to
                            the viewer.
                        </p>

                        <img className='fullWidth roundCorners'
                            src="https://github.com/wafflesgama/LumiSynth/blob/main/ReadmeFiles/diagram.png?raw=true" />

                        <section>
                            <br />
                            <h2>Particles Behaviour Implementation</h2>
                            <p>
                                The system receives as input any of the 88 possible piano notes through one of the 4
                                MIDI channels available. Based on the respective note/key index, the system calculates its
                                respective visual position, by mimicking the corresponding note’s placement, on a physical
                                keyboard.
                                <br />
                                The colour computation is also based on the respective key's index. Using the HSV
                                colour model the Hue parameter loops around a piano octave (0 - for the C/Dó note and 360-
                                for the B/Si note) while the remaining Value and Saturation parameters remain fixed, as
                                represented in the image below.
                            </p>
                            <img className='fullWidth roundCorners'
                                src="https://github.com/wafflesgama/LumiSynth/blob/main/ReadmeFiles/vfx.png?raw=true" />
                            <p>
                                The preceding figure captures the particles' spawn and initialization defining their inherent
                                properties such as position and colour. At the top, we can see the position addressed based on
                                the absolute key's index (0-87). Below, the colour is calculated and assigned based on the
                                key's relative index (0-11) and dividing it by 12 since Unity's approach for HSV colour space
                                has been (0-1,0-1,0-1) and not the standard (0-360,0-1,0-1).
                            </p>
                            <img className='fullWidth roundCorners'
                                src="https://github.com/wafflesgama/LumiSynth/blob/main/ReadmeFiles/particles.png?raw=true" />
                            Different particle textures resulting in different visual compositions 
                            <b>
                              (final version at bottom left)
                            </b>
                            <br />
                            <br />
                            <br />
                            <a target="_blank" href="https://github.com/wafflesgama/LumiSynth/" className="button alt fullWidth">
                                <i className="fab fa-github mr-1"></i>
                                GitHub Project</a>
                            <br />
                            <br />
                            <div className='fullWidth d-flex-inline'>
                                <a href="https://github.com/wafflesgama/Soundtor/releases/download/windows_x86_v1.02/Soundtor-win32-x86.zip"
                                    className="mr-3 fullWidth button">
                                    <i className="fab fa-windows mr-1"></i>
                                    Windows Build v1.02</a>
                                <a href="https://github.com/wafflesgama/Soundtor/releases/download/v1.0.2/Soundtor-mas-arm64.zip"
                                    className=" fullWidth button">
                                    <i className="fab fa-apple mr-1"></i>
                                    Mac Build v1.02</a>
                            </div>
                        </section>
                    </article>

                </div>
            </div>
        </div>
    )
}

export default Lumisynth