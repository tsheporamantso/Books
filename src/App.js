import React, { useState } from 'react'
import BookCreate from './components/BookCreate'

const App = () => {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updateBooks = [...books, {title}]
    console.log(updateBooks)
    setBooks(updateBooks)
  }
  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App