import React, {Component} from 'react'

const CartItem = (props) => {

  return(
    <div>
      <div className="flex flex-around flex-y-center" id="book">
        <div>
          {props.book.title}
        </div>
        <div>
          ${props.book.price}
        </div>
        <button className="btn btn-danger" onClick={()=>props.removeBook(props.book)}>
          Remove
        </button>
      </div>
      <hr className="hr">
      </hr>
    </div>
  )
}

export default CartItem
