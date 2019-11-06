import React, {Component} from 'react';
import './App.css';
import Details from './details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleList : [],
    }
  }

componentDidMount() {
    this.fetchData();
}

fetchData() {
      fetch('https://randomuser.me/api?results=25')
      .then (results =>results.json())
      // .then (parsedJSON => return parsedJSON.results()))
      .then (parsedJSON => this.setState({peopleList : parsedJSON.results}) )
      .catch(error => console.log("error", error))
}

render() {
  //console.log(this.state.peopleList)
    return (
      <div>
        <header>
          <h1>Rollodex</h1>
        </header>
        <br/>
          <ul>
            {this.state.peopleList.map(function(person,index) {
              return (
                <div key = {index}>
                  <br/>
                  <br/>
                    <img src = {person.picture.thumbnail} alt = "person_image" width="90px" height="90px"/>
                    <h2> {person.name.first} {person.name.last} <br/> <Details/>
                  </h2>
                  <br/>
                  <br/>
              </div>
              )
            })}
          </ul>
      </div>
    )
  }
};


export default App