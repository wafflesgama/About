import React from 'react'
import MiniEntry from '../components/MiniEntry'
import "./DefaultPage.css"

function RepaintingCreation() {
    return (
        <div class="container mt-3">
            <div class="row">
                <div class="col-4 col-12-medium">

                    {/* <section class="box">
                    <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
                    <header>
                        <h3>Sed etiam lorem nulla</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit
                        adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                        <a href="#" class="button alt">Magna sed taciti</a>
                    </footer>
                </section> */}
                    <MiniEntry 
                    thumbnail="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png"
                    title= "titlee"
                    desc="aaaa"
                    link="/About/repaintingrecreation"
                    />
                </div>

                <div class="col-8 col-12-medium imp-medium">

                    <article class="box post">
                        <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                        <header>
                            <h2>Repainting Creation</h2>
                            <p>A computer vision & generative art project</p>
                        </header>

                        <img className='bannerArticle'
                            src="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/title.png" />
                        <p>
                            The following work was developed focusing on the Generative Art and Computer Vision
                            fields and belongs to the first deliverable project of the SDI curricular unit in the
                            FEUP's Master of Multimedia.
                        </p>
                        <section>
                            <h3>Context of the work</h3>
                            <br />
                            <p>
                                A concept that is usually misunderstood is the originality involved in a certain
                                artwork. As stated in the book "Steal Like an Artist" [1], nothing comes from
                                nowhere. Every artist has their different set of references, sources of inspiration
                                and backgrounds. so therefore, all creative work builds on what came before. An
                                oversimplified conclusion of this is that nothing, even the first or the most known
                                artwork, is truly original.
                            </p>
                            <p>
                                But when it comes to a digital generative art system how are these references
                                translated? Are they just a mere numeric pattern, hardcoded or learnt with a complex
                                deep learning system? Are they just the seed of a seemingly random numeric pattern?
                                The answer may not be clear.
                            </p>
                            <p>
                                Furthermore, considering an interactive digital system, another question could be
                                raised. If a subject of interaction could influence the machine art generation
                                process and if the starting point of this process was a pre-known artwork, at what
                                point is the new generated piece considered itself original?
                            </p>
                            <p>
                                With the intent of answering this question, the project denominated by "Repainting
                                Creation" was developed. This project aims to re-shape some of the most famous
                                classical paintings throughout the history (ex: Girl with a Pearl Earring by
                                Vermeer). Using the subject's facial movements, he can influence the artwork motifs
                                and expressions. The subject also dictates when the artwork is completed and, at the
                                end, is presented with all its creations.
                            </p>
                        </section>
                        <section>
                            <h3>Technologies</h3>
                            <br />
                            <p>
                                The core of this project was developed using the Unity game engine and all logic was
                                written using the C# programming language. Some external libraries were also used to
                                suit the needs for this system.
                            </p>
                            <p>
                                For the animated particles that can be seen throughout the demo, the Visual Effects
                                Graph package was used. It provides high fidelity visuals while maintaining a good
                                performance. Since in the simulation the particles behavior is processed on a GPU
                                thread, it provides faster calculation times and handles well a large number of
                                particles without compromising performance.
                            </p>
                            <p>
                                For the facial recognition an in-engine integration of library OpenCV was used. It
                                also provides some implementation examples for the facial features detection and
                                tracking, using the standard 68 points facial landmark model.</p>
                            <h3>System Behaviour</h3>
                            <br />

                            <p>
                                This system was designed to be interacted by one subject at time. Although the main
                                focus of this system is the art generation itself, there three distinct scenes
                                during the experience: the tutorial, the art generation and the gallery
                                presentation.
                            </p>
                            <img  className='bannerArticle'
                                src="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/introScene.png" />
                            <p>
                                <b>Tutorial scene -</b> In this scene the user is presented with a representation of his face on a virtual space and its facial position and rotation are translated into the camera view, much like in a VR experience. The purpose is for the user to self-calibrate and learn about all the possible controls available.
                            </p>
                            <img className='bannerArticle'
                                src="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/allPaintings.png" />
                            <p>
                                <b>Art Generation scene -</b> After the introductory scene the player is presented with a series of random paintings, on at a time. Each painting is formed by a collection of colored particles, corresponding to the pixel data of the original image source on a scale of 1:1 (each pixel has its equivalent particle). Using the previously learnt controls, the subject can influence the particle system with its face XYZ position and rotation. To finish a panting the user must hold the space key.
                            </p>

                            <img  className='bannerArticle'
                                src="https://github.com/wafflesgama/Repainting-Creation/raw/main/ReadmeFiles/gallery.png" />
                            <p>
                                <b>Gallery scene -</b> After the third completed painting this scene begins, and it displays all the works done by the subject on a painting gallery/exhibition. The objective for this final scene is to make the subject reflect on the work accomplished.
                            </p>

                            <br />
                            <a target="_blank" href="https://github.com/wafflesgama/Repainting-Creation/"   class="button alt fullWidth">
                                <i class="fab fa-github mr-1"></i>
                                GitHub Project</a>
                            <br />
                            <br />
                            <a href="https://github.com/wafflesgama/Repainting-Creation/releases/download/v1/Repainting_Creation_v1.zip" class="button fullWidth">
                                <i class="fas fa-folder mr-1"></i>
                                Project Demo</a>
                        </section>
                    </article>

                </div>
            </div>
        </div>

    )
}

export default RepaintingCreation