import React from 'react'
import MiniEntry from '../../../components/MiniEntry'


import data from '../../../assets/minientries_games.json'
import {removeItemsWithMatchingLink, shuffleArray} from '../../../assets/utils.js'

function SpaceDroid() {
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
                            <img className="halfWidth roundCorners " src="https://i.imgur.com/sy6s8Gx.png" />
                            <p>A space themed endless-scroller available in Google Play</p>
                        </header>

                        <h2>Story</h2>
                        <p>
                            We need your help to reach what's never been reached before!
                            <br />
                            Our latest creation needs a guide, a pilot, a master to help travel beyond what lies beyond our planet.
                            On your journey to explore all the planets be sure to collect all the Bolts you can find, as you can upgrade the Droid's abilities and features.
                        </p>

                        <h2>Controls</h2>
                        <p>
                            <b> Tap up/down -</b> Simple boost move
                            <br />
                            <b> Hold & release up/down -</b> Charge boost move
                        </p>

                        <br />
                        <h2>Screenshots</h2>
                        <div className='d-flex-inline'>
                            <img className='halfWidth roundCorners mr-1'
                                src="https://img.itch.zone/aW1hZ2UvNTY0NTM3LzI5NjQ3MDIucG5n/original/mXdABl.png" />

                            <img className='halfWidth roundCorners'
                                src="https://img.itch.zone/aW1hZ2UvNTY0NTM3LzI5NjQ3MDQucG5n/original/aeueWE.png" />
                        </div>
                        <div className='d-flex-inline'>
                            <img className='halfWidth roundCorners mr-1'
                                src="https://img.itch.zone/aW1hZ2UvNTY0NTM3LzI5NjQ3MDcucG5n/original/QEqqAS.png" />

                            <img className='halfWidth roundCorners'
                                src="https://img.itch.zone/aW1hZ2UvNTY0NTM3LzI5NjQ3MDMucG5n/original/YHxmah.png" />
                        </div>
                        <div className='d-flex-inline'>
                            <img className='halfWidth roundCorners mr-1'
                                src="https://img.itch.zone/aW1hZ2UvNTY0NTM3LzI5NjQ3MDUucG5n/original/QeR23U.png" />

                            <img className='halfWidth roundCorners'
                                src="https://img.itch.zone/aW1hZ2UvNTY0NTM3LzI5NjQ3MDYucG5n/original/1Fgk0G.png" />
                        </div>

                        <br />

                        <h2>Demo</h2>
                        Available for Android only

                        <iframe className='fullWidth roundCorners'  src="https://player.vimeo.com/video/876168261" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <br />

                        <section>
                            <br />
                            <h2>Project Details</h2>
                            <p>
                                The project was developed using Unity 2019 and the 3D assets were made from scratch using Blender and exported as flipbook pre-rendered animations.
                            </p>

                            <br />
                            <div className='fullWidth d-flex-inline'>
                                <a href="https://play.google.com/store/apps/details?id=com.UpsideDawnStudios.ProductName"
                                    className="mr-3 fullWidth button">
                                    <i className="fa-brands fa-google-play mr-1"></i>
                                    SpaceDroid</a>
                                <a href="https://play.google.com/store/apps/details?id=com.UpsideDawnStudios.SpaceDroidPro"
                                    className=" fullWidth button">
                                    <i className="fa-brands fa-google-play mr-1"></i>
                                    SpaceDroid Pro</a>
                            </div>
                            <a className="mt-2 fullWidth button" href="https://apkcombo.com/spacedroid/com.UpsideDawnStudios.ProductName/"
                                >
                                <i className="fa-brands fa-android mr-1"></i>
                                SpaceDroid - Mirror</a>

                        
                        </section>
                    </article>

                </div>
            </div>
        </div>
    )
}

export default SpaceDroid