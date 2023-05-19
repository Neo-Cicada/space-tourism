import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'


export default function NavBar() {
  return (
    
      <div className='navigation'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
            </g>
          </svg>
        </div>
        <div className='line'></div>
        <nav className='tagsBar'>
          <Link to="/" className='homeBar'>
            <span>00</span> Home
          </Link>
          <Link to="Destination" className='destinationBar'>
            <span>01</span> Destination
          </Link>
          <Link to="Crew" className='crewBar'>
            <span>02</span> Crew
          </Link>
          <Link to="Technology" className='technologyBar'>
            <span>03</span> Technology
          </Link>
        </nav>
      </div>
    
  );
}