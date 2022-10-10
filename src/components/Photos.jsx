import React, { useState } from 'react'
import { useGet } from '../../hooks/useGet'
import Thumbnail from './Thumbnail';

const Photos = () => {
  console.log('Mounted Photos');
  let sol = 1
  let page = 1
  let rover = 'spirit'
  const [ep, setEp] = useState(`${rover}/photos?sol=${sol}?page=${page}&`)
  const [data, loading, error] = useGet(ep)
  console.log(data);

  const handleSolSet = (e) => {
    if (e.key === 'Enter') {
      sol = e.target.value
      setEp(prev => prev = `${rover}/photos?sol=${sol}?page=${page}&`)
    }
  }
  return (

    <div className="row">
      <select name="rover" id="rover" onChange={(e) => setEp(prev => prev = `${e.target.value}/photos?sol=${sol}?page=${page}&`)}>
        <option value="spirit">spirit</option>
        <option value="opportunity">opportunity</option>
        <option value="curiosity">curiosity</option>
        <option value="perseverance">perseverance</option>
      </select>

      <input type="number" placeholder='Enter day' onKeyDown={handleSolSet} />
      {data.photos && (
        <>
          <span>Day on Mars: {sol}</span>  <span>Earth Date: {new Date(data.photos[0].earth_date).toDateString()}</span>


          {data.photos.map(el => <Thumbnail props={el} key={el.id} />)}
        </>)}
    </div>


  )


}

export default Photos