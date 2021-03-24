import axios from 'axios'

const API_URL =
  `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
export const IMG_URL = `http://openweathermap.org/img/wn/`

export type WeatherResponse = {
  weather: {
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
    temp_min: number
    temp_max: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  name: string
}

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  const url = `${API_URL}&units=metric&q=${city}`

  const response = await axios(url)
  if (response.status === 200) return response.data

  // Could extend to all the error codes (try/catch)
  throw new Error()
}
