import React from 'react'
import MiniEntry from '../../components/MiniEntry'

function Improvitouch() {
    return (
        <div className="container mt-3">
            <div className="row">

                <div className="col-4 col-12-medium">
                    <header className="major">
                        <h2 className="bodyHeader">Related Works</h2>
                    </header>
                    <MiniEntry
                        thumbnail="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png"
                        title="titlee"
                        desc="aaaa"
                        link="/About/repaintingrecreation"
                    />
                    <MiniEntry
                        thumbnail="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png"
                        title="titlee"
                        desc="aaaa"
                        link="/About/repaintingrecreation"
                    />
                    <MiniEntry
                        thumbnail="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png"
                        title="titlee"
                        desc="aaaa"
                        link="/About/repaintingrecreation"
                    />
                </div>

                <div className="col-8 col-12-medium imp-medium">

                    <article className="box post">
                        <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                        <header>
                            <img className="halfWidth roundCornersshadow-light " src="https://i.imgur.com/UgNfW9y.png" />
                            <p>A Computer Audition & Generative Music Project made for mobile devices</p>
                        </header>


                        <h2>Context of the work</h2>
                        <p>
                            The following work was developed focusing on the Computer Audition and Generative Music Project fields and belongs to the second deliverable project of the SDI curricular unit in the FEUP’s Master of Multimedia.
                            <br />
                            When a professional instrument player performs an improvised melody, based on harmonic accompaniment, he tends to have some degree of logical abstraction. The rhythm, tonality and harmonic rules integrate part of set of tools that the artist can rely unconsciously. This level of abstraction really provides the player a freedom of expression while still maintaining the melody auditorily coherent.
                            <br />
                            This project aims to design a proof of concept that allows any average user, with no or a minimal background in music theory, to improvise along a melody. Providing the entitled freedom of musical expression.
                        </p>

                        <br />
                        <h2>Related works</h2>
                        Refraktions - Jason Snell “Refraktions”(Refraktions on the App Store, 2014) is an ios app that generates ambience MIDI sequences based on the user’s touch interaction. This app features eight concurrent MIDI tracks that can be manipulated individually. This collection of midi sequences is visually represented by circular shapes (to represent the loop time), light particles (to indicate the notes and accents played) and wave patterns (to represent the overall loop’s motifs). Since this app is an ios exclusive product and reports a good performance, it is very likely that it was developed natively in the Apple ecosystem, using the Swift programming language.

                        <img className='fullWidth roundCorners'
                            src="https://github.com/wafflesgama/Improvitouch/raw/main/readmeAssets/Aspose.Words.b076e50b-cfe5-42d3-a6fc-bff1d9a7ff36.003.png" />

                        <iframe className='fullWidth roundCorners' src="https://player.vimeo.com/video/664212521?h=f2fa46042a" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <h2>Technical Architecture</h2>
                        <p>
                            The core of this project was developed using the p5.js JavaScript library with the p5.sound submodule. All the audio files including the audio loop and the set of individual notes were recorded using Audacity and generated in Soundtrap(Soundtrap - Wikipedia, 2021) online DAW (Digital Audio Workstation - Wikipedia, 2021).
                            <br />
                            Figure SEQ Figure \ ARABIC 3 - Screenshot of the midi recordings inside the DAW*

                            <img className='fullWidth roundCorners'
                                src="https://github.com/wafflesgama/Improvitouch/raw/main/readmeAssets/Aspose.Words.b076e50b-cfe5-42d3-a6fc-bff1d9a7ff36.007.png" />

                            The main concept behind this system is that a simple chord projection plays in the background, continuously in loop, and the user can improvise along a melody with the smartphone touch sensors, using a pre-defined scale of notes.
                            <br />
                            For the implementation, there are two main features: The notes’ visual representation, and the Multi touch note-playing behavior. The notes visual representation is simply an animated image (representing a note) which spawns at the touch location, whenever a finger touches or slides into a new note. The note-playing behavior accounts for multiple touches and for hold and sliding scenarios without playing the same note repeatedly. The valid touches are assigned to their corresponding note based on the touch Y position on the screen.

                            <img className='fullWidth roundCorners'
                                src="https://github.com/wafflesgama/Improvitouch/raw/main/readmeAssets/Aspose.Words.b076e50b-cfe5-42d3-a6fc-bff1d9a7ff36.009.png" />

                            Figure 2 – Two snippets of the system script: Visual particle’s behavior (left); Note playing behavior (right)
                        </p>

                        <section>
                            <br />
                            <h2>References</h2>
                            <p>
                                Digital audio workstation - Wikipedia. (2021). https://en.wikipedia.org/wiki/Digital\_audio\_workstation
                                <br />
                                Refraktions on the App Store*. (2014). https://apps.apple.com/us/app/refraktions/id866134037#?platform=iphone
                                <br />
                                Soundtrap - Wikipedia. (2021). https://en.wikipedia.org/wiki/Soundtrap
                            </p>

                            <br />
                            <a target="_blank" href="https://github.com/wafflesgama/Soundtor/" className="button alt fullWidth">
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

export default Improvitouch