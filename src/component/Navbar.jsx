import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            
            {/* <li class="nav-item">
               <Link class="nav-link" to="/second">
                Second
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/usestate1">
                Usestate1
              </Link>
            </li> */}
            <li class="nav-item">
               <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/shows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/usememo">
                Use Memo
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/form1">
                Form1
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/form2">
                Form2
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/form3">
                Form3
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/api1">
                Api1
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/api2">
                Api2
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/post1">
                Post 1
              </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/post2">
                Post 2
              </Link>
            </li>
            
            
            
            
          </ul>
        </div>
      </nav>
    </div>
  )
}
