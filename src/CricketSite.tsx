import React from 'react';
import './App.css';

export class CricketSite extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div className="main">
          <h2>Schedule</h2>
          <div className="main-div-1">
            <div className="tc pb3 padding-top">
              <a className="link dim gray f6 f5-ns dib ba pv2 ph1 no-border" href="#" title="Home">RUNNING</a>
              <a className="link dim gray f6 f5-ns dib ba pv2 ph1 no-border" href="#" title="About">UPCOMING</a>
              <a className="link dim gray f6 f5-ns dib ba pv2 ph1 no-border" href="#" title="Store">COMPLETED</a>
            </div>
            <div className="pb3 padding-top navigation-link">
              <a className="link dim gray f6 f5-ns dib pv2 ph1 nav-bar" href="#" title="Home">All</a>
              <a className="link dim gray f6 f5-ns dib pv2 ph1 nav-bar" href="#" title="About">International</a>
              <a className="link dim gray f6 f5-ns dib pv2 ph1 nav-bar" href="#" title="Store">Domestic</a>
            </div>
            <div className="cards">
              <span className="series-name">
                <span className="f6 lh-copy measure">Prentagular Series in Oman 2019</span>
                <i className="fa fa-angle-right arrow-icon"></i>
              </span>
              <hr></hr>
              <div className="match-details">
                <p className="f6 lh-copy measure">Match 10 * Al Amarat</p>
                <div>
                  <span>
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-40 dib image-size"></img>
                    <span className="f6 lh-copy measure country-name">Oman</span>
                  </span>
                </div>
                <div>
                  <span>
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-40 dib image-size"></img>
                    <span className="f6 lh-copy measure country-name">Oman</span>
                  </span>
                </div>
                <div className="time">
                  <p className="text-time">15 mins to toss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CricketSite;
