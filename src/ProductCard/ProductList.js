import React from 'react';
import ProductCard from './ProductCard';
import MainContainer from '../MainContainer';
import { Redirect } from 'react-router-dom';

class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            checked: false,
            toOrder: false,
            orderDetails: {},
            apiUrl: props.apiUrl
        }
    }

    componentDidMount(){
        fetch(this.state.apiUrl + '/productsTest', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            this.setState({
                items: data.Items,
                toOrder: false,
                orderDetails: {}
            })
        })
        .catch(err => {
            console.log(err);
        })
        this.qChangeHandler();
    }

    postOrder(e){
        e.preventDefault();
        const that = this;
        let orderListed = [];
        this.state.items.forEach((item)=>{
            if (item.q > 0)  orderListed.push(item);
        })

        fetch(this.state.apiUrl + '/order', {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                orderItems: orderListed
              })
            }
        )
        .then((response)=>{ return response.json()})
        .then((order)=>{
            that.setState({
                toOrder: true,
                orderDetails: order
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    qChangeHandler(){
        let qSum = 0;
        this.state.items.forEach((item) =>{
            qSum += item.q;
        })
        if(qSum === 0) {
            this.setState({
                checked: 'btn btn-primary text-center btn-block disabled'
            })
        } else {
            this.setState({
                checked: 'btn btn-primary text-center btn-block'
            })
        }
    }
    render(){
        if(this.state.items !== undefined){
            if(this.state.items.length > 0){
                if(this.state.toOrder){                    
                    return <Redirect  to={{pathname: '/order', state: this.state.orderDetails}}/>
                } else {
                    return (
                        <MainContainer activePage='/'>
                            <div className='row'>
                                {
                                    this.state.items.map((num, index) => {
                                        return(
                                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12' key={index}>
                                                <ProductCard item={num} myHandler={this.qChangeHandler.bind(this)}></ProductCard>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className='row'>
                                <br/>
                            </div>
                            <div className='row'>
                                <a  href='/' className={this.state.checked} onClick={this.postOrder.bind(this)} /* {this.state.checked} */>Buy</a>
                            </div>
                        </MainContainer>
                    );
                }
            }
        }
        return(<div>We don't have any items available at this time!</div>);
    }

}

export default ProductList;