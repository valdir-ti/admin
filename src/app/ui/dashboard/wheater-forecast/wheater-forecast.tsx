'use client'

import Image from 'next/image'
import { MdSunny } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { dataProps, positionProps } from '@/types'

export default function WheaterForecast() {
  const [position, setPosition] = useState<positionProps>({
    latitude: 0,
    longitude: 0
  })
  const [data, setData] = useState<dataProps>({})
  const [url, setUrl] = useState('')

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    async function getWheaterForecastData() {
      try {
        const { latitude, longitude } = position

        if (latitude !== 0 && longitude !== 0) {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&lang=pt&key=${process.env.NEXT_PUBLIC_WHEATER_SECRET}`
          )
          const data = await response.json()

          if (!data.error) {
            setData(data)
            setUrl(`https:${data?.current?.condition?.icon}`)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    getWheaterForecastData()
  }, [position])

  return (
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
            <p className="ml-2 text-yellow-500">Wheater Forecast</p>
          </div>
        </span>
        <h3 className="font-semibold text-base">
          {!data?.location?.name ? '...' : data?.location?.name}
        </h3>
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
