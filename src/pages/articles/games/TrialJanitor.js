import React from 'react'
import MiniEntry from '../../../components/MiniEntry'


import data from '../../../assets/minientries_games.json'
import {removeItemsWithMatchingLink, shuffleArray} from '../../../assets/utils.js'

function TrialJanitor() {
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
                        {/* <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a> */}
                        <header>
                            <img className="threeWidth roundCorners " src="https://i.imgur.com/8TkcvMw.png" />
                            <p>A 3D first-person Portal-like Puzzle Game.</p>
                        </header>

                        <h2>Story</h2>
                        <p>
                        In order for you to become a Janitor at FEUP  University it is required to pass a set of Trials that will test your skills  and aptitude. The goal is simple, guide the students to their the designated classroom. However you need to be able to accomplish this in the most extreme scenarios, such as laser walls, moving platforms and many other obstacles that  block the students' path. For this task a special set of tools will be handed to you:  the Cleanex-3000  equipped with  Portal Creation technology  and a Security Badge to open the locked doors.
                        </p>

                        <h2>Controls</h2>
                      <i>  Supports keyboard and most gamepads</i> 

                            <br />
                            <b> WASD  keys or Left Joystick</b> - Move
                            <br />
                            <b> LMB/ RMB or Left trigger/ Right trigger</b> - Create portals
                            <br />
                            <b> Space or South button</b> - Jump
                            <br />
                            <b> E / West button</b> - Interact with game objects
                            <br />
                        <br />
                        <h2>Screenshots</h2>
                        <div className='d-flex-inline'>
                            <img className='halfWidth roundCorners mr-1'
                                src="https://img.itch.zone/aW1hZ2UvMTQ3ODA3Ny84NjIzNDgyLnBuZw==/347x500/ZXGBJT.png" />

                            <img className='halfWidth roundCorners'
                                src="https://img.itch.zone/aW1hZ2UvMTQ3ODA3Ny84NjIzNDgzLnBuZw==/347x500/r3Tq9c.png" />
                        </div>
                        <div className='d-flex-inline'>
                            <img className='fullWidth roundCorners mr-1'
                                src="https://img.itch.zone/aW1hZ2UvMTQ3ODA3Ny84NjIzNDg4LnBuZw==/347x500/RBJHou.png" />
                        </div>

                        <br />
                        <br />

                        <h2>Gameplay</h2>

                        <iframe className='fullWidth roundCorners'  src="https://player.vimeo.com/video/698549857" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <br />

                        <section>
                            <br />
                            <h2>Project Details</h2>
                            <p>
                                The project was developed using Unity 2021 and remaining assets were made from scratch using Blender, Photoshop Figma and Mixamo.
                                This Unity project features additional packages including Shader Graph, Visual Effects Graph, New Input System, DOTween.
                            </p>

                            <h2>Development Screenshots</h2>
                        <div className='d-flex-inline'>
                            <img className='halfWidth roundCorners mr-1'
                                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFpZ3djaGF1MDU4eHJtOXlicTF2aXJ1NHI1NzNjeWl4dWd6MXF3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6x94qNcgVeP5zBVrS7/giphy.gif" />

                            <img className='halfWidth roundCorners'
                                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmtuc2huYmFsNDBmNHVqOXIxanFkemt0MmZhY293ZDFtamV3OTlsMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8yl4GChtB7Wki2YY6m/giphy.gif" />
                        </div>
                        <div className='d-flex-inline'>
                            <img className='halfWidth roundCorners mr-1'
                                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXRvNzBvamhsdzQ3ZzV6cHMxZG95YTNyaW8yZTJkMDczcTZ6aTl4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T4cJwTV26Zmy16MQaa/giphy.gif" />

                                 <img className='halfWidth roundCorners mr-1'
                                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDg3MW9rd2pwcmVyN2U5Z2N0c2hod3F4aXR5YWVlZXAwcWQ2Ymh1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TcSNrPoVPgIfrawlKP/giphy.gif" />
                        </div>

                            <br />
                            <a target="_blank" href="https://guilhermesgama.itch.io/trial-janitor"
                                className="fullWidth button alt">
                                <i className="fab fa-itch-io mr-1"></i>
                                Itch.io Page</a>
                            <br />
                            <br />
                            <div className='fullWidth d-flex-inline'>
                                <a href="https://w3g3a5v6.ssl.hwcdn.net/upload2/game/1478077/5596946?GoogleAccessId=uploader@moonscript2.iam.gserviceaccount.com&Expires=1697763541&Signature=Kpe7AljVAYRi%2By0eSa3PGrRXFj5%2B197cG5GEZZ5crqynJT0mvA0aDRf1itW9myDTS%2BP0XvZ%2F8DwyyCf6yywZFYGMumi%2BKW%2Bp9kzAN1iLKwHsVigXuQlxC9kZkKOZud%2FnCaKjCCNAHhIjBlyU3ASz4AkmZ8MErDoaVrFJebdsMU0YN2gHYRZivr%2Bni6gq5bN%2F3IT8uyzenMF8F%2BoCTe0o4mBC%2FibdncwCBmpaoeKUh765uUt1E2oE14OrOL6SfxbsP4j42KY8EN4OE631GtpCkS6AR0nzl7XHGmWdV3VSKiclAXMilCPiJlQ8YoPrp5YpJNLuN0kY1pgnhkxYvrXB7w==&hwexp=1697763801&hwsig=ab5c98226f1342bb3bb9e8bef539d91c"
                                    className="fullWidth button">
                                    <i className="fab fa-windows mr-1"></i>
                                    Windows Build v1.0</a>
                            </div>
                           
                        
                        </section>
                    </article>

                </div>
            </div>
        </div>
    )
}

export default TrialJanitor