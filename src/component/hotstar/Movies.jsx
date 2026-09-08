import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  return (
    <div>
        <h1>Movies</h1>
        <ol>
            <li>
                <Link to="/watch/dhurandar">Dhurandar</Link>
            </li>
            <li>
                <Link to="/watch/omg">OMG</Link>
            </li>
            <li>
                <Link to="/watch/RRR">RRR</Link>
            </li>
        </ol>
    </div>
  )
}
