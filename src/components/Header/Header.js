import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <nav className="bg-teal-400 container mx-auto mb-10">
      <div className="flex flex row justify-end items-center text-1xl mr-16 h-16 mt-5">
        <Link
          to="/"
          className="hover:bg-yellow-400 cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="hover:bg-yellow-400 cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          Profile
        </Link>
        <Link
          to="/product"
          className="hover:bg-yellow-400 cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          Product
        </Link>
        <Link
          to="/orders"
          className="cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          Orders
        </Link>
        <Link
          to="/about"
          className="hover:bg-yellow-400 cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          About
        </Link>
        <Link
          to="/login"
          className="hover:bg-yellow-400 cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="hover:bg-yellow-400 cursor-pointer mr-5 px-5 py-1 border border-0 bg-white rounded-md"
        >
          SignUp
        </Link>
      </div>
    </nav>
  )
}
