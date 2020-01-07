import React from 'react';

interface IProps {
    tabChange: (index: number) => void;
    activeTab: number;
}

export default function Type(props: IProps) {
    return (
        <div className="padding-top main-div-1">
            <a className={props.activeTab === 0 ? "gray f6 f5-ns dib pv2 ph1 nav-bar active-tab" : "gray f6 f5-ns dib pv2 ph1 nav-bar"} href="#" onClick={() => props.tabChange(0)}>All</a>
            <a className={props.activeTab === 1 ? "gray f6 f5-ns dib pv2 ph1 nav-bar active-tab" : "gray f6 f5-ns dib pv2 ph1 nav-bar"} href="#" onClick={() => props.tabChange(1)}>International</a>
            <a className={props.activeTab === 2 ? "gray f6 f5-ns dib pv2 ph1 nav-bar active-tab" : "gray f6 f5-ns dib pv2 ph1 nav-bar"} href="#" onClick={() => props.tabChange(2)}>Domestic</a>
        </div>
    )
}
