import  React from  'react'
import {Book} from "./ListOfBooks";
import {Link} from "react-router-dom";

function BookItem({...book}: Book) {
    return (
        <Link to={`/books/${book.id}`}>

        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                {book.title}
            </div>

        </a>
        </Link>

    );
}

export default BookItem;
