import React, { Component } from 'react'

class App extends Component {

    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json)
        .then(json => console.log(json))
    }

    render() {
        return 'Hello'
    }

}

export default App