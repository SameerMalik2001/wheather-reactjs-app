import React, { useState, useEffect } from 'react';
import cloudy from '../assets/cloudy.png'
import snow from '../assets/snow.png'
import sun from '../assets/sun.png'
import rain from '../assets/rainy-day.png'
import fog from '../assets/fog.png'

function WheatherBox() {
  const [data, setData] = useState({ cod: '404', message: 'city not found' })
  const [place, setPlace] = useState("")

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    const base_url = process.env.REACT_APP_API_URL
    const url = base_url + "appid=" + api_key + "&q=" + place
    fetch(url).then(da => da.json()).then(da => setData(da))
  }, [place]);

  return (
    <>
      <input className='mt-[90px] z-40 bg-blue-100 text-blue-600 p-1 border-none rounded-br-xl outline-none rounded-bl-xl h-8 w-[250px]' type="text" placeholder='Place' onChange={(e) => setPlace(e.target.value)} />
      <div className="bgimg mt-[-32px] shadow-lg shadow-blue-300 w-[350px] flex flex-col items-center justify-evenly h-[500px] bg-blue-200 rounded-tl-[45px] rounded-br-[45px] overflow-hidden">
        {data['cod'] === 200 &&
          <>
            <p className='text-[40px] text-center text-blue-700 font-sm'>{data['name']},{data['sys']['country']}</p>
            <div className='flex justify-evenly'>
              <div className='flex flex-col justify-center'>
                <p className='text-[30px] text-blue-700 font-[500]'>{data['weather'][0]['main']}</p>
                <p className='text-[30px] text-blue-700 font-[300]'>{data['cod'] === 200 ? (data['main']['temp'] - 273.15).toFixed(2) : "NULL"}&deg; C</p>
              </div>
              {
                ['Clouds', 'Cloudy', 'Cloud'].includes(String(data['weather'][0]['main'])) && <img className='w-48' src={cloudy} alt="img" />
              }
              {
                ['Snow', 'Snows'].includes(String(data['weather'][0]['main'])) && <img className='w-48' src={snow} alt="img" />
              }
              {
                ['Clear'].includes(String(data['weather'][0]['main'])) && <img className='w-48' src={sun} alt="img" />
              }
              {
                ['Rain', 'Rains', 'Rainy'].includes(String(data['weather'][0]['main'])) && <img className='w-48' src={rain} alt="img" />
              }
              {
                ['Fog', 'Foggy', 'Smoke'].includes(String(data['weather'][0]['main'])) && <img className='w-48' src={fog} alt="img" />
              }
              {
                !['Clear', 'Snow', 'Clouds', 'Cloudy', 'Cloud', 'Snows', 'Fog', 'Foggy', 'Smoke', 'Rain', 'Rains', 'Rainy'].includes(String(data['weather'][0]['main'])) && <img className='w-48' src={fog} alt="img" />
              }
            </div>
            <p className='text-[30px] text-center text-blue-700 font-[500]'>Humidity : {data['main']['humidity']}%</p>
          </>
        }
      </div>
    </>
  );
}

export default WheatherBox;
