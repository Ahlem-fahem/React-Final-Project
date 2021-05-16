import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import Loader from 'react-loader-spinner';

const Loading = () => (
    <div className="text-center">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000} //3 secs
      />
          </div>
)

export default Loading;
