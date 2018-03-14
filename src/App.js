import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }  
  }

  getPeople(){
    return axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results);
    })
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
