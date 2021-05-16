import  React from  'react'
import {RouteComponentProps} from "react-router-dom";

interface TParams {
    id: string;
}
function Book({match}: RouteComponentProps<TParams>) {
    return (
        <div className="h-auto">
            <header className="flex items-center pt-5 lg:pt-10 flex-col lg:space-y-5 bg-pink-200 h-20 lg:h-36 shadow-2xl">
                <h2 className="w-full text-lg text-pink-900 lg:text-4xl font-black flex justify-center lg:font-extrabold"> enjoy this book </h2>
            </header>

            <main className="lg:w-6/12 lg:mx-auto flex flex-wrap justify-between " >
                <div className="">
                    <div className="flex flex-col w-56 lg:w-72 my-10 lg:my-20 h-auto bg-gray-200 rounded-lg shadow-xl hover:shadow-2xl">
                        <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 lg:h-4/6 rounded-t-lg"/>
                        <div className="py-5">
                            <div className="text-center py-2 mx-auto text-extrabold">
                                <span className="text-yellow-900 font-black"> Title : </span>
                                The fault in our stars
                            </div>

                            <div className="text-center py-2 mx-auto text-extrabold">
                                <span className="text-yellow-900 font-black"> Author : </span>
                                John Green
                            </div>

                            <div className="text-center py-2 mx-auto text-extrabold">
                                <span className="text-yellow-900 font-black"> Cathegory : </span>
                                Adult
                            </div>

                            <div className="flex justify-center items-center py-5">
                                <button className="bg-gray-500 hover:bg-gray-700 rounded-full py-2 px-5 font-bold text-white ">
                                    Borrow this book
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20">
                    <textarea
                        className="w-96 h-72 border border-gray-600 rounded-lg pl-5 pt-2">
                           Write your comment here
                    </textarea>
                    <div className="flex justify-center items-center py-5">
                        <button className="bg-gray-500 hover:bg-gray-700 rounded-full py-2 px-5 font-bold text-white ">
                            Comment
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Book;
