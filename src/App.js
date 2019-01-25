import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//COMPONENTS
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  // componentDidMount(){
  //   axios.get('/api/inventory').then(res => this.setState({inventory:this.setState})).catch(error => console.log(error))
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory = {this.state.inventory}
          getInventory = {this.componentDidMount}
        />
        <Form />
      </div>
    );
  }
}

export default App;
