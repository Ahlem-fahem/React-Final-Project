import  React from  'react'
import {Link} from "react-router-dom";

function Addbook() {
    return (
        <div className="h-auto">
            <header className="flex items-center pt-2 lg:pt-5 flex-col lg:space-y-5 bg-pink-200 h-20 lg:h-20 shadow-2xl">
                <h2 className="w-full text-lg text-pink-900 lg:text-2xl font-black flex justify-center lg:font-extrabold"> Now you can add your favorite/own book and share it from here </h2>
            </header>

            <main className="flex flex-col items-center mx-auto w-full md:w-2/3 px-4 py-8 sm:px-6 md:px-8 lg:px-10">
                <div className="p-6 mt-8">
                    <form action="#" className="w-64 sm:72 lg:w-96">
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" id="title"
                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                       name="title" placeholder="Title"
                                        />
                            </div>
                        </div>

                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" id="isbn"
                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                       placeholder="Isbn"
                                        />
                            </div>
                        </div>

                        <div className="flex flex-col my-5">
                            <div className=" relative ">
                                <label>Insert a cover photo</label>
                                <input type="file" id="photo"
                                       className=" rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                       />
                            </div>
                        </div>

                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <p>Select a book cathegory:</p>
                                    <div>
                                         <input type="radio" id="huey" name="drone" value="huey"
                                                   />
                                                <label htmlFor="huey" className="mx-2">Adult</label>
                                    </div>

                                    <div>
                                         <input type="radio" id="dewey" name="drone" value="dewey"/>
                                                <label htmlFor="dewey" className="mx-2">Teenager</label>
                                    </div>

                                    <div>
                                         <input type="radio" id="louie" name="drone" value="louie"/>
                                                <label htmlFor="louie" className="mx-2">Children</label>
                                    </div>
                            </div>
                        </div>

                        <div className="flex w-full my-4">
                            <button type="submit"
                                    className="py-2 px-4  bg-pink-200 hover:bg-pink-700 border border-pink-700 hover:text-white focus:ring-pink-500 focus:ring-offset-pink-200 text-pink-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Add book
                            </button>
                        </div>
                    </form>
                </div>

            </main>
        </div>
    );
}
export default Addbook;
