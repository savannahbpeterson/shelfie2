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
      inventory: [],
      selectedProducts: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => this.setState({inventory: res.data}))
  }
  getInventory(){
    axios.get('/api/inventory').then(res => this.setState({inventory: res.data}))
  }


  render() {
    return (
      <div className="App">
          <Header />
        <Dashboard 
          inventory = {this.state.inventory}
          getInventory = {this.componentDidMount}
        />
        <Form 
          getInventory={this.getInventory}
          selectedProducts={this.state.selectedProducts}
          />
      </div>
    );
  }
}

export default App;
