(this.webpackJsonpcricket=this.webpackJsonpcricket||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),s=t.n(r),i=(t(14),t(3)),o=t.n(i),m=t(4),l=t(5),u=t(7),d=t(6),h=t(8);function f(e){return c.a.createElement("div",{className:"cards main-div-1"},c.a.createElement("span",{className:"series-name"},c.a.createElement("span",{className:"f6 lh-copy measure"},e.data.seriesName),c.a.createElement("i",{className:"fa fa-angle-right arrow-icon"})),c.a.createElement("hr",null),c.a.createElement("div",{className:"match-details"},c.a.createElement("p",{className:"f6 lh-copy measure"},e.data.matchNumber," ",c.a.createElement("span",{className:"dot"})," ",e.data.venue),c.a.createElement("div",null,c.a.createElement("div",{className:"inline-country-details"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/206/206626.svg",className:"br-40 dib image-size",alt:"Pic not found"}),c.a.createElement("span",{className:"f6 lh-copy measure"},e.data.homeTeamName))),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/206/206758.svg",className:"br-40 dib image-size",alt:"Pic not found"}),c.a.createElement("span",{className:"f6 lh-copy measure"},e.data.awayTeamName))),c.a.createElement("div",{className:"time"},c.a.createElement("p",{className:"text-time"},e.data.toss))))}function p(e){return c.a.createElement("div",{className:"tc pb3 padding-top main-div-1"},c.a.createElement("a",{className:0===e.activeButton?"f6 f5-ns dib ba pv2 ph1 no-border active-color":"gray f6 f5-ns dib ba pv2 ph1 no-border",href:"#",onClick:function(){return e.buttonChange(0)}},"UPCOMING"),c.a.createElement("a",{className:1===e.activeButton?"f6 f5-ns dib ba pv2 ph1 no-border active-color":"gray f6 f5-ns dib ba pv2 ph1 no-border",href:"#",onClick:function(){return e.buttonChange(1)}},"RUNNING"),c.a.createElement("a",{className:2===e.activeButton?"f6 f5-ns dib ba pv2 ph1 no-border active-color":"gray f6 f5-ns dib ba pv2 ph1 no-border",href:"#",onClick:function(){return e.buttonChange(2)}},"COMPLETED"))}function v(e){return c.a.createElement("div",{className:"padding-top main-div-1"},c.a.createElement("a",{className:0===e.activeTab?"gray f6 f5-ns dib pv2 ph1 nav-bar active-tab":"gray f6 f5-ns dib pv2 ph1 nav-bar",href:"#",onClick:function(){return e.tabChange(0)}},"All"),c.a.createElement("a",{className:1===e.activeTab?"gray f6 f5-ns dib pv2 ph1 nav-bar active-tab":"gray f6 f5-ns dib pv2 ph1 nav-bar",href:"#",onClick:function(){return e.tabChange(1)}},"International"),c.a.createElement("a",{className:2===e.activeTab?"gray f6 f5-ns dib pv2 ph1 nav-bar active-tab":"gray f6 f5-ns dib pv2 ph1 nav-bar",href:"#",onClick:function(){return e.tabChange(2)}},"Domestic"))}var b=[{index:0,name:"running"},{index:1,name:"upcoming"},{index:2,name:"completed"}],g=[{index:0,name:"all"},{index:1,name:"international"},{index:2,name:"domestic"}],y=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).fetchData=function(){fetch("https://api.devcdc.com/cricket",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'query getMatchSchedule {\n          schedule(type:"all", status: "running", page: 0){\n            matchID,\n            seriesName,\n            homeTeamName,\n            awayTeamName,\n            toss,\n            matchNumber,\n            venue,\n          }\n        }'})}).then((function(e){return e.json()})).then((function(e){t.setState({data:e.data.schedule})}))},t.state={status:0,type:0,data:[]},t.statusChange=function(e){t.setState({status:e}),t.fetchUpdateDate(e,t.state.type)},t.tabChange=function(e){t.setState({type:e}),t.fetchUpdateDate(t.state.status,e)},t.fetchUpdateDate=function(e,a){var n,c;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.getStatus(e),c=t.getType(a),fetch("https://api.devcdc.com/cricket",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'query getMatchSchedule {\n          schedule(type:"'.concat(c.name,'", status: "').concat(n.name,'", page: 0){\n            matchID,\n            seriesName,\n            homeTeamName,\n            awayTeamName,\n            toss,\n            matchNumber,\n            venue,\n          }\n        }')})}).then((function(e){return e.json()})).then((function(e){t.setState({data:e.data.schedule})}));case 3:case"end":return r.stop()}}))},t.getStatus=function(e){return b.find((function(a){return a.index===e}))},t.getType=function(e){return g.find((function(a){return a.index===e}))},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"main"},c.a.createElement("h2",null,"Schedule"),c.a.createElement(p,{buttonChange:this.statusChange,activeButton:this.state.status}),c.a.createElement(v,{tabChange:this.tabChange,activeTab:this.state.type}),this.state.data&&this.state.data.map((function(e){return c.a.createElement(f,{data:e})}))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0a441223.chunk.js.map