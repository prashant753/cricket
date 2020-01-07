import React from 'react';
import { cricketData } from '../constants/Constants';
import Card from '../cards/Cards';
import Status from '../navbars/Status';
import Type from '../navbars/Type'
import { IMatchData } from '../models/CricketData';

interface IState {
  activeButton: number;
  activeTab: number;
}

export class CricketSite extends React.Component<any, IState> {

/*
  # We will have **ComponentDidMount** life cycle method with default params i.e 
                         Status - Running, Type - All
  # Then after getting response, we will set the data to out local state and wil display the result. 
*/

/*
  # We will also have **ComponentDidUpdate** life cycle method, once the user clicks on any of the
  filter, we will make API call with updated filters and will check on this method that if any of the props
  value changes, we will update the state will current props.
*/

  public state = {
    activeButton: 0,
    activeTab: 0,
  }

  public render() {
    return (
      <div>
        <div className="main">
          <h2>Schedule</h2>
          <Status buttonChange={this.buttonChange} activeButton={this.state.activeButton} />
          <Type tabChange={this.tabChange} activeTab={this.state.activeTab} />
          {cricketData.map((matchData: IMatchData) => {
            return (<Card data={matchData} />)
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
