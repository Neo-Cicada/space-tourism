import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'

export default function NavBar() {
    return (
        <>
            <div className={styles.navigation}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                    </div>
                    <div className={styles.line}></div>
                    <nav className={styles.tags}>
                        <Link to='/'><span>00</span> Home</Link>
                        <Link to='Destination'><span>01</span> Destination</Link>
                        <Link to='Crew'><span>02</span> Crew</Link>
                        <Link to='Technology'><span>03</span> Technology</Link>
                    </nav>

                </div>
        </>
    )
}
