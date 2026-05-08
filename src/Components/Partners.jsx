import React from "react";
import "../Css/Partners.css";

import com2 from "../Assets/c2.png";
import com3 from "../Assets/c3.png";
import com4 from "../Assets/c4.png";
import com5 from "../Assets/c5.png";
import com6 from "../Assets/c6.png";
import com7 from "../Assets/c7.png";
import com8 from "../Assets/trustwallet.png";
import com9 from "../Assets/c9.png";
import com10 from "../Assets/c10.png";

function Partners() {
  const partners = [
    { img: com2, link: "https://bscscan.com/address/0x485f66f20f6732017345ff3437377ec84ea75039" },
    { img: com3, link: "https://www.coingecko.com/" },
    { img: com4, link: "https://pancakeswap.finance/swap" },
    { img: com5, link: "https://pancakeswap.finance/swap" },
    { img: com6, link: "https://coinsgem.com/token/0x485f66f20f6732017345ff3437377ec84ea75039" },
    { img: com7, link: "https://coinpaprika.com/coin/sna-sukuyana/" },
    { img: com8, link: "https://pancakeswap.finance/swap" },
    { img: com9, link: "https://poocoin.app/tokens/0x485f66f20f6732017345ff3437377ec84ea75039" },
    { img: com10, link: "https://coinmarketcap.com/" },
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        
        {/* First set */}
        {partners.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noreferrer">
            <img src={item.img} alt="partner" />
          </a>
        ))}

        {/* Duplicate set for smooth loop */}
        {partners.map((item, index) => (
          <a key={"dup-" + index} href={item.link} target="_blank" rel="noreferrer">
            <img src={item.img} alt="partner" />
          </a>
        ))}

      </div>
    </div>
  );
}

export default Partners;