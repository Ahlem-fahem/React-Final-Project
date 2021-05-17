import {useEffect, useState} from "react";
import BookItem from "./BookItem";
import axios from "axios";
import Book from "./Book";
import BookItemStatic from "./BookItemStatic";

export interface Book {
    id: number;
    title: string;
    isbn: string;
    category: string;
    user : User;
}
export interface User {
    id: number;
    isbn: string;
    category: string;
    name: string;
    age: number;
    email: string;
    userName: string;
    nbrEmpr: number;
}
function ListOfBooks() {
    const [books, setBooks] = useState<Book[]>();
    const [error, setError] = useState<string>()
    useEffect(() => {
        axios.get<Book[]>('http://localhost:8090/book/', {
            headers: {
                'Content-Type': 'application/json',
                crossDomain: true
            }, timeout: 10000
        }).then(response => {
            setBooks(response.data);
            console.log(response.data)

        }).catch((ex) => {
            setError(error);
            console.log(error)
        });

    }, []);

    return (
        <div className="h-auto">
            <header className="flex items-center pt-2 lg:pt-5 flex-col lg:space-y-5 bg-pink-200 h-36 lg:h-52 shadow-2xl">
                <h2 className="w-full text-lg text-pink-900 lg:text-4xl font-black flex justify-center lg:font-extrabold"> Here we go </h2>
                <h3 className="w-full text-lg text-gray-900 lg:text-2xl font-black flex justify-center lg:font-extrabold"> let's read and share books together ! </h3>
                <div className="flex space-x-10 justify-center pt-5 lg:pt-0">
                    <a href="/add" className="bg-gray-500 rounded-full py-2 px-5 font-bold text-white"> Add a book </a>
                </div>
            </header>

            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-auto gap-10 w-10/12 mx-auto py-10">
                 <BookItemStatic/>
                 <BookItemStatic/>
                 <BookItemStatic/>

                {books?.map(book => (<BookItem
                    key={book.id}{...book}/>))}
                {error && <p className="error">{error}</p>}
            </main>
        </div>

    );
}

export default ListOfBooks;


