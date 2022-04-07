import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" style={{ textDecoration: 'none', color: '#000'}}>
            Giver
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#000'}}>
            About
        </Link>
    </div>
  )
}
