import React from 'react'
import { useGet } from '../../hooks/useGet';

const Rover = ({ rover }) => {
  const ep = `/${rover.name}/`
  console.log(ep);
  const [data, error, loading] = useGet(ep)
  console.log(data);
  if (loading) return <p>Loading rover info...</p>
  if (error) return <p>Error loading rover info...</p>
  return (

    <div>
      <p> Rover: {rover.name}</p>
      <img src={rover.img} alt={rover.name} />
      {data && (
        <ul>
          <li>Rover: {data.rover.name}</li>
          <li>Status: {data.rover.status}</li>
          <li>Earth Departure: {data.rover.launch_date}</li>
          <li>Mars Arrival: {data.rover.landing_date}</li>
          <li>Martian Days on duty:{data.rover.max_sol}</li>
          <li>Last activity: {data.rover.max_date}</li>

          <li>Photos taken: {data.rover.total_photos}</li>
          <li>Cameras mounted: {data.rover.cameras.map(el => el.full_name).join(" / ")}</li>

          <li>{data.rover.status}</li>

        </ul>
      )}
    </div>
  )
}

export default Rover