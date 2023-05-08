import { Link, Route, Routes } from 'react-router-dom'

import Crew from './Crew'
import Destination from './Destination'
import Technology from './Technology'
import React from 'react'
import styles from '../styles/home.module.css'
export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.tags}>
                        <Link to='/'><span>00</span> Home</Link>
                        <Link to='Destination'> <span>01</span> Destination</Link>
                        <Link to='Crew'><span>02</span> Crew</Link> 
                        <Link to='Technology'><span>03</span> Tecnology</Link> 
                    </div>
                </div>

                <div className={styles.box}>
                   <div className={styles.travel}> SO, YOU WANT TO TRAVEL TO</div>
                   <div className={styles.space}>SPACE</div> 
                   <p className={styles.p}>Let's face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!</p> 
                </div>

                <div className={styles.circle}>
                    Explore
                </div>
                
            </div>
            
            <Routes>
               
                <Route path='/Destination'element={<Destination/>} />
                <Route path='/Crew' element={<Crew/>}/>
                <Route path='/Technology' element={<Technology/>}/>
            </Routes>
        </>

    )
}
