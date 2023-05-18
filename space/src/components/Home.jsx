import { Link} from 'react-router-dom'
import NavBar from './NavBar'

import React from 'react'
import styles from '../styles/home.module.css'
export default function Home(props) {
    return (
        <>
            <div className={styles.container}>
                
                {props.navbar}
                
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
                

                
             {/* commenting so I can commit something today, because I had a busy day that I didnt have time to code:) */}
                

            </div>

            
        </>

    )
}
