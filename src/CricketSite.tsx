import React from 'react';

import './CricketSite.css';

interface IState {
  activeButton: number;
  activeTab: number;
}

export class CricketSite extends React.Component<any, IState> {

  public state = {
    activeButton: 0,
    activeTab: 0,
  }

  public render() {
    return (
      <div>
        <div className="main">
          <h2>Schedule</h2>
          <div className="tc pb3 padding-top main-div-1">
            <a className={this.state.activeButton === 0 ? "f6 f5-ns dib ba pv2 ph1 no-border active-color" : "gray f6 f5-ns dib ba pv2 ph1 no-border"} href="#" onClick={() => this.buttonChange(0)}>RUNNING</a>
            <a className={this.state.activeButton === 1 ? "f6 f5-ns dib ba pv2 ph1 no-border active-color" : "gray f6 f5-ns dib ba pv2 ph1 no-border"} href="#" onClick={() => this.buttonChange(1)}>UPCOMING</a>
            <a className={this.state.activeButton === 2 ? "f6 f5-ns dib ba pv2 ph1 no-border active-color" : "gray f6 f5-ns dib ba pv2 ph1 no-border"} href="#" onClick={() => this.buttonChange(2)}>COMPLETED</a>
          </div>
          <div className="padding-top main-div-1">
            <a className={this.state.activeTab === 0 ? "gray f6 f5-ns dib pv2 ph1 nav-bar active-tab": "gray f6 f5-ns dib pv2 ph1 nav-bar"} href="#" onClick={() => this.tabChange(0)}>All</a>
            <a className={this.state.activeTab === 1 ? "gray f6 f5-ns dib pv2 ph1 nav-bar active-tab": "gray f6 f5-ns dib pv2 ph1 nav-bar"} href="#" onClick={() => this.tabChange(1)}>International</a>
            <a className={this.state.activeTab === 2 ? "gray f6 f5-ns dib pv2 ph1 nav-bar active-tab": "gray f6 f5-ns dib pv2 ph1 nav-bar"} href="#" onClick={() => this.tabChange(2)}>Domestic</a>
          </div>
          <div className="cards main-div-1">
            <span className="series-name">
              <span className="f6 lh-copy measure">Prentagular Series in Oman 2019</span>
              <i className="fa fa-angle-right arrow-icon"></i>
            </span>
            <hr></hr>
            <div className="match-details">
              <p className="f6 lh-copy measure">Match 10 <span className="dot"></span> Al Amarat</p>
              <div>
                <span>
                  <img src="https://image.flaticon.com/icons/svg/206/206626.svg" className="br-40 dib image-size"></img>
                  <span className="f6 lh-copy measure country-name">Oman</span>
                </span>
              </div>
              <div>
                <span>
                  <img src="https://image.flaticon.com/icons/svg/206/206758.svg" className="br-40 dib image-size"></img>
                  <span className="f6 lh-copy measure country-name">Nepal</span>
                </span>
              </div>
              <div className="time">
                <p className="text-time">15 mins to toss</p>
              </div>
            </div>
          </div>
          <div className="cards main-div-1">
            <span className="series-name">
              <span className="f6 lh-copy measure">Indian Primier league 2020</span>
              <i className="fa fa-angle-right arrow-icon"></i>
            </span>
            <hr></hr>
            <div className="match-details">
              <p className="f6 lh-copy measure">Qualifier 1 <span className="dot"></span> Mumbai</p>
              <div>
                <span>
                  <img src="https://image.flaticon.com/icons/svg/206/206606.svg" className="br-40 dib image-size"></img>
                  <span className="f6 lh-copy measure country-name">Bangalore</span>
                </span>
              </div>
              <div>
                <span>
                  <img src="https://image.flaticon.com/icons/svg/206/206609.svg" className="br-40 dib image-size"></img>
                  <span className="f6 lh-copy measure country-name">Chennai</span>
                </span>
              </div>
              <div className="time">
                <p className="text-time">10 mins to toss</p>
              </div>
            </div>
          </div>
          <div className="cards main-div-1">
            <span className="series-name">
              <span className="f6 lh-copy measure">Caribbean Primier league</span>
              <i className="fa fa-angle-right arrow-icon"></i>
            </span>
            <hr></hr>
            <div className="match-details">
              <p className="f6 lh-copy measure">Match 11 <span className="dot"></span> Bangalore</p>
              <div>
                <span>
                  <img src="https://image.flaticon.com/icons/svg/206/206622.svg" className="br-40 dib image-size"></img>
                  <span className="f6 lh-copy measure country-name">Rajasthan royal</span>
                </span>
              </div>
              <div>
                <span>
                  <img src="https://image.flaticon.com/icons/svg/206/206628.svg" className="br-40 dib image-size"></img>
                  <span className="f6 lh-copy measure country-name">Mexican dusters</span>
                </span>
              </div>
              <div className="time">
                <p className="text-time">5 mins to toss</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private buttonChange = (index: number) => {
    this.setState({
      activeButton: index,
    })
  }
  private tabChange = (index: number) => {
    this.setState({
      activeTab: index,
    })
  }
}

export default CricketSite;
