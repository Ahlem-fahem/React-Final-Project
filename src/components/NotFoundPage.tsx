import  React from  'react'
import {Link} from "react-router-dom";
function NotFoundPage() {
  return (
<div className="bg-gray-200 h-auto">
    <header className="flex items-center bg-pink-200 h-20 lg:h-40 shadow-2xl">
        <h2 className="w-full text-lg text-pink-900 lg:text-4xl font-black flex justify-center capitalize lg:font-extrabold"> 404 Not found </h2>
    </header>
</div>
  );
}

export default NotFoundPage;
