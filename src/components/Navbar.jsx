import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css'
import Tolleson from '../assets/Tolleson2.png'

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='Logo'>
        <img src={Tolleson} />
      </div>

      <div className='Links'>
        <Link>Benefits</Link>
        <Link>Job Positions</Link>
        <Link>Job Application</Link>
      </div>
      
    </nav>
  );
}
