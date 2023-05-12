
import '../styles/crew.css'
import React, { useState } from 'react';

import data from '../assets/data.json'



export default function Crew() {
  const commander = data.crew[0];
  const specialist = data.crew[1];
  const pilot = data.crew[2];
  const engineer = data.crew[3];

  const imgCommander = commander.images.png
  const imgSpecialist = specialist.images.png
  const imgPilot = pilot.images.png
  const imgEngineer = engineer.images.png



  const [name, setName] = useState(commander.name);
  const [role, setRole] = useState(commander.role);
  const [about, setAbout] = useState(commander.bio);
  const [image, setImage] = useState(imgCommander)
  
  const move = (event) =>{
    const id = event.target.id;
    

    if(id == 'first'){
      setName(commander.name)
      setRole(commander.role)
      setAbout(commander.bio)
      setImage(imgCommander)
      
    }
    else if(id == 'second'){
      setName(specialist.name)
      setRole(specialist.role)
      setAbout(specialist.bio)
      setImage(imgSpecialist)
    }
    else if(id == 'third'){
      setName(pilot.name)
      setRole(pilot.role)
      setAbout(pilot.bio)
      setImage(imgPilot)
    }
    else if(id == 'forth'){
      setName(engineer.name)
      setRole(engineer.role)
      setAbout(engineer.bio)
      setImage(imgEngineer)      
    }
  }

  return (
    <>
      <div className="containerCrew" >
        <div className='crewGreetings' > <span>02</span> MEET YOUR CREW</div>

        <div className='crewRole'>{role}</div>
        <div className='crewName'>{name}</div>
        <p className='crewAbout'>{about}</p>
        <div className='crewDots'>
          <div className='dots' id='first' onClick={move} ></div>
          <div className='dots' id='second'onClick={move}></div>
          <div className='dots' id='third' onClick={move}></div>
          <div className='dots' id='forth' onClick={move}></div>
        </div>

        <div className='crewImgBox'>
          <img src={image} alt={name} className='crewPicture'/>
        </div>
      </div>
    </>
  )
}
