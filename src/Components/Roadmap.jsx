import React from 'react'
import '../Css/Roadmap.css'


function Roadmap() {
    return (
        <>
         
            <div  className="container">
            {/* //  style={{ backgroundColor: "rgb(38, 38, 38)" }} */}
                <h1 className='roadmap text-center' style={{ fontFamily: "sans-serif" }}>OUR ROADMAP</h1>
                <div className="container bootdey">
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 id='phase' className='text-center'>Phase 1</h5>
                                    {/* <!-- Timeline start --> */}
                                    <div className="timeline">
                                        <div className="timeline-row">
                                            <div className="timeline-time" >
                                                {/* <img src={} alt="noimg" /> */}
                                                {/* 7:45PM<small>May 21</small> */}
                                            </div>
                                            <div className="timeline-dot fb-bg"></div>
                                            <div className="timeline-content">
                                                {/* <i className="fa fa-map-marker"></i> */}
                                                <h2 className='headingname'>1</h2>
                                                <p>Idea Creation , deploy. </p>
                                                {/* <div className="">
                                                    <span className="badge badge-light">Design</span>
                                                    <span className="badge badge-light">Admin</span>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                8:00 AM<small>May 18</small>
                                            </div> */}
                                            <div className="timeline-dot green-one-bg"></div>
                                            <div className="timeline-content green-one">

                                                <h2 className='headingname'>2</h2>
                                                <p>
                                                    Market warm-up, early business cooperation.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                7:25 PM<small>May 6</small>
                                            </div> */}
                                            <div className="timeline-dot green-two-bg"></div>
                                            <div className="timeline-content green-two">

                                                <h2 className='headingname'>3</h2>
                                                <p className='no-margin'>launch website, twitter, telegram, e.t.c.</p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                3:55 PM<small>Apr 26</small>
                                            </div> */}
                                            <div className="timeline-dot green-three-bg"></div>
                                            <div className="timeline-content green-three">

                                                <h2 className='headingname'>4</h2>
                                                <p>
                                                    IEO on tier A CEX & listing.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                5:24 PM<small>Apr 12</small>
                                            </div> */}
                                            <div className="timeline-dot green-four-bg"></div>
                                            <div className="timeline-content green-four">

                                                <h2 className='headingname'>5</h2>
                                                <p className="no-margin">10,000 telegram members.</p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                11:25 AM<small>Apr 19</small>
                                            </div> */}
                                            <div className="timeline-dot teal-bg"></div>
                                            <div className="timeline-content teal">
                                                <h2 className="headingname">6</h2>
                                                <p className="no-margin">listing on pancakeswap.</p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                12:30 PM<small>May 25</small>
                                            </div> */}
                                            <div className="timeline-dot sea-green-bg"></div>
                                            <div className="timeline-content sea-green">

                                                <h2 className="headingname">7</h2>
                                                <p>Apply for listing on Coingecko.</p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                12:30 PM<small>May 25</small>
                                            </div> */}
                                            <div className="timeline-dot sea-green-bg"></div>
                                            <div className="timeline-content sea-green">

                                                <h2 className="headingname">8</h2>
                                                <p>Apply for listing on Coinranking.</p>

                                            </div>
                                        </div>
                                        <div className="timeline-row">
                                            {/* <div className="timeline-time">
                                                12:30 PM<small>May 25</small>
                                            </div> */}
                                            <div className="timeline-dot sea-green-bg"></div>
                                            <div className="timeline-content sea-green">

                                                <h2 className="headingname">9</h2>
                                                <p>Thirdparty audit</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
            )
}

            export default Roadmap
