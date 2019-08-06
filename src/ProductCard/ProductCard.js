import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        props.item.q = 0;
        this.item = props.item;
        this.state = {
            item: props.item
        }
    }
    setQplus(e){
        e.preventDefault();
        let myItem = this.state.item;
        myItem.q += 1;
        this.setState(
            {item: myItem}
        )
        this.props.myHandler();
    }

    /* {
        order_id: '123123',
        detailLines:
        [{
            product_id: line.product_id,
            variant_id: line.variant_id,
            title: line.title,
            quantity: line.quantity,
            price: line.price,
            sub_tot_price: line.price * line.quantity,
            disc_perc: disc ? 0: line.applied_discount.value,
            disc_amount: disc ? 0: line.applied_discount.amount,
            taxes: line.tax_lines.price,
            tot_price: (line.price * line.quantity) - (disc ? 0: line.applied_discount.amount)
        }],
        totalQProductos: 1,
        subtotal_price: 17.00,
        total_tax: 2.21,
        total_price: 19.21
    } */
    setQminus(e){
        e.preventDefault();
        let myItem = this.state.item;
        if (myItem.q > 0) {
            myItem.q -= 1;
        } else {
            myItem.q = 0
        }
        this.setState(
            {
                item: myItem
            }
        )
        this.props.myHandler();
    }
    render() {
        let image ='';
        if (this.state.item.image != null){
            image = this.state.item.image.src;
        } else {
            image = 'no-image-128.png';
        }
        let priceTagLock = this.state.item.finalPrice != this.state.item.variants[0].price;
             
        return (
            <div className='card mx-auto'>
                <img className='card-img-top' src={image} alt='Your product here'></img>
                <div className='card-body'>
                    <h5 className='card-title'>{this.state.item.title}</h5>
                    <p className='card-text text-truncate'>{this.state.item.body_html} asdasdas dasdasd asd asdas as das d</p>
                </div>

                <div className='card-footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3 mx-auto'>
                                <div className='btn btn-danger' onClick={this.setQminus.bind(this)}>-</div>
                            </div>
                            <div className='col-3 mx-auto'>
                                <div className='text-center'>{this.state.item.q}</div>
                            </div>
                            <div className='col-3 mx-auto'>
                                <div className='btn btn-success' onClick={this.setQplus.bind(this)}>+</div>
                            </div>
                        </div>  
                    </div>
                </div>
                
                <div className='card-footer'>
                    {priceTagLock && 
                        <h2 className='text-center'><del>${this.state.item.variants[0].price}</del> ${this.state.item.finalPrice}</h2>}
                    {!priceTagLock && 
                        <h2 className='text-center'>${this.state.item.variants[0].price}</h2>}
                </div>
            </div>
        );
    }

}

export default ProductCard;