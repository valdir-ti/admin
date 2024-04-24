'use client'

import Image from 'next/image'
import { MdSunny } from 'react-icons/md'
import { getCookie, setCookie } from 'cookies-next'
import { useCallback, useEffect, useState } from 'react'

export default function WheaterForecast() {
  const cookieLocation = getCookie('location')
  const value = JSON.parse(cookieLocation || '{}')
  const [data, setData] = useState({})
  const [fireSearch, setFireSearch] = useState(false)
  const [title, setTitle] = useState('Searching...')

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setCookie('location', { latitude, longitude })
        setFireSearch(true)
      })
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    getLocation()
  }, [getLocation])

  useEffect(() => {
    const getWheaterForecastData = async (
      latitude: number,
      longitude: number
    ) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&lang=pt&key=${process.env.NEXT_PUBLIC_WHEATER_SECRET}`
        )
        const data = await response.json()
        return data
      } catch (error) {
        console.error(error)
      }
    }

    getWheaterForecastData(value?.latitude, value?.longitude)
      .then((data) => {
        setData(data)
        setTitle('Wheater Forecast')
      })
      .catch((err) => console.error(err))
  }, [value?.latitude, value?.longitude, fireSearch])

  const url = `https:${data?.current?.condition?.icon}`

  return data?.error?.code === 1006 ? (
    <>
      <div className="ml-2 flex flex-col gap-4">
        <span className="font-bold">
          <div className="flex items-center">
            <MdSunny className="text-yellow-200" />{' '}
            <p className="ml-2 text-yellow-500">Not Wheater Forecast</p>
          </div>
        </span>
      </div>
    </>
  ) : (
    <>
      <div className="absolute bottom-4 right-4 w-[50%] h-[50%]">
        <Image
          src="/cloud.png"
          alt="cloud"
          width={180}
          height={180}
          className="object-fill opacity-10"
        />
      </div>

      <div className="ml-2 flex flex-col gap-4">
        <span className="font-bold">
          <div className="flex items-center">
            <MdSunny className="text-yellow-200" />{' '}
            <p className="ml-2 text-yellow-500">{title}</p>
          </div>
        </span>
        <h3 className="font-semibold text-base">{data?.location?.name}</h3>
        <div className="text-xl font-bold">
          <p className="flex items-center ">
            {!data?.current?.temp_c ? '...' : `${data?.current?.temp_c}º`}
            {data?.current?.condition?.icon && (
              <Image
                src={url}
                width={54}
                height={54}
                alt={data?.current?.condition?.text || 'Icon'}
              />
            )}
          </p>
          <span className="text-sm">{data?.current?.condition?.text}</span>
        </div>
        <p className="text-sm font-bold">
          {!data?.current?.wind_kph
            ? '...'
            : `Vento: ${data?.current?.wind_kph} km/h`}
        </p>
        <p className="text-sm font-bold">
          {!data?.current?.humidity
            ? '...'
            : `Humidade: ${data?.current?.humidity}%`}
        </p>
      </div>
    </>
  )
}
