import React, { Component } from 'react';

class Products extends Component {

    constructor(props){
        console.log("Constructor")
        super(props)

        this.state = {
            productId: '',
            qty: 1
        }
    }

    addToCart = (pid) => {
        this.setState({
            productId: pid,
            qty: this.state.qty+1
        })
    }

    render() {
        return (
            <div>
                <button onClick={ ()=> this.addToCart(1) }>Add to Cart</button>
                <Cart productId={ this.state.productId } qty={ this.state.qty}></Cart>
            </div>
        )
    }
}

export default Products;

class Cart extends Component {

    constructor(props){
        
        super(props)

        this.state = {
            qty: this.props.qty
        }
        console.log(this.state, "-1-")
    }

    // updateQty = () => {
    //     this.setState({
    //         qty: this.state.qty+1
    //     })
    // }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")

        console.log("props.qty", props.qty)
        console.log("state.qty", state.qty)

        if(props.qty !== state.qty){
            return {
                qty: props.qty
            }
        }
        return null;
    }

    componentDidMount(){
        console.log("Execute after component render")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component updated")
    }

    render() {
        return (
            <div>
                <h1>CART: { this.state.qty }</h1>
                {/* <button onClick={ this.updateQty }>Update Quantity</button> */}
            </div>
        )
    }
}