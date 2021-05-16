import  React from  'react'
import {Link} from "react-router-dom";
function Login() {
  return (
<div className="bg-gray-200 h-auto">
    <header className="flex items-center bg-pink-200 h-20 lg:h-40 shadow-2xl">
        <h2 className="w-full text-lg text-pink-900 lg:text-4xl font-black flex justify-center capitalize lg:font-extrabold"> Welcome to your Online Library </h2>
    </header>

    <main>
        <div
            className="flex flex-col h-screen items-center mx-auto w-full md:w-2/3 px-4 py-8 bg-white shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div
                className="self-center mb-2 text-xl font-light font-bold text-gray-800 sm:text-2xl dark:text-white">
                Connect to your account
            </div>
            <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                You don't have an account ?
                <Link to="/"  className="text-sm text-blue-500 underline hover:text-blue-700 ml-2">
                    Sign up
                </Link>
            </span>
            <div className="p-6 mt-8">
                <form action="#" className="w-64 sm:72 lg:w-96">
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="text" id="login-account-email"
                                   className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                   name="pseudo" placeholder="Email"/>
                        </div>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="password" id="login-account-password"
                                   className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                   placeholder="Password"/>
                        </div>
                    </div>
                    <div className="flex w-full my-4">
                        <button type="submit"
                                className="py-2 px-4  bg-pink-200 hover:bg-pink-700 border border-pink-700 hover:text-white focus:ring-pink-500 focus:ring-offset-pink-200 text-pink-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
  );
}

export default Login;
