import { useState } from 'react'

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',

  })

  const handleInputChange = (evt) => {
    setNewBook({ ...newBook, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setBooks([ ...books, newBook ])
    setNewBook({
      title: '',
      author: '',
    })
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              name='title'
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor='author'>Author</label>
            <input
              id='author'
              name='author'
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}</div>
      </div>
      {books.map((book, idx) => (
          <div key={idx} className='bookCard'>
            <h2>{book.title}</h2>
            <p>by: {book.author}</p>
          </div>
      ))}

    </>
  )
}




export default Bookshelf