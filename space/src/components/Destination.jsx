import React from 'react'
import '../styles/destination.css'
import NavBar from './NavBar'
import data from '../assets/data.json'

export default function Destination() {
  const moon = data.destinations[0];
  const mars = data.destinations[1];
  const europa = data.destinations[2];
  const titan = data.destinations[3];

  return (
    <>
      <div className='containerDestination'>


        <div className='destination' style={{border: '1px solid red'}}>
          <span className='number'>01</span>  Pick your destination
        </div>

        <div className='destinationBox' style={{border: '1px solid red'}}>

        </div>

        <div className='planetBox' style={{border: '1px solid red'}}>

        </div>
      </div>

    </>
  )
}
