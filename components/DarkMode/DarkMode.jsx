'use client'

import { useContext } from 'react'
import styles from './DarkMode.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const DarkMode = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
  return (
    <div className={styles.container} onClick={toggleTheme}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} 
            style={theme === "light" ? {left: "2px"} : {right: "2px"}}/>
    </div>
  )
}

export default DarkMode
