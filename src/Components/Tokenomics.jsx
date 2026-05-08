import React, { useState } from "react";
import "../Css/Tokenomics.css";

function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState(null);
  const tokenData = [
    { label: "Total Burn", value: 50, color: "#F5B800" },
    { label: "Community", value: 30, color: "#00E5FF" },
    { label: "Development", value: 15, color: "#b55959" },
    { label: "Airdrop", value: 5, color: "#0077FF" },
  ];

  const radius = 80;
  const innerRadius = 50;
  const center = 100;

  let cumulative = 0;

  const total = tokenData.reduce((acc, item) => acc + item.value, 0);

  const createArc = (startAngle, endAngle, color) => {
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);

    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    const xi1 = center + innerRadius * Math.cos(endAngle);
    const yi1 = center + innerRadius * Math.sin(endAngle);

    const xi2 = center + innerRadius * Math.cos(startAngle);
    const yi2 = center + innerRadius * Math.sin(startAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    const pathData = `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
      L ${xi1} ${yi1}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${xi2} ${yi2}
      Z
    `;

    return pathData;
  };

  return (
    <section className="tokenomics-section">
      <div className="container">
        <h2 className="token-heading">SUKUYANA TOKENOMICS</h2>

        <div className="tokenomics-wrapper">
          {/* LEFT CHART */}
          <div className="chart-side">
            <div className="chart-box">
              <svg viewBox="0 0 200 200" className="pie-chart">
                {tokenData.map((item, index) => {
                  const startAngle =
                    (cumulative / total) * Math.PI * 2 - Math.PI / 2;

                  cumulative += item.value;

                  const endAngle =
                    (cumulative / total) * Math.PI * 2 - Math.PI / 2;

                  return (
                    <path
                      key={index}
                      d={createArc(startAngle, endAngle)}
                      fill={item.color}
                      className={`pie-slice ${
                        activeIndex === index ? "active-slice" : ""
                      }`}
                      style={{
                        opacity:
                          activeIndex === null || activeIndex === index
                            ? 1
                            : 0.25,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center Text */}
              <div className="chart-center">
                <span>SUKUYANA</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="legend-side">
            {tokenData.map((item, index) => (
              <div
                className="legend-card"
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="legend-left">
                  <span
                    className="legend-dot"
                    style={{ background: item.color }}
                  ></span>

                  <p>{item.label}</p>
                </div>

                <h3 style={{ color: item.color }}>{item.value}%</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
