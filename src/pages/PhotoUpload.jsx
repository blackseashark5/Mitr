import React from 'react'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'

export default function PhotoUpload() {
  return (
    <>
    <div>PhotoUpload</div>
    <Gallery/>
    <Link to="/term">
         <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </Link>
    </>
  )
}
