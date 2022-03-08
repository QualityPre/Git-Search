import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-netural-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2"></div>
        <FaGithub className="inline pr-2 text-3xl" />
        <Link to="/" className="ml-5 text-lg font-bold align-middle ">
          {title}
        </Link>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm ">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm ">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GitHub Repo Search',
}
Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
