import  React from  'react'
import {Link} from "react-router-dom";

function HomePage() {
  return (
<div className="h-auto">
    <header className="flex items-center pt-2 lg:pt-5 flex-col lg:space-y-5 bg-pink-200 h-36 lg:h-52 shadow-2xl">
        <h2 className="w-full text-lg text-pink-900 lg:text-4xl font-black flex justify-center lg:font-extrabold"> Here we go </h2>
        <h3 className="w-full text-lg text-gray-900 lg:text-2xl font-black flex justify-center lg:font-extrabold"> let's read and share books together ! </h3>
        <div className="flex space-x-10 justify-center pt-5 lg:pt-0">
            <a href="#" className="bg-gray-500 rounded-full py-2 px-5 font-bold text-white"> Add a book </a>
        </div>
    </header>

    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-auto gap-10 w-10/12 mx-auto py-10">
        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                The fault in our stars
            </div>
        </a>

        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                The fault in our stars
            </div>
        </a>

        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                The fault in our stars
            </div>
        </a>

        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                The fault in our stars
            </div>
        </a>

        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                The fault in our stars
            </div>
        </a>

        <a href="#" className="flex flex-col w-48 h-64 bg-gray-200 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
            <img src="https://m.media-amazon.com/images/I/51ZY+-dLODL.jpg" className="object-cover h-5/6 rounded-t-lg"/>
            <div className="text center py-2 mx-auto text-extrabold">
                The fault in our stars
            </div>
        </a>

    </main>
</div>
  );
}

export default HomePage;
