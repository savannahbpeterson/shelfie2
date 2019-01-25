import React, {Component} from 'react';


class Form extends Component{
    constructor(){
        super()
        this.state = {
            imageUrl: '',
            name: '',
            price: 0
        }
        this.handleCancel = this.handleCancel.bind(this)
    }


    handleImage(val){
        this.setState({imageUrl: val})
    }
    
    handleNameChange(val){
        this.setState({name: val})
    }
    handlePriceChange(val){
        this.setState({price: val})
    }

    handleCancel(imageUrl, name, price){
        this.setState({
        imageUrl: '',
        name: '',
        price: 0})
        // console.log(this.handleCancel)
    }


    render(){
        return(
            <div>
                <input placeholder='Image URL' onChange={(e) => this.handleImage(e.target.value)}/>
                <input placeholder='Product Name' onChange={(e) => this.handleNameChange(e.target.value)}/>
                <input placeholder='Price'onChange={(e) => this.handlePriceChange (e.target.value)}/>
                <button onChange={() => this.handleCancel ()}>Cancel</button>
                <button onChange={() => this.handleAdd ()}>Add to inventory</button>
            </div>
        )
    }
}

export default Form;