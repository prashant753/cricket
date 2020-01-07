import React from 'react';
import Card from '../cards/Cards';
import Status from '../navbars/Status';
import Type from '../navbars/Type'
import { status, type} from '../constants/Constants';
import { IMatchData } from '../models/CricketData';

interface IState {
  status: number;
  type: number;
  data: any;
}

export class CricketSite extends React.Component<any, IState> {

  /*
    # We will have **ComponentDidMount** life cycle method with default params i.e 
                           Status - Running, Type - All
    # Then after getting response, we will set the data to out local state and wil display the result. 
  */
  public componentDidMount() {
    this.fetchData();
  }

  public fetchData = () => {
    fetch('https://api.devcdc.com/cricket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query getMatchSchedule {
          schedule(type:"all", status: "running", page: 0){
            matchID,
            seriesName,
            homeTeamName,
            awayTeamName,
            toss,
            matchNumber,
            venue,
          }
        }`,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(responseAsJson => {
        this.setState({ data: responseAsJson.data.schedule })
      })
  }

  public state = {
    status: 0,
    type: 0,
    data: [],
  }

  public render() {
    return (
      <div>
        <div className="main">
          <h2>Schedule</h2>
          <Status buttonChange={this.statusChange} activeButton={this.state.status} />
          <Type tabChange={this.tabChange} activeTab={this.state.type} />
          {this.state.data && this.state.data.map((matchData: IMatchData) => {
            return (<Card data={matchData} />)
        })}
        </div>
      </div>
    );
  }

  private statusChange = (index: number) => {
    this.setState({
      status: index,
    });
    this.fetchUpdateDate(index, this.state.type);
  }

  private tabChange = (index: number) => {
    this.setState({
      type: index,
    });
    this.fetchUpdateDate(this.state.status, index);
  }

  private fetchUpdateDate = async (status: number, type: number) => {
    const statusData = this.getStatus(status)!;
    const typeData = this.getType(type)!;
    fetch('https://api.devcdc.com/cricket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query getMatchSchedule {
          schedule(type:"${typeData.name}", status: "${statusData.name}", page: 0){
            matchID,
            seriesName,
            homeTeamName,
            awayTeamName,
            toss,
            matchNumber,
            venue,
          }
        }`,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(responseAsJson => {
        this.setState({ data: responseAsJson.data.schedule })
      })
  }

  private getStatus = (statusId: number) => {
    return status.find((data: any) => data.index === statusId)
  }

  private getType = (typeId: number) => {
    return type.find((data: any) => data.index === typeId)
  }
}

export default CricketSite;
