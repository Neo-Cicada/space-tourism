import React from 'react'
import '../styles/destination.css'
import NavBar from './NavBar'
import data from '../assets/data.json'
import moonImg from '../assets/destination/image-moon.png'
import { useState } from 'react'
export default function Destination() {
  const moon = data.destinations[0];
  const mars = data.destinations[1];
  const europa = data.destinations[2];
  const titan = data.destinations[3];

  const [currentPlanet, setCurrentPlanet] = useState(moon.name);
  const [planetDescription, setPlanetDescription] = useState(moon.description)
  const [planetImage, setPlanetImage] = useState(moon.images.png)
  const [planetDistance, setPlanetDistance] = useState(moon.distance)
  const [planetTravel, setPlanetTravel] = useState(moon.travel)
  const btn = (event) =>{
    const clickedItem = event.target.textContent;
    setCurrentPlanet(clickedItem);
    if (clickedItem == moon.name){
      console.log('moon')
      setPlanetDescription(moon.description)
      setPlanetImage(moon.images.png)
      setPlanetDistance(moon.distance)
      setPlanetTravel(moon.travel)
    }
    else if(clickedItem == mars.name){
      console.log('mars')
      setPlanetDescription(mars.description)
      setPlanetImage(mars.images.png)
      setPlanetDistance(mars.distance)
      setPlanetTravel(mars.travel)
    }
    else if(clickedItem == europa.name){
      console.log('europa')
      setPlanetDescription(europa.description)
      setPlanetImage(europa.images.png)
      setPlanetDistance(europa.distance)
      setPlanetTravel(europa.travel)
    }
    else if(clickedItem == titan.name){
      console.log('titan')
      setPlanetDescription(titan.description)
      setPlanetImage(titan.images.png)
      setPlanetDistance(titan.distance)
      setPlanetTravel(titan.travel)
    }
    
  }


  

  return (
    <>
      <div className='containerDestination'>


        <div className='destination' >
          <span className='number'>01</span>  Pick your destination
        </div>

        <div className='destinationBox'>
          <div className='listBox'> 
              <ul className='planetList'>
                <li className='listName' onClick={btn}>{moon.name}</li>
                <li className='listName' onClick={btn}>{mars.name}</li>
                <li className='listName' onClick={btn}>{europa.name}</li>
                <li className='listName' onClick={btn}>{titan.name}</li>
              </ul>
          </div>
          <div className='planetName'>
            <div>{currentPlanet}</div>
          </div>
          <div className="planetDescription" >
            <p>{planetDescription}</p>
          </div>
          <div style={{background: '#383B4B', height: '1px', left:'1px'}}/>
          <div className='calculations'>
          
            <div className='distance'>

              <div className='avg'>
                AVG. DISTANCE
              </div>
              <div>
                {planetDistance}
              </div>
            </div>
            <div className='travelTime'>
              <div className='est'>
                EST. TRAVEL TIME
              </div>
              <div>
                {planetTravel}
              </div>
              
            </div>
          </div>
        </div>

        <div className='planetBox' >
            <img src={planetImage} alt="planet" />
        </div>
      </div>

    </>
  )
}
