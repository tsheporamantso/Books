import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import './index.css'


const App = () => {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    console.log('need to add book with title', title)
    // setBooks(title.target.value)
  }
  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App