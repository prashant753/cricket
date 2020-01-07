import React from 'react';

interface IProps {
    buttonChange: (index: number) => void;
    activeButton: number;
}

export default function Status(props: IProps) {
    return (
        <div className="tc pb3 padding-top main-div-1">
            <a className={props.activeButton === 0 ? "f6 f5-ns dib ba pv2 ph1 no-border active-color" : "gray f6 f5-ns dib ba pv2 ph1 no-border"} href="#" onClick={() => props.buttonChange(0)}>RUNNING</a>
            <a className={props.activeButton === 1 ? "f6 f5-ns dib ba pv2 ph1 no-border active-color" : "gray f6 f5-ns dib ba pv2 ph1 no-border"} href="#" onClick={() => props.buttonChange(1)}>UPCOMING</a>
            <a className={props.activeButton === 2 ? "f6 f5-ns dib ba pv2 ph1 no-border active-color" : "gray f6 f5-ns dib ba pv2 ph1 no-border"} href="#" onClick={() => props.buttonChange(2)}>COMPLETED</a>
        </div>
    )
}
