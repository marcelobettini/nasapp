import React, { useState, useEffect } from "react";
import Loading from 'react-loading-components'
import './Rover.css'
import { useGet } from '../../hooks/useGet';
import { getFormatedDate } from '../../helpers/getFormatedDate';

const Rover = ({ rover }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
  const vwUpdate = () => {
    setIsMobile(window.innerWidth < 720);
  };
  useEffect(() => {
    window.addEventListener("resize", vwUpdate);
    return () => window.removeEventListener("resize", vwUpdate);
  }, []);

  const ep = `/${rover.name}/`
  const [data, error, loading] = useGet(ep)

  if (loading) return <Loading type='three_dots' width={100} height={100} fill='#f44242' />
  if (error) return <p>Error loading rover info...</p>

  if (!isMobile) {
    return (
      <article className='cardRover my-5'>
        <header className='left'>
          < h2 > {rover.name}</h2 >
          <img src={rover.img} alt={rover.name} />
          {
            data && (
              <p>Mission status: <span className={data.rover.status === 'active' ? "active" : "complete"}> {data.rover.status}</span></p>
            )
          }
        </header>
        <div className="right">
          <ul>
            <li><p className='li-title'>Earth departure</p> <p className='li-description'>{new Date(data.rover.launch_date).toDateString()}</p></li>
            <li> <p className='li-title'>Mars arrival</p> <p className='li-description'>{new Date(data.rover.landing_date).toDateString()}</p></li>
            <li> <p className='li-title'>Time on duty</p> <p className='li-description'> {getFormatedDate(data.rover.max_sol)}</p></li>
            <li><p className='li-title'>Photos taken</p> <p className='li-description'>{Number(data.rover.total_photos).toLocaleString()}</p></li>
          </ul>
        </div>

      </article >
    )
  } else {
    return (
      <article className='cardRoverM my-5'>
        <header className='top'>
          < h2 >{rover.name}</h2 >
          <img src={rover.img} alt={rover.name} />
          {
            data && (
              <p>Mission status: <span className={data.rover.status === 'active' ? "active" : "complete"}> {data.rover.status}</span></p>
            )
          }
        </header>
        <div className="bottom">
          <ul>
            <li><p className='li-titleM'>Earth departure</p> <p className='li-descriptionM'>{new Date(data.rover.launch_date).toDateString()}</p></li>
            <li> <p className='li-titleM'>Mars arrival</p> <p className='li-descriptionM'>{new Date(data.rover.landing_date).toDateString()}</p></li>
            <li> <p className='li-titleM'>Time on duty</p> <p className='li-descriptionM'> {getFormatedDate(data.rover.max_sol)}</p></li>
            <li><p className='li-titleM'>Photos taken</p> <p className='li-descriptionM'>{Number(data.rover.total_photos).toLocaleString()}</p></li>
          </ul>
        </div>

      </article >
    )
  }

}

export default Rover