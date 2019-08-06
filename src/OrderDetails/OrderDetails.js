import React from 'react';
import './OrderDetails.css';
import MainContainer from '../MainContainer';

class OrderDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            order: props.history.location.state
        }
    }

    render(){
        return(
            <MainContainer activePage='/order'>
                <div className ='row'>
                    <h2>Order N<sup>o</sup>{this.state.order.order_id}</h2>
                </div>
                <div className='row'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='text-center'>ID</th>
                                <th className='text-center'>Product</th>
                                <th className='text-center'>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.order.detailLines.map((line, index)=>{
                                return(
                                    <tr key={index}>
                                        <td className='mx-auto'>{line.product_id}</td>
                                        <td className='mx-auto'>
                                            <ul>
                                                <li>{line.title}</li>
                                                <li>Quantity: {line.quantity}</li>
                                            </ul>   
                                        </td>
                                        <td className='mx-auto'>
                                            <ul>
                                                <li>List Price: CDN&#36;{line.price}</li>
                                                <li>Sub Total: CDN&#36;{line.sub_tot_price}</li>
                                                <li>Discounts: {line.disc_perc}&#37; = CDN&#36;{line.disc_amount}</li>
                                                <li>Total: CDN&#36;{line.tot_price}</li>
                                                <li><hr/>Taxes: CDN&#36;{line.taxes}</li>
                                            </ul>                                
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                    <ul>
                        <li>Total Products: {this.state.order.totalQProductos}</li>
                        <li>Sub Total: CDN&#36;{this.state.order.subtotal_price}</li>
                        <li>Total Taxes: CDN&#36;{this.state.order.total_tax}</li>
                        <li>Final Total: CDN&#36;{this.state.order.total_price}</li>
                    </ul>   
                </div>
            </MainContainer>
        )
    }
}

export default OrderDetails;