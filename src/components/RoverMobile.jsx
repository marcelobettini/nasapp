import Loading from 'react-loading-components'
import './Rover.css'
import { useGet } from '../../hooks/useGet';
import { getFormatedDate } from '../../helpers/getFormatedDate';

const Rover = ({ rover }) => {
  const ep = `/${rover.name}/`
  const [data, error, loading] = useGet(ep)

  if (loading) return <Loading type='three_dots' width={100} height={100} fill='#42f489' />
  if (error) return <p>Error loading rover info...</p>
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

export default Rover