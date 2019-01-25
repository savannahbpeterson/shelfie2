import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'
import { threadId } from 'worker_threads';


class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            inventory: []
        }
    }

    clearProduct(){
        axios.delete(`/api/product/:id`).then(() => {this.props.})
    }
    render(){
        return(
            <div>Dashboard
                {this.props.inventory.map(val => {
                    <Product 
                        key={val.name}
                        id={val.id}
                        name={val.name}
                        price={val.price}
                        imageUrl={val.imageUrl}
                        clearProduct={this.clearProduct}
                    />
                })}

            </div>
        )
    }
}

export default Dashboard;