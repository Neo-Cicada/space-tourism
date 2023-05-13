import React from 'react'
import '../styles/technology.css'
import data from '../assets/data.json'
import { useState } from 'react'

export default function Technology() {
  const vehicle = data.technology[0];
  const port = data.technology[1];
  const capsule = data.technology[2];

  const imgVehicle = vehicle.images.portrait;
  const imgPort = port.images.portrait;
  const imgCapsule = capsule.images.portrait;

  const [name, setName] = useState(vehicle.name)
  const [techImg, setTechImg] = useState(imgVehicle)
  const [about, setAbout] = useState(vehicle.description)
  const click = (event) =>{
    const id = event.target.id;
    console.log(id)
    if(id == 'cOne'){
      setName(vehicle.name)
      setTechImg(imgVehicle)
      setAbout(vehicle.description)
    }
    else if(id == 'cTwo'){
      setName(port.name)
      setTechImg(imgPort)
      setAbout(port.description)
    }
    else if(id == 'cThree'){
      setName(capsule.name)
      setTechImg(imgCapsule)
      setAbout(capsule.description)
    }
  }
  
  return (
    <div className="container">
      <div className="launch">
     <span>03</span>SPACE LAUNCH 101
      </div>

      <div className='techBox'>
        <div className='terminology'>
        THE TERMINOLOGY…
        </div>
        <div className='techTitles'>
        {name}
        </div>
        <p className='techAbout'>
          {about}
        </p>
      </div>
      
      <div className="techCircles" id='cOne' onClick={click}>1</div>
      <div className="techCircles" id='cTwo' onClick={click}>2</div>
      <div className="techCircles" id='cThree' onClick={click}>3</div>

      
      <div className="techImg">
        <img src={techImg} alt={name} />
      </div>
    </div>
  )
}
