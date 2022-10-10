import React from 'react'
import './Main.css'


const Main = () => {
  return (
    <main id="home">
      <video className='videobg' loop autoPlay muted>
        <source src='../../assets/media/RoverLanding.mp4' type='video/mp4' />
      </video>
      <header className='ttlHeader'>
        <h3>Exploration of Mars</h3>
        <h1 className='ttl'>The Rover <br /> Missions</h1>

      </header>

    </main >
  )
}

export default Main