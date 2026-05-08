import React from 'react'
import '../Css/Introduction.css'
import giphysna from '../Assets/weapon.gif';



function Introduction() {
  return (
    <>
    
      <div className="container" id='introduction' >
        <div className='row'>
          <h5 className="display-1 text-center" id="intro">WHY SUKUYANA?</h5>
          <div className="col-lg-4 ">
            <p id='intro_para'>SUKUYANA is super powerfull meme token on Binance smart chain.
              SUKUYANA will be the right choice every meme crypto currency lover.<br />Its a open source community driven meme token which is basically for
              all type of charity & rewards programme. <br />Our community is too strong ,
              SUKUYANA will be the killer of any meme coin in crypto currency world.<br /> Buy SUKUYANA from pancakwsap Thank you.
            </p>
            <img src={giphysna} alt='noimg' width="50%" />


          </div>
          <div className="col-lg-8">
            {/* card grid */}
            <main className="grid">
              <article className='border-gradient-green'>
                {/* <img src="https://picsum.photos/600/400?image=1083" alt="Samplephoto"/> */}
                <div className="text">
                  <h3 className='text-center'>About SUKUYANA(SNA)</h3>
                  <div className="line-dec"></div>
                  <p>SUKUYANA is an open source blockchain project initiated by the core developers of SUKUYANA LOVERS community for all meme lovers. SUKUYA deployed on the BSC smart chain. SUKUYANA will initially focus on began charity & distribute rewards by our community and will later go live on WEB 3.0 and
                    will be launched own NFT marketplace & Metaverse platforms one after another.</p>

                </div>
              </article>
              <article className='border-gradient-green '>
                {/* <img src="https://picsum.photos/600/400?image=1063" alt="Samplephoto"/> */}
                <div className="text">
                  <h3 className='text-center'>About WEB 3.0</h3>
                  <div className="line-dec"></div>
                  <p>Web 3.0 is the third generation of internet services for websites and applications that will focus on using a machine-based understanding of data to provide a datadriven and Semantic Web. The ultimate goal of Web 3.0 is to create more intelligent,
                    connected and open websites. SUKUYANA(SNA) will be the best combination meme with web 3.0</p>
                  {/* <a href="#" class="btn btn-primary btn-block">Here's how</a> */}
                </div>
              </article>
              <article className='border-gradient-green'>
                {/* <img src="https://picsum.photos/600/400?image=1056" alt="Samplephoto"/> */}
                <div className="text">
                  <h3 className='text-center'>NFT & Metaverse</h3>
                  <div className="line-dec"></div>
                  <p>SUKUYANA will be launch own NFT platform & Metaverse for high utility and demand of Sukuyana.
                    Our community and all crypto currency meme and NFT lovers can trade NFT easily by used our platform & SUKUYANA token.</p>
                  {/* <a href="#" class="btn btn-primary btn-block">Read more</a> */}
                </div>
              </article>
              <article className='border-gradient-green'>
                <div className="text">
                  <h3 className='text-center'>What is METAVERSE?</h3>
                  <div className="line-dec"></div>
                  <p>The metaverse is a digital reality that combines aspects of social media, online, virtual reality (VR), and cryptocurrencies to allow users to interact virtually.
                    Augmented reality overlays visual elements, sound, and other sensory input onto real-world settings to enhance the user experience.</p>

                </div>
              </article>


            </main>

          </div>

        </div>
      </div>
      

    </>
  )
}

export default Introduction
