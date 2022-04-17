import React from 'react'
import MiniEntry from '../components/MiniEntry'

function Doriano() {
    return (
        <div class="container mt-3">
            <div class="row">

                <div class="col-4 col-12-medium">
                    <header class="major">
                        <h2 class="bodyHeader">Related Works</h2>
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

                <div class="col-8 col-12-medium imp-medium">

                    <article class="box post">
                        <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                        <header>
                            <img class="halfWidth roundCorners back-black shadow-light " src="https://github.com/wafflesgama/Soundtor/raw/main/assets/full_logo_white.png" />
                            <p>A generative audio system using Electron.js, Wekinator and Pure Data</p>
                        </header>


                        <h2>About</h2>
                        <p>
                            Soundtor is a three layer system, that generates a playable MIDI instrument based on the user's inputs choices. Using a GUI (Electron app) the user chooses the desired sound properties from a set of predefined keywords. The subsequent layer (Wekinator app), it's pre-trained ML model translates the set of tags and outputs them into a larger set of data understandable by the final layer (Pure Data patch). This data patch manipulates sound waves’ properties such as pitch frequency, decay and allows the user to play with the generated soundwave by clicking on a virtual keyboard or through a MIDI input.
                           <br />
                            The connection between all layers are accomplished with Open Sound Control (OSC) through a UDP socket (Local Port 7001, Remote Port 8001)
                        </p>

                        <img className='fullWidth roundCorners'
                            src="https://github.com/wafflesgama/Soundtor/blob/main/ReadmeFiles/structure.png?raw=true" />


                        <br />
                        <h2>Demo</h2>
                        Available for Windows x86/x64 and Mac x64 and arm64

                        <iframe src="https://player.vimeo.com/video/664212521?h=f2fa46042a" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <h2>Instructions</h2>
                        <p>
                            The three processes (Electron app, Wekinator, Pure Data patch) must be initialized before manipulating the system. On the GUI (Electron) app, the user is presented with the home/main screen after the app is loaded, a white bar is the main focus on the screen, with the keywords (tags) above it. The user can then choose by selecting one or skip the category. The user must choose one of each color, adding up to a maximum of 5 and a minimum of 1 of each tag. Alternatively, by clicking on the “undo” button, the last chosen tag returns to the top and is removed from the input.
                            <br />
                            <br />
                            When the user chooses all the categories, the “Make it” button appears that is followed by a pentagram graph, as well as 5 different sliders, corresponding to the categories previously chosen. These sliders allow the user to freely adjust each category's values, generated by the corresponding tags. In the Pure Data patch, set the values for booth OSC ports (from Wekinator - default: 9001; and to App default: 7001), click “set” for each to connect. User can play keyboard notes with the resulting sound either by clicking on each note or by playing through MIDI input. Select the desired MIDI channel in the MIDI box. Additionally, the user can manipulate the values of the GUI sliders also by MIDI control change (controller number: fadder 1: 70, fadder 2: 71, fadder 3: 72, fadder 4: 73 and fadder 5: 74).
                        </p>

                        <img className='fullWidth roundCorners'
                            src="https://github.com/wafflesgama/Soundtor/raw/main/ReadmeFiles/guipreview.gif" />

                        <section>
                            <br />
                            <h2>Future Development</h2>
                            <p>
                                Users can write the desired description, using machine learning the text is converted to values. Any text to describe, no limit of parameters.
                                <br />
                                Incorporation of Pura Data patch inside the app;
                                <br />
                                VST version of the project;
                                <br />
                                MIDI control values increment and decrement values from faders (when using external MIDI controller, value is not updated when changing the patch, so when you change the patch and user controller, value starts from the position set to it before.
                            </p>

                            <br />
                            <a target="_blank" href="https://github.com/wafflesgama/Soundtor/"   class="button alt fullWidth">
                                <i class="fab fa-github mr-1"></i>
                                GitHub Project</a>
                            <br />
                            <br />
                            <div className='fullWidth d-flex-inline'>
                                <a href="https://github.com/wafflesgama/Soundtor/releases/download/windows_x86_v1.02/Soundtor-win32-x86.zip"
                                    class="mr-3 fullWidth button">
                                    <i class="fab fa-windows mr-1"></i>
                                    Windows Build v1.02</a>
                                <a href="https://github.com/wafflesgama/Soundtor/releases/download/v1.0.2/Soundtor-mas-arm64.zip"
                                    class=" fullWidth button">
                                    <i class="fab fa-apple mr-1"></i>
                                    Mac Build v1.02</a>
                            </div>
                        </section>
                    </article>

                </div>
            </div>
        </div>
    )
}

export default Doriano