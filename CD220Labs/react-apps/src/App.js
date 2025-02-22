import React from 'react';
const axios = require('axios').default;

class App extends React.Component {
  state = { eventList:[] }

  componentDidMount() {
    let url = "https://reststop.randomhouse.com/resources/authorevents/?start=0&max=3&expandLevel=1&isbn=0&authorid=0"
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
         let listOfEvents = resp.data.authorEvent;
        let listOfEventsAsArray = Object.entries(listOfEvents);
        let eventDetails = listOfEventsAsArray.map((eventDetial)=>{
          let eventListCollection = Object.entries(eventDetial[1])
          return <div>{eventListCollection[4][1]} on {eventListCollection[5][1]} at {eventListCollection[7][1]} in {eventListCollection[10][1]} - {eventListCollection[11][1]}</div>
        })
        this.setState({eventList:eventDetails})
      })
    .catch(err => {
        console.log(err.toString())
    });
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    let li_ctr = 0;
    return (
      <div style={colorStyle}>
        React Component
            <ul>
                {this.state.eventList.map(function(eventDetails){
                    return <li key={li_ctr++}>{eventDetails}</li>;
                  })}
            </ul>      
        </div>
    );
  }
}

export default App;
