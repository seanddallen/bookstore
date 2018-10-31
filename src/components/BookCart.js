import React, {Component} from 'react'
import CartItem from './CartItem'

class BookCart extends Component{

  state = {

  }

  render(){
    let totalPrice = 0;
    let ItemsInCart = this.props.cartItems.map(book => {
      totalPrice += book.price
      return <CartItem key={book.id} book={book} />
    })


    return (
      <div>
        <div>
          {ItemsInCart}
        </div>
        <div className="flex-col flex-x-center">
          <div className="text-center mt-3">
            <span className="badge-pill badge-secondary p-2">Total: ${totalPrice}</span>
          </div>
          <button id="checkout-btn" className="btn btn-large btn-warning mt-3">
            <b>Checkout</b>
          </button>
        </div>
      </div>

    )
  }

}

export default BookCart
