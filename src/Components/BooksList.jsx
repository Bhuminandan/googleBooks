import React, {useContext} from 'react'
import BooksContext from '../Context/BooksContext'

const BooksList = () => {
  const data = useContext(BooksContext)
  return (
    <div className="booklist-wrapper px-10 bg-zinc-900 text-white">
        <h1 className='font-bold text-4xl pt-10 pl-10'>More Books</h1>
        <div className='flex flex-wrap items-center justify-start gap-10 '>
            {
              data.map((singleData) => {
                return(
                  <img key={singleData?.id} src={ singleData?.volumeInfo.imageLinks.thumbnail} className=' w-64 p-10 cursor-pointer hover:scale-105 duration-300 transition-all' alt="Book" />
                 
                )
              })
            }
        </div>
    </div>

  )
}

export default BooksList