import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = () => (
    <div className="fetching">
        <FaSpinner className="spinner" />
    </div>
)

export default Loading;
