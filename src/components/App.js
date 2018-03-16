import React, { Component } from 'react';
import List from '../List';
import axios from 'axios';
import './Global/css/Header.css';

import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';


/*Acá creamos el component*/
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }

/*Por medio de axios llamamos a la api*/
  getPeople(){
    return axios.get("https://swapi.co/api/people").then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    const {people} = this.state;
    return (
      <div className="App">
        <Header />
        <Content />
        <List people = {people} />
        <Footer />
      </div>
    );
  }
}

export default App;
