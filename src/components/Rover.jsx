import React from 'react'
import Loading from 'react-loading-components'
import './Rover.css'
import { useGet } from '../../hooks/useGet';
import { getFormatedDate } from '../../helpers/getFormatedDate';

const Rover = ({ rover }) => {
  const ep = `/${rover.name}/`
  console.log(ep);
  const [data, error, loading] = useGet(ep)
  console.log(data);
  if (loading) return <Loading type='three_dots' width={100} height={100} fill='#f44242' />
  if (error) return <p>Error loading rover info...</p>
  return (

    <article className='card'>
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
}

export default Rover