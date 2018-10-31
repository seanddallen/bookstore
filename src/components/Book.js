import React, {Component} from 'react'

const Book = (props) => {

  return(
    <div>
      <div className="flex flex-around flex-y-center" id="book">
        <div>
          <div>
            <b>Title:</b> {props.book.title}
          </div>
          <div>
            <b>Author:</b> {props.book.author}
          </div>
          <div>
            <b>Price:</b> ${props.book.price}
          </div>
        </div>
        <button className="btn btn-large btn-primary add-btn" onClick={()=>props.addBook(props.book)}>
          Add to Cart
        </button>
      </div>
      <hr>
      </hr>
    </div>

  )
}

export default Book
