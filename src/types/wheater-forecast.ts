export type positionProps = {
  latitude: number
  longitude: number
}

export type DataWheaterForecastProps = {
  location: {
    name: string
  }
  current: {
    temp_c: number
    humidity: number
    wind_kph: number
    condition: {
      icon: string
      text: string
    }
  }
  error?: {
    code: number
  }
}
