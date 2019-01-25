import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'



class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            inventory: []
        }
    }

    clearProduct(id){
        axios.delete(`/api/product/:id`).then(() => {this.props.getInventory()
        console.log('Its working!')
        })
    }
    render(){
        return(
            <div>Dashboard
                {this.props.inventory.map(val => {
                    return(  
                    <Product 
                        key={val.name}
                        id={val.id}
                        name={val.name}
                        price={val.price}
                        imageUrl={val.imageUrl}
                        clearProduct={this.clearProduct}
                    />)
                  
                })}

            </div>
        )
    }
}

export default Dashboard;