import React from 'react'
import MiniEntry from '../../../components/MiniEntry'


import data from '../../../assets/minientries_games.json'
import { removeItemsWithMatchingLink, shuffleArray } from '../../../assets/utils.js'

function LifeSwing() {
    const filteredData = removeItemsWithMatchingLink(data, window.location.href);
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
                            <img className="halfWidth roundCorners" src="https://img.itch.zone/aW1nLzc3NTExNTYucG5n/original/poZ%2Fn5.png" />
                            <p>An adventure 3D Platformer university game</p>
                        </header>

                        <iframe className='roundCorners fullWidth' width="560" height="315"
                            src="https://www.youtube.com/embed/HzSUzzmvWxc" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                        <p>
                            Doriano is a 4-week demo made by Guilherme Gama for the Digital Games' curricular unit
                            integrated into the Master of Multimedia, in FEUP.
                        </p>

                        <br />
                        <h2>Story</h2>
                        <p>
                            Doriano, the protagonist, is stranded on this unknown island with his captain and
                            the rest of his crew. The ship has been broken with the storm they faced and now
                            your task is to help finding the remaining resources to repair it and continue with
                            their journey.
                        </p>

                        <br />
                        <h2>Controls</h2>
                        <p>
                            <b> Keyboard/Mouse -</b> WASD to move, Mouse to look, SPACE to jump, LMB to interact and
                            attack
                            <br />
                            <b> Controller -</b> L analog to move, R analog to look, X/A button to jump, O/B to
                            interact and
                            attack
                        </p>

                        <img className='fullWidth roundCorners'
                            src="https://img.itch.zone/aW1hZ2UvMTMzMjU3OC83NzUxMzI3LmdpZg==/original/RKPL5Q.gif" />


                        <p>
                            All the gameplay and game scripts were implemented from scratch by the developer,
                            featuring some built-in and external packages like: Cinemachine, New Input System,
                            TextMeshPro, Timeline, DOT Tween. For the visuals the Universal Pipeline Shader Graph
                            and VFX Graph packages were used.
                        </p>
                        <section>
                            <br />
                            <h2>Project Details</h2>
                            <p>
                                All the gameplay and game scripts were implemented from scratch by the developer,
                                featuring some built-in and external packages like: Cinemachine, New Input System,
                                TextMeshPro, Timeline, DOT Tween. For the visuals the Universal Pipeline Shader
                                Graph and VFX Graph packages were used.
                            </p>

                            <img className='fullWidth roundCorners'
                                src="https://img.itch.zone/aW1hZ2UvMTMzMjU3OC83NzUxNTIzLmdpZg==/347x500/OSUk8j.gif" />


                            <br />
                            <a target="_blank" href="https://github.com/wafflesgama/Repainting-Creation/"
                                className="fullWidth button alt">
                                <i className="fab fa-itch-io mr-1"></i>
                                Itch.io Page</a>
                            <br />
                            <br />
                            <div className='fullWidth d-flex-inline'>
                                <a href="https://w3g3a5v6.ssl.hwcdn.net/upload2/game/1332578/5004285?GoogleAccessId=uploader@moonscript2.iam.gserviceaccount.com&Expires=1646752072&Signature=I9n1L70yAw%2FsDSmn%2F5wXaTKwa%2F2XR9hT0j3snvs9qHyW9Cv7MdULgHAmnOSUd9kEWpi1r2RhofCWAynI37kYU534PG2iF9oVkFNRwFiAmxhcY1GI2Z6yu99Ajv8WPjfekxxSAS465aFgnS4dWKFlY2J82YWYO%2Fo%2FtfSutUeHCZ4%2B%2FTW7eOfxPJOulqFVtKBkGytIhpM5BWtlIgDT%2BrHqxXFCdHRxA5MBymwPoyMlW%2FoguRZc9%2Fqr5FdU1YXgRDM8PVK5nGlmGmCbrvL7QevZFXRDnHZPShw7X9mqjXwLuORBGAEsjTqcOM8jaPxxV0hDQ17dKMv4ag5MEeJ3gWE4ng==&hwexp=1646752332&hwsig=c4bbf71044812706bf3b841b0e2cb58e"
                                    className="mr-3 fullWidth button">
                                    <i className="fab fa-windows mr-1"></i>
                                    Windows Build v1.0</a>
                                <a href="https://w3g3a5v6.ssl.hwcdn.net/upload2/game/1332578/5004229?GoogleAccessId=uploader@moonscript2.iam.gserviceaccount.com&Expires=1646752386&Signature=B%2FJqLC%2Blt3fzbk8%2BnFWURs8NUq7e0OmVKc3mRpga03s%2F6tfIU9cRHAjthQ4Zc%2BpsgoxRuvppbsb1z%2BcYy%2FyP2OTQif%2B6iMfyZe1mS7p%2FbCARtZYlKcR11wGc1bGyFKi%2FN20bMlGQthFDYM1J9cngkuv2YRFn2SItl25E4LwXkpMLb%2BOdxTh6HRzFt7se2wvs2AuNtFvML3CV4HnoLCwGSZ9uw0xefYQlUXcKLqFjKDZclIuFG%2Bl5qZQqmXbMhcnD57JSNtjjlJRFAIMKTn257M8yD3FjKWWebZy2mH3lpqLkL8KG6keBDx3fbZh97oMAC8LkK7H5AnG0J20GddIwqQ==&hwexp=1646752646&hwsig=967166e3d84de0cf0386a288e3b04129"
                                    className=" fullWidth button">
                                    <i className="fab fa-apple mr-1"></i>
                                    Mac Build v1.0</a>
                            </div>
                        </section>
                    </article>

                </div>
            </div>
        </div>
    )
}

export default LifeSwing