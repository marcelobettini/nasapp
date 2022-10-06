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

    <div className='card'>
      < h2 > {rover.name}</h2 >
      <img src={rover.img} alt={rover.name} />
      {
        data && (
          <ul>
            <li>Rover name: {data.rover.name}</li>
            <li>Mission status: <span className={data.rover.status === 'active' ? "active" : "complete"}> {data.rover.status}</span></li>
            <li>Earth departure: {new Date(data.rover.launch_date).toDateString()}</li>
            <li>Mars arrival: {new Date(data.rover.landing_date).toDateString()}</li>
            <li>Time on duty: {getFormatedDate(data.rover.max_sol)}</li>
            <li>Last activity: {new Date(data.rover.max_date).toDateString()}</li>

            <li>Photos taken: {data.rover.total_photos}</li>
            <li>Cameras mounted: {data.rover.cameras.map(el => el.full_name).join(" / ")}</li>



          </ul>
        )
      }
    </div >
  )
}

export default Rover