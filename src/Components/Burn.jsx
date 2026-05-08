import React from 'react'
import bg from '../Assets/burnimg.jpg';
import '../Css/burn.css'

function Burn() {
    return (
        <>
            <div id="back" style={{ backgroundImage: `url(${bg})` }}>

                <div className='container contain'>

                    <div className="row">

                        <h5 id="text_burn" className='display-1 text-center text-white'>
                            SUKUYANA BURN DATES
                        </h5>

                        <div className="col-lg-12">
                            <div className="p-3 p-md-5 mt-4 text-center">

                                <p className='line1 text-white'>
                                    This is the link we provide for transparency to our community.
                                    Check it out from bscscan.com website!
                                </p>

                                <a
                                    className="burnbutton"
                                    href='https://bscscan.com/token/0x485f66f20f6732017345ff3437377ec84ea75039?a=0x000000000000000000000000000000000000dead'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className="burndetails btn" type="submit">
                                        Burn Details
                                    </button>
                                </a>

                                <br /><br />

                                <p className='line1'>
                                    SUKUYANA (SNA) will burn 499 trillion tokens,
                                    which is 50% of its max supply.
                                </p>

                                {/* 🔥 Burn Boxes */}
                                <div className="burn-box-wrapper">

                                    {/* Box 1 */}
                                    <div className="burn-box">
                                        <div className="fire">🔥</div>

                                        <h2 className="burn-percent burn-yellow">
                                            45%
                                        </h2>

                                        <p className="burn-label">
                                            Already Burned
                                        </p>
                                    </div>

                                    {/* Box 2 */}
                                    <div className="burn-box">
                                        <div className="fire">🔥</div>

                                        <h2 className="burn-percent burn-green">
                                            5%
                                        </h2>

                                        <p className="burn-label">
                                            Scheduled Burns
                                        </p>
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

export default Burn