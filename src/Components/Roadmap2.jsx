import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import "../Css/roadmap2.css";
import bg from "../Assets/roadmap.png";

const roadmapData = {
  phase1: [
    "Idea Creation, deploy",
    "Market warm-up, early business cooperation",
    "Launch website, Twitter, Telegram, etc.",
    "IEO on tier A CEX & listing",
    "10,000 Telegram members",
    "Listing on PancakeSwap",
    "Apply for listing on Coingecko",
    "Apply for listing on Coinranking",
    "Third-party audit",
  ],
  phase2: [
    "Launching influencer marketing",
    "Apply for listing on CoinMarketCap",
    "Cooperate with MetaMask, Trust Wallet, TokenPocket",
    "Listing another CMC listed CEX",
    "25,000 Telegram members",
    "10,000 holders",
    "Big centralized exchange listing",
    "Develop BETA NFT marketplace",
  ],
};

function Roadmap2() {
  return (
    <div id="backcover" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container" id="roadmap">
        <h2 className="roadmap-title text-center">SUKUYANA ROADMAP</h2>

        <MDBContainer className="py-5">

          {/* Phase 1 */}
          <h4 className="phase text-center">Phase 1</h4>
          <div className="timeline">
            {roadmapData.phase1.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <MDBCard>
                  <MDBCardBody className="cardbody">
                    <p >{item}</p>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>

          {/* Phase 2 */}
          <h4 className="phase text-center mt-5">Phase 2</h4>
          <div className="timeline">
            {roadmapData.phase2.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <MDBCard>
                  <MDBCardBody className="cardbody">
                    <p>{item}</p>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>

        </MDBContainer>
      </div>
    </div>
  );
}

export default Roadmap2;