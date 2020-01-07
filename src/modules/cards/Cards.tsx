import React from 'react';
import { IMatchData } from '../models/CricketData';

interface IProps {
    data: IMatchData;
}

export default function Cards(props: IProps) {
    return (
        <div className="cards main-div-1">
            <span className="series-name">
                <span className="f6 lh-copy measure">{props.data.seriesName}</span>
                <i className="fa fa-angle-right arrow-icon"></i>
            </span>
            <hr></hr>
            <div className="match-details">
                <p className="f6 lh-copy measure">{props.data.matchNumber} <span className="dot"></span> {props.data.city}</p>
                <div>
                    <div className="inline-country-details">
                        <img src="https://image.flaticon.com/icons/svg/206/206626.svg" className="br-40 dib image-size" alt="Pic not found"></img>
                        <span className="f6 lh-copy measure">{props.data.team1}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/206/206758.svg" className="br-40 dib image-size" alt="Pic not found"></img>
                        <span className="f6 lh-copy measure">{props.data.team2}</span>
                    </div>
                </div>
                <div className="time">
                    <p className="text-time">{props.data.timeToToss}to toss</p>
                </div>
            </div>
        </div>
    )
}
