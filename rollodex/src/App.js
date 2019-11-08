import React, {Component} from 'react';
import './App.css';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core';
//import  {Card, CardActions, CardContent} from '@material-ui/core';
//import Typography from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : [],
      hidden: []
    };
  }

componentDidMount() {
    this.fetchData();
}

fetchData() {
      fetch('https://randomuser.me/api?results=25')
      .then (results =>results.json())
      .then (parsedJSON => this.setState({contacts : parsedJSON.results}) )
      .catch(error => console.log("error", error))
}

toggleDetails = (uuid) => {
  let newHidden = {...this.state.hidden};
  newHidden[uuid] = !newHidden[uuid]
  this.setState({ hidden: newHidden});
}

render() {
    let { contacts, hidden } = this.state;
    return (
      <div className = "App">
        <header><h1>Rollodex</h1></header>
        {contacts.map( (c) => (
          <div>
            <ul>
              <br/><br/>
                <img src = {c.picture.thumbnail} alt = "person_image" width="90px" height="90px"/>
                    <h2><div> {c.name.first} {c.name.last}</div> </h2><br/> 
                      <button onClick = {() => this.toggleDetails(c.login.uuid)} > {hidden[c.login.uuid] ? "Hide Details" : "Show Details"} </button>
                    <br/> <br/>
                    {hidden[c.login.uuid] && <div> <p> {c.location.street.number} {c.location.street.name} <br/> {c.location.city}, {c.location.state}{c. location.postcode}<br/>{c.location.country}<br/> Contact Cell#: {c.cell} <br/> Email: {c.email}</p></div>}
                    <br/>
                  <br/>
                  </ul>
          </div>
          ))}
      </div>
    )
  }}

  // const rootElement = document.getElementById("root");
  // ReactDOM.render(<App />, rootElement); 
export default App