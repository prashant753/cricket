import React from 'react';
import { cricketData } from '../constants/Constants';
import Card from '../cards/Cards';
import TopNav from '../navbars/TopNav';
import FilterNav from '../navbars/FilterTab'
import { IMatchData } from '../models/CricketData';

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
          <TopNav buttonChange={this.buttonChange} activeButton={this.state.activeButton}/>
          <FilterNav tabChange={this.tabChange} activeTab={this.state.activeTab} />
          { cricketData.map((matchData: IMatchData) => {
            return (<Card data={matchData}/>)
          })}
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
