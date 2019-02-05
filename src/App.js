import React, {Component} from 'react';
import Person from './components/person.js'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount(){
    const API = 'http://api.open-notify.org/astros.json'
    return fetch(API)
    .then(response => response.json())
    .then(json =>
      this.setState({
        people: json["people"]
      })
    )
  }

  render(){
    return (
      <div className='App'>
        {
          this.state.people.map(person => <Person person={person} key={person.name}/>)
        }
      </div>
    )
  }

}
