import React from "react";

const Comparison = () => (
  <section className="comparison-section">
    <h2 className="comp-title">Us vs Them</h2>
    <div className="table-wrapper">
      <div className="comp-table">
        <div className="col col-labels">
          <div className="spacer"></div>
          <div className="row-label">Tastes like a proper beer</div>
          <div className="row-label">Calming effect</div>
          <div className="row-label">Hangover free</div>
          <div className="row-label">Calories</div>
        </div>
        
        <div className="col col-collider">
          <div className="col-header">
            <img src="https://www.drinkcollider.com/cdn/shop/files/lagersmall_c6dda373-f53f-44a0-92b4-5507a7643261.png?v=1741638264&width=480" alt="Collider" />
          </div>
          <div className="row-cell"><span className="pill yes">Yes</span></div>
          <div className="row-cell"><span className="pill yes">Yes</span></div>
          <div className="row-cell"><span className="pill yes">Yes</span></div>
          <div className="row-cell text-cell">36 cals/can</div>
        </div>

        <div className="col col-standard">
           <div className="col-header text-header">
             <img src="https://www.drinkcollider.com/cdn/shop/files/alcoholic-beer.png?v=1740602784&width=200" alt="Beer Icon" className="icon-img" />
             <span>Alcoholic<br/>Beer</span>
           </div>
           <div className="row-cell"><span className="pill yes">Yes</span></div>
           <div className="row-cell"><span className="pill maybe">Sometimes</span></div>
           <div className="row-cell"><span className="pill no">No</span></div>
           <div className="row-cell text-cell">~130 cals/can</div>
        </div>

        <div className="col col-standard">
           <div className="col-header text-header">
             <img src="https://www.drinkcollider.com/cdn/shop/files/non-alcoholic-beers.png?v=1740602784&width=200" alt="Soda Icon" className="icon-img" />
             <span>Other<br/>Non-alcoholic</span>
           </div>
           <div className="row-cell"><span className="pill maybe">Sometimes</span></div>
           <div className="row-cell"><span className="pill no">No</span></div>
           <div className="row-cell"><span className="pill yes">Yes</span></div>
           <div className="row-cell text-cell">Up to 60 cals/can</div>
        </div>
      </div>
    </div>
  </section>
);

export default Comparison;